@echo off
chcp 65001 >nul
cd /d "D:\汪珍妮-工作资料\独立站用图\Growclimate 源代码\growclimate-site"

echo Configuring Git...
git config user.name "GrowClimate"
git config user.email "info@growclimate.com"

echo Adding remote...
git remote add origin https://github.com/Growclimate/Growclimate.git

echo Adding files...
git add .

echo.
echo Files to be committed:
git status

echo.
echo Creating commit...
git commit -m "Initial commit: GrowClimate B2B website with Vue 3 + Vite"

echo.
echo ========================================
echo   Git 仓库已初始化并提交
echo ========================================
echo.
echo 请在 GitHub 创建仓库后，运行：
echo   git push -u origin main
echo.
pause
