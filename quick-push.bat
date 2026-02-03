@echo off
REM Quick push with auto-generated commit message

setlocal enabledelayedexpansion
for /f "tokens=2-4 delims=/ " %%a in ('date /t') do (set mydate=%%c-%%a-%%b)
for /f "tokens=1-2 delims=/:" %%a in ('time /t') do (set mytime=%%a%%b)

set commit_msg=Portfolio Update - %mydate% %mytime%

echo.
echo Pushing with commit: "%commit_msg%"
echo.

git add .
git commit -m "%commit_msg%"
git push origin main

if %errorlevel% equ 0 (
    echo SUCCESS: Code pushed to GitHub!
) else (
    echo ERROR: Push failed!
)
pause
