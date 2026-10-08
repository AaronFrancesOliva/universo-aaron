# Copia de seguridad diaria del UNIVERSO AARON (la lanza la tarea de Windows «UNIVERSO AARON - copia diaria»).
# Guarda en git todos los cambios del vault y, si hay remoto, los sube a GitHub. Deja un registro en .git/copia.log.
$ErrorActionPreference = "Continue"
$vault = Split-Path -Parent $PSScriptRoot
$git = (Get-Command git -ErrorAction SilentlyContinue).Source
if (-not $git) { $git = "C:\Program Files\Git\cmd\git.exe" }
$log = Join-Path $vault ".git\copia.log"
function Log($m) { Add-Content -Path $log -Value ("{0:yyyy-MM-dd HH:mm} {1}" -f (Get-Date), $m) -Encoding utf8 }

Set-Location $vault
# Seguridad: los archivos nuevos de más de 95 MB no se suben (GitHub no los admite); se apuntan para no volver a intentarlo
$exclude = Join-Path $vault ".git\info\exclude"
& $git ls-files --others --exclude-standard -z | ForEach-Object { $_ -split "`0" } | Where-Object { $_ } | ForEach-Object {
  $f = Join-Path $vault $_
  if ((Test-Path $f) -and ((Get-Item $f).Length -gt 95MB)) { Add-Content -Path $exclude -Value $_ -Encoding utf8; Log "EXCLUIDO por tamaño: $_" }
}
& $git add -A
& $git diff --cached --quiet
if ($LASTEXITCODE -ne 0) {
  $n = (& $git diff --cached --name-only | Measure-Object).Count
  # el mensaje va en un archivo UTF-8: PowerShell 5.1 estropea los acentos al pasarlos como argumento
  $msg = Join-Path $vault ".git\COPIA_MSG"
  [IO.File]::WriteAllText($msg, ("Copia automática {0:yyyy-MM-dd HH:mm} ({1} archivos)" -f (Get-Date), $n), (New-Object Text.UTF8Encoding $false))
  & $git commit -q -F $msg
  Log "copia hecha: $n archivos"
} else { Log "sin cambios" }
if (& $git remote) {
  & $git push -q origin main 2>&1 | Out-Null
  if ($LASTEXITCODE -eq 0) { Log "subida a GitHub: ok" } else { Log "subida a GitHub: ERROR (¿sin conexión o sin sesión?)" }
}
