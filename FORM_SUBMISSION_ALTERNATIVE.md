# 表单提交备选方案

如果 formsubmit.co 仍然无法正常工作，可以使用以下备选方案：

## 方案 1: 使用 mailto: 链接（最简单）

直接使用 `mailto:` 链接，用户点击后会在邮件客户端中打开。

### 优点：
- 无需后端服务
- 100% 可靠
- 用户可以直接发送邮件

### 缺点：
- 需要用户有配置好的邮件客户端
- 移动端体验可能不佳

### 实现方式：
```html
<a href="mailto:linxiaofenghe@gmail.com?subject=RunwayMaster 官网咨询&body=请填写您的信息：%0D%0A姓名：%0D%0A邮箱：%0D%0A电话：%0D%0A留言：">
  发送邮件
</a>
```

## 方案 2: 使用 Formspree（推荐）

Formspree 是 formsubmit.co 的替代品，功能类似但更稳定。

### 步骤：
1. 访问 https://formspree.io/
2. 注册账号并验证邮箱
3. 创建表单，获取 endpoint URL
4. 替换代码中的 formsubmit.co URL

### 优点：
- 更稳定可靠
- 有免费额度
- 支持 AJAX 提交

## 方案 3: 使用 EmailJS

EmailJS 可以直接从浏览器发送邮件，无需后端。

### 步骤：
1. 访问 https://www.emailjs.com/
2. 注册账号
3. 配置邮件服务（Gmail、Outlook 等）
4. 获取 API 密钥
5. 在代码中集成 EmailJS SDK

### 优点：
- 直接从浏览器发送
- 支持多种邮件服务
- 有免费额度

## 方案 4: 使用后端 API（最可靠）

创建一个简单的后端 API 来处理表单提交。

### 可以使用：
- Vercel Serverless Functions
- Netlify Functions
- Node.js + Express
- PHP

### 示例（Vercel Serverless Function）：
```javascript
// api/submit-form.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, message } = req.body;

  // 使用 nodemailer 或其他邮件服务发送邮件
  // ...

  res.status(200).json({ success: true });
}
```

## 当前问题诊断

如果 formsubmit.co 不工作，可能的原因：
1. `el/gofilo` 格式可能不正确（应该是完整邮箱地址）
2. 邮箱验证可能过期
3. formsubmit.co 服务可能暂时不可用

建议先测试 `test-formsubmit.html` 和 `test-formsubmit-direct.html` 文件，看看哪种方式能工作。








