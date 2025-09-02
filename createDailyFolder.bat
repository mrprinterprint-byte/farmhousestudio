@echo off
setlocal


for /f %%a in ('wmic path win32_localtime get dayofweek ^| findstr /r "^[0-9]"') do set dow=%%a


if "%dow%"=="0" exit /b
if "%dow%"=="6" exit /b


for /f %%a in ('powershell -command "Get-Date -format yyyy-MM-dd"') do set today=%%a


set foldername=Folder_%today%

:: this is folder nameee okk
mkdir C:\Users\mrpri\Desktop\Bern\%foldername%"

endlocal
