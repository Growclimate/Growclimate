@echo off
chcp 65001 >nul
echo ========================================
echo   GrowClimate GitHub 上传脚本
echo ========================================
echo.

REM Check if Git is installed
where git >nul 2>&1
if %errorlevel% neq 0 (
    echo [1/5] 正在下载并安装 Git...
    powershell -Command "Invoke-WebRequest -Uri 'https://github.com/git-for-windows/git/releases/download/v2.44.0.windows.1/Git-2.44.0-64-bit.exe' -OutFile 'C:\git-installer.exe'"
    echo 安装 Git（将自动安装，请点击 Next 完成）...
    start /wait C:\git-installer.exe /VERYSILENT /NORESTART
    del C:\git-installer.exe
    echo Git 安装完成！
    echo 请重新运行此脚本。
    pause
    exit
)

REM Check for GitHub CLI
where gh >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo [注意] 未检测到 GitHub CLI (gh)
    echo 如果您已安装 gh，请确保它在 PATH 中
    echo.
)

echo [1/6] 初始化 Git 仓库...
cd /d "%~dp0"
git init
if %errorlevel% neq 0 (
    echo Git 初始化失败！
    pause
    exit /b 1
)

echo [2/6] 配置 Git 用户信息...
git config user.name "GrowClimate"
git config user.email "info@growclimate.com"

echo [3/6] 添加远程仓库...
git remote add origin https://github.com/Growclimate/Growclimate.git

echo [4/6] 添加文件（排除 node_modules）...
git add .
git status

echo.
echo [5/6] 创建初始提交...
git commit -m "Initial commit: GrowClimate B2B website with Vue 3 + Vite"

echo.
echo ========================================
echo   重要：请先在 GitHub 创建仓库
echo ========================================
echo.
echo 请访问以下链接创建仓库：
echo https://github.com/new
echo.
echo 设置：
echo   - Owner: Growclimate
echo   - Repository name: Growclimate
echo   - 不要勾选 "Add a README file"
echo   - 不要选择 .gitignore
echo.
echo 创建仓库后，运行以下命令：
echo.
echo   git push -u origin main
echo.
echo 或者运行此脚本，它会尝试推送：
echo.
git push -u origin main --force

echo.
echo [6/6] 完成！
echo.
echo 接下来请在 Netlify 后台绑定此 GitHub 仓库
echo 访问：https://app.netlify.com
echo.
pause
