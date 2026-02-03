@echo off
REM Portfolio Push to GitHub Script
REM This script adds all changes, commits them, and pushes to GitHub

echo.
echo ========================================
echo     PORTFOLIO PUSH TO GITHUB
echo ========================================
echo.

REM Check if git is installed
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo ERROR: Git is not installed or not in PATH
    echo Please install Git from https://git-scm.com/
    pause
    exit /b 1
)

REM Check if we're in a git repository
if not exist .git (
    echo ERROR: Not a git repository
    echo Please run 'git init' first or clone the repository
    pause
    exit /b 1
)

REM Display current status
echo Checking git status...
git status
echo.

REM Get commit message
set /p commit_msg="Enter commit message (default: 'Update portfolio'): "
if "%commit_msg%"=="" set commit_msg=Update portfolio

REM Add all changes
echo.
echo Adding all changes...
git add .
echo Added successfully!

REM Commit changes
echo.
echo Committing changes with message: "%commit_msg%"
git commit -m "%commit_msg%"

REM Check if commit was successful
if %errorlevel% neq 0 (
    echo WARNING: Commit failed or nothing to commit
)

REM Push to GitHub
echo.
echo Pushing to GitHub...
git push origin main

REM Check if push was successful
if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo SUCCESS: Code pushed to GitHub!
    echo ========================================
    echo.
) else (
    echo.
    echo ERROR: Push failed!
    echo Please check your GitHub credentials and internet connection
    echo.
)

pause
