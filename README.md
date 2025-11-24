# RunwayMaster 静态站点

本目录包含 `Home/index.html` 及相关素材，可直接在浏览器打开，也可以通过简单的静态服务器本地预览或部署到任意静态托管平台。

## 开始使用

```bash
npm install
npm run dev
```

- `npm run dev` 会在本地启动一个静态服务器（默认 http://localhost:4173 ）并指向 `Home/` 目录。
- 如果需要查看构建后的内容，可执行：

```bash
npm run build
npm run preview
```

`build` 会把 `Home/` 复制到 `dist/`，`preview` 则在 http://localhost:4174 预览 `dist/`。

> 如果当前环境无法访问 npm Registry，可以让有网络的机器运行 `npm install` 后把 `node_modules/` 与 `package-lock.json` 一并提交或重新生成。

## 部署

构建脚本只是简单复制静态文件，因此可以把 `Home/` 或 `dist/` 目录上传到 GitHub Pages、Vercel、Netlify、阿里云 OSS 等任意静态托管服务，或直接发送给他人即可访问。

