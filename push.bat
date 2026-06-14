@echo off
echo Pushing to GitHub...

git add .
git commit -m "Portfolio update: improved UI, components, and live projects section"
git branch -M main
git remote remove origin 2>nul
git remote add origin https://github.com/varuntejreddy03/varuntej.git
git push -u origin main

echo Done!
pause