# GrowClimate 网站部署指南

## 📁 已创建的文件

### 1. Git 相关
- `.gitignore` - 排除 node_modules 等文件
- `setup-git.bat` - 自动安装 Git 并上传到 GitHub 的脚本

### 2. Netlify CMS 相关
- `static/admin/config.yml` - CMS 配置文件
- `static/admin/index.html` - CMS 管理后台入口

### 3. 部署配置
- `netlify.toml` - Netlify 构建配置
- `_redirects` - SPA 路由重定向

---

## 🚀 部署步骤

### 第一步：在 GitHub 创建仓库

1. 访问 https://github.com/new
2. 设置如下：
   - **Owner**: `Growclimate`
   - **Repository name**: `Growclimate`
   - **Visibility**: Public (或 Private)
   - ⚠️ **不要勾选** "Add a README file"
   - ⚠️ **不要选择** .gitignore 模板
3. 点击 "Create repository"

### 第二步：上传代码到 GitHub

**方法 A：运行脚本（推荐）**
```
1. 打开文件夹：
   D:\汪珍妮-工作资料\独立站用图\Growclimate 源代码\growclimate-site

2. 双击运行：setup-git.bat

3. 脚本会自动：
   - 检测并安装 Git（如需要）
   - 初始化本地 Git 仓库
   - 添加所有文件
   - 尝试推送到 GitHub
```

**方法 B：手动上传**
```bash
# 1. 打开命令提示符
cd D:\汪珍妮-工作资料\独立站用图\Growclimate 源代码\growclimate-site

# 2. 初始化 Git
git init

# 3. 配置用户
git config user.name "GrowClimate"
git config user.email "info@growclimate.com"

# 4. 添加远程仓库
git remote add origin https://github.com/Growclimate/Growclimate.git

# 5. 添加所有文件（排除 node_modules）
git add .

# 6. 提交
git commit -m "Initial commit: GrowClimate B2B website"

# 7. 推送（可能需要输入 GitHub 用户名和 Token）
git push -u origin main --force
```

### 第三步：在 Netlify 绑定 GitHub 仓库

1. 访问 https://app.netlify.com
2. 点击 "Add new site" → "Import an existing project"
3. 选择 "GitHub" 作为 Git provider
4. 授权 Netlify 访问你的 GitHub 仓库
5. 选择 `Growclimate/Growclimate` 仓库
6. 设置构建配置：
   - **Build command**: `npm install --ignore-scripts && node node_modules/esbuild/install.js && npm run build`
   - **Publish directory**: `dist`
7. 点击 "Deploy site"

### 第四步：启用 Netlify Identity（CMS 后台）

1. 在 Netlify 后台，进入你的站点
2. 进入 **Site settings** → **Identity**
3. 点击 **Enable Identity**
4. 在 **Registration** 设置：
   - 选择 **Invite only**（只允许受邀用户注册）
5. 在 **External providers**（可选）：
   - 添加 GitHub 或 Google 登录
6. 回到 **Site settings** → **Identity** → **Services**
7. 启用 **Git Gateway**

### 第五步：邀请管理员

1. 进入 **Site settings** → **Identity** → **Templates**
2. 点击 **Invite someone**
3. 输入你的邮箱地址
4. 你会收到一封邀请邮件
5. 点击邮件中的链接，设置密码
6. 回到 **Site settings** → **Identity** → **Site administration**
7. 找到你的账号，点击 **Make admin**

---

## 🌐 CMS 后台访问

**地址**: `https://你的网站域名.netlify.app/admin`

例如：如果你在 Netlify 创建了 `growclimate-site`，访问：
```
https://growclimate-site.netlify.app/admin
```

**登录方式**：
- 使用 Netlify Identity 注册的邮箱和密码登录
- 如果配置了 GitHub 登录，也可以用 GitHub 账号登录

---

## 📝 Netlify CMS 可编辑内容

### 产品管理
| 分类 | 可编辑内容 |
|------|-----------|
| Dehumidifiers | 型号、参数、图片、特点、应用场景 |
| Humidifiers | 型号、参数、图片、特点、应用场景 |
| Ventilation | 型号、参数、图片、特点、应用场景 |

### 页面内容
| 页面 | 可编辑内容 |
|------|-----------|
| Home | 网站标题、标语、联系方式 |
| Applications | 应用场景描述、图片、推荐产品 |
| About | 公司信息、团队成员 |
| Blog | 发布/编辑/删除博客文章 |

### 其他
- Case Studies（案例研究）
- Certifications（认证证书）
- Site Settings（网站设置）

---

## 🔧 常见问题

### Q: Git push 需要 Token？
A: 是的，GitHub 要求使用 Personal Access Token。
   1. 访问 https://github.com/settings/tokens
   2. 点击 "Generate new token (classic)"
   3. 勾选 `repo` 权限
   4. 复制生成的 Token
   5. 推送时，用户名输入 GitHub 用户名，密码输入 Token

### Q: CMS 图片上传失败？
A: 检查 `config.yml` 中的 `media_folder` 路径。
   确保 GitHub 仓库中有 `public/images/uploads` 目录。

### Q: 构建失败？
A: 检查 `netlify.toml` 中的构建命令是否正确。
   也可以在 Netlify 后台查看构建日志。

---

## 📂 重要文件清单

```
growclimate-site/
├── .gitignore                    ✅ Git 忽略配置
├── setup-git.bat                ✅ Git 上传脚本
├── netlify.toml                  ✅ Netlify 构建配置
├── README.md                     ✅ 项目说明
├── static/
│   └── admin/
│       ├── config.yml            ✅ CMS 配置
│       └── index.html            ✅ CMS 入口
└── dist/
    └── _redirects                ✅ SPA 路由重定向
```

---

## ✨ 完成后的效果

1. 代码推送到 GitHub 后，Netlify 自动构建
2. 访问 CMS 后台 `/admin` 可以：
   - 编辑产品信息
   - 发布博客文章
   - 管理应用场景
   - 上传图片
3. 所有修改会自动触发网站重新构建

---

*有问题？查看 Netlify 文档：https://docs.netlify.com/*
