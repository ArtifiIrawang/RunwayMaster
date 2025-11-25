# 部署说明

## 文件结构

```
Downloads/
├── downloads.html          # 下载中心主页面
├── amav15.html            # Amav 15 产品详情页
├── evo-max.html           # EVO Max 产品详情页
├── pdfs/                  # PDF 文件目录
│   ├── amav15-quick-start.pdf
│   ├── evo-max-manual.pdf
│   ├── freestyle-5-specs.pdf
│   ├── lr-fpv-manual.pdf
│   ├── rm-vt-mapping-guide.pdf
│   ├── agri-sprayer-manual.pdf
│   ├── anti-portable-manual.pdf
│   ├── anti-station-manual.pdf
│   ├── anti-radar-manual.pdf
│   ├── link-kit-manual.pdf
│   ├── smart-battery-manual.pdf
│   └── gcs-manual.pdf
└── products/               # 产品二级页面目录（可选）
    ├── amav15.html
    ├── evo-max.html
    └── ... (其他产品页面)
```

## 卡片交互规则

### PDF 按钮
- **位置**: 卡片底部橙色按钮
- **行为**: 点击直接下载对应的 PDF 文件
- **实现**: 使用 `download-pdf-btn` 类和 `data-pdf-url` 属性

### 卡片点击
- **有二级页面** (`data-has-page="true"`): 点击卡片跳转到二级页面
- **无二级页面** (`data-has-page="false"`): 点击卡片弹出提示模态框，提示用户下载 PDF

## 添加新产品页面

1. 在 `Downloads/` 目录下创建新的 HTML 文件（如 `product-name.html`）
2. 参考 `amav15.html` 或 `evo-max.html` 的结构
3. 在 `downloads.html` 中更新对应卡片的 `data-page-url` 属性
4. 将 `data-has-page` 设置为 `"true"`

## 添加 PDF 文件

1. 将 PDF 文件放入 `pdfs/` 目录
2. 确保文件名与 `downloads.html` 中卡片的 `data-pdf-url` 属性匹配
3. 例如：`data-pdf-url="pdfs/amav15-quick-start.pdf"` 对应 `pdfs/amav15-quick-start.pdf`

## 企业级部署建议

### 1. 静态文件服务器
- 使用 Nginx、Apache 或 CDN 服务
- 确保所有相对路径正确

### 2. PDF 文件管理
- 建议使用 CDN 存储 PDF 文件以提高加载速度
- 或使用对象存储服务（如 AWS S3、阿里云 OSS）

### 3. 二级页面内容
- 每个产品页面可以包含详细的产品信息、图片、视频等
- 使用统一的模板确保风格一致

### 4. SEO 优化
- 为每个产品页面添加适当的 meta 标签
- 使用语义化 HTML 结构
- 添加结构化数据（Schema.org）

### 5. 性能优化
- 压缩图片和视频
- 使用懒加载
- 考虑使用静态站点生成器（如 Jekyll、Hugo）

## 注意事项

- 所有相对路径基于 `Downloads/` 目录
- 导航链接会自动根据当前页面位置调整
- 确保 PDF 文件路径与 `data-pdf-url` 属性完全匹配

