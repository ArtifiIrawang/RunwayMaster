# RunwayMaster Network 静态站点

本目录包含 RunwayMaster 无人机工厂的静态网站，包括首页和关于我们页面。

## 项目结构

```
Runwaymaster Network/
├── Home/
│   ├── index.html          # 首页
│   ├── logo.svg            # Logo 文件
│   └── *.mp4, *.png        # 媒体资源
├── About us/
│   ├── About us.html       # 关于我们页面
│   └── map.png             # 地图图片
├── Nav/
│   └── partials/
│       └── nav.html        # 导航组件（顶部和底部）
└── README.md               # 本文件
```

## 功能特性

### 导航系统
- **统一导航组件**: 所有页面使用 `Nav/partials/nav.html` 作为导航组件
- **动态加载**: 使用 JavaScript 动态加载导航，确保所有页面导航一致
- **响应式设计**: 支持移动端和桌面端，包含移动端抽屉式导航
- **多语言支持**: 支持中英文切换

### 表单提交
- **邮箱收集**: 首页和关于我们页面都使用 FormSubmit 服务
- **表单地址**: `https://formsubmit.co/el/gofilo`
- **邮箱验证**: 首页表单限制只能输入邮箱地址（`type="email"`）

### 页面说明

#### 首页 (Home/index.html)
- 无人机工厂介绍
- 定制化服务展示
- 工厂视频展示
- 案例中心
- 公司信息
- 联系表单（仅邮箱）

#### 关于我们页面 (About us/About us.html)
- 全屏视频展示
- 公司介绍和核心优势
- 全球工厂信息（集成 Google 地图）
- 合作伙伴信息
- 完整联系表单（包含邮箱、电话、角色、无人机类型、详情）

## 开始使用

### 本地开发

```bash
npm install
npm run dev
```

- `npm run dev` 会在本地启动一个静态服务器（默认 http://localhost:4173）并指向 `Home/` 目录。
- 如果需要查看构建后的内容，可执行：

```bash
npm run build
npm run preview
```

`build` 会把 `Home/` 复制到 `dist/`，`preview` 则在 http://localhost:4174 预览 `dist/`。

> 如果当前环境无法访问 npm Registry，可以让有网络的机器运行 `npm install` 后把 `node_modules/` 与 `package-lock.json` 一并提交或重新生成。

### 直接打开

由于使用了相对路径和动态加载，建议使用本地服务器运行。如果直接打开 HTML 文件，可能会遇到跨域问题（fetch 加载导航组件）。

**解决方案**:
1. 使用 VS Code 的 Live Server 扩展
2. 使用 Python 简单服务器: `python -m http.server 8000`
3. 使用 Node.js 的 http-server: `npx http-server`

## 部署

构建脚本只是简单复制静态文件，因此可以把整个项目目录上传到 GitHub Pages、Vercel、Netlify、阿里云 OSS 等任意静态托管服务。

### 部署注意事项

1. **路径结构**: 确保部署后保持相同的目录结构
2. **导航组件**: `Nav/partials/nav.html` 必须可访问
3. **媒体资源**: 确保所有图片和视频文件路径正确
4. **FormSubmit**: 表单提交需要网络连接，确保部署后可以访问 `formsubmit.co`

## Google 地图 API

关于我们页面中集成了 Google 地图。如果需要自定义地图位置：

1. 访问 [Google Maps Embed API](https://developers.google.com/maps/documentation/embed/get-started)
2. 获取您的位置坐标
3. 在 `About us.html` 中更新 iframe 的 `src` 属性

当前使用的是示例坐标，请替换为实际工厂位置。

## 技术栈

- **HTML5**: 语义化标记
- **Tailwind CSS**: 通过 CDN 引入，用于样式设计
- **Vanilla JavaScript**: 用于导航加载、语言切换等功能
- **FormSubmit**: 表单提交服务（无需后端）

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 更新日志

### 最新更新
- ✅ 创建统一的导航组件系统
- ✅ 实现动态导航加载
- ✅ 创建完整的关于我们页面
- ✅ 集成 Google 地图
- ✅ 配置表单提交到 FormSubmit
- ✅ 添加响应式设计支持

## 联系方式

如有问题或建议，请联系：
- Email: linxiaofenghe@gmail.com

---

© 2024 RunwayMaster. 保留所有权利。
