@echo off
REM Initialize Git Repository and Push to GitHub
REM This script sets up git for the first time and pushes to the remote

echo.
echo ========================================
echo   GIT INITIALIZATION & FIRST PUSH
echo ========================================
echo.

REM Check if git is installed
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo ERROR: Git is not installed
    echo Download from: https://git-scm.com/download/win
    pause
    exit /b 1
)

REM Initialize git repository
if exist .git (
    echo Git repository already exists
) else (
    echo Initializing git repository...
    git init
    echo Git initialized!
)

echo.
echo Setting up GitHub remote...
REM Check if remote already exists
git remote get-url origin >nul 2>&1
if %errorlevel% equ 0 (
    echo Remote origin already configured
) else (
    git remote add origin https://github.com/varuntejreddy03/varuntej.git
    echo Remote origin added!
)

REM Set branch to main (GitHub default)
echo.
echo Setting branch to main...
git branch -M main

REM Configure git user (optional but recommended)
echo.
echo Configuring git user...
git config user.email "your_email@example.com"
git config user.name "Varuntej Reddy"

REM Add all files
echo.
echo Adding all files to git...
git add .
echo Files added!

REM Initial commit
echo.
echo Creating initial commit...
git commit -m "Initial commit: Portfolio project"

REM Push to GitHub
echo.
echo Pushing to GitHub (main branch)...
git push -u origin main

REM Check result
if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo SUCCESS: Repository initialized and pushed!
    echo ========================================
    echo Repository URL: https://github.com/varuntejreddy03/varuntej
    echo.
) else (
    echo.
    echo ERROR: Push failed!
    echo Please check:
    echo 1. GitHub credentials
    echo 2. Repository URL is correct
    echo 3. Internet connection
    echo.
)

pause
