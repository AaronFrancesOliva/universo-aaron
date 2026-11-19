@echo off
rem TRAYECTO: arranca el servidor local (si no esta ya en marcha) y abre la app en el navegador.
cd /d "%~dp0"
start "TRAYECTO" /min node --disable-warning=ExperimentalWarning servidor.mjs
timeout /t 1 /nobreak >nul
start "" http://127.0.0.1:4317
