# GrowClimate CMS 自动同步配置指南

## ✅ 已完成的工作

1. **CMS 数据文件已创建**：
   - `src/data/cms/products/dehumidifiers.json` - 除湿机数据
   - `src/data/cms/products/humidifiers.json` - 加湿器数据
   - `src/data/cms/products/ventilation.json` - 通风设备数据
   - `src/data/cms/company/contact.json` - 联系方式
   - `src/data/cms/company/about.json` - 关于页面内容

2. **CMS 配置已更新**：`public/admin/config.yml` 和 `admin/config.yml`

3. **网站代码已修改**：`ProductsView.vue` 现在从 CMS 数据文件读取产品信息

---

## 📋 接下来需要你完成的步骤

### 第一步：创建 GitHub 仓库

1. 访问 https://github.com/new
2. 设置仓库信息：
   - **Owner**: 选择你的 GitHub 账号
   - **Repository name**: `growclimate-website`（或其他你喜欢的名字）
   - **Description**: `GrowClimate B2B Climate Control Equipment Website`
   - **Visibility**: Public 或 Private 都可以
   - ⚠️ **不要勾选** "Add a README file"（重要！）
3. 点击 "Create repository"
4. 复制仓库 URL（类似 `https://github.com/你的用户名/growclimate-website.git`）

### 第二步：上传代码到 GitHub

在项目文件夹中打开命令提示符（或者使用 Git Bash）：

```bash
cd D:\汪珍妮-工作资料\独立站用图\Growclimate 源代码\growclimate-site

# 初始化 Git
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: GrowClimate website with CMS support"

# 添加远程仓库（把下面的 URL 替换为你创建的仓库地址）
git remote add origin https://github.com/你的用户名/growclimate-website.git

# 推送到 GitHub
git push -u origin master
```

> 💡 如果提示需要登录，使用你的 GitHub 用户名和 Personal Access Token 作为密码。

### 第三步：在 Netlify 连接 GitHub

1. 访问 https://app.netlify.com
2. 点击 "Add new site" → "Import an existing project"
3. 选择 "GitHub" 作为 Git provider
4. 授权 Netlify 访问你的 GitHub 账号
5. 选择你刚创建的 `growclimate-website` 仓库
6. 设置构建配置：
   - **Build command**: `npm install && npm run build`
   - **Publish directory**: `dist`
7. 点击 "Deploy site"

### 第四步：启用 Netlify Identity（CMS 后台）

1. 在 Netlify 后台，进入你的站点
2. 进入 **Site settings** → **Identity**
3. 点击 **Enable Identity**
4. 在 **Registration** 设置：
   - 选择 **Invite only**
5. 回到 **Site settings** → **Identity** → **Services**
6. 启用 **Git Gateway**

### 第五步：更新 CMS 配置

网站部署后，修改 `public/admin/config.yml` 中的 `site_url` 为你的实际网站地址：

```yaml
site_url: https://你的网站名.netlify.app
display_url: https://你的网站名.netlify.app
```

然后提交并推送这个修改到 GitHub。

### 第六步：邀请自己作为管理员

1. 进入 **Site settings** → **Identity** → **Templates**
2. 点击 **Invite someone**
3. 输入你的邮箱地址
4. 你会收到一封邀请邮件，点击链接设置密码
5. 回到 **Site settings** → **Identity** → **Site administration**
6. 找到你的账号，点击 **Make admin**

---

## 🌐 如何使用 CMS

完成以上步骤后，访问：
```
https://你的网站名.netlify.app/admin
```

登录后你可以编辑：
- **Products — Dehumidifiers**: 编辑除湿机产品信息
- **Products — Humidifiers**: 编辑加湿器产品信息
- **Products — Fans & Ventilation**: 编辑通风设备信息
- **Company Info**: 编辑联系方式和关于页面

---

## 🔄 CMS 编辑后的同步流程

```
你在 CMS 编辑内容 → 保存 → 自动推送到 GitHub → 触发 Netlify 重新构建 → 网站自动更新
```

所有修改会自动同步到网站！

---

## ⚠️ 重要说明

1. **图片问题**：CMS 可以上传图片，但图片需要先上传到 `public/images/uploads/` 文件夹
2. **Datasheet PDF**：PDF 文件需要放到 `public/datasheets/products/` 目录
3. **立即生效**：CMS 保存后，需要等待 Netlify 重新构建完成（约 2-3 分钟）网站才会更新

---

## 🆘 常见问题

**Q: GitHub 推送需要 Token？**
A: 是的，GitHub 要求使用 Personal Access Token。
   1. 访问 https://github.com/settings/tokens
   2. 点击 "Generate new token (classic)"
   3. 勾选 `repo` 权限
   4. 复制 Token，push 时用作密码

**Q: CMS 编辑后网站没更新？**
A: 检查 Netlify 后台的 Deploys 页面，看是否有新的构建。如果构建失败，查看日志。

**Q: CMS 登录不了？**
A: 确保已启用 Identity 和 Git Gateway，并已邀请自己作为用户。
