@echo off
cd /d "%~dp0"
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0start-site.ps1"
set "rc=%errorlevel%"
echo.
if not "%rc%"=="0" echo The launcher stopped with an error. Details are in tools\start-site.log
pause
