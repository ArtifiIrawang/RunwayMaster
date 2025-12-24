#!/bin/bash

# 部署脚本：删除远程仓库所有文件并推送新代码
# 使用方法: ./deploy-to-github.sh <GITHUB_REPO_URL>

if [ -z "$1" ]; then
    echo "错误: 请提供 GitHub 仓库 URL"
    echo "使用方法: ./deploy-to-github.sh <GITHUB_REPO_URL>"
    echo "示例: ./deploy-to-github.sh https://github.com/username/repo.git"
    exit 1
fi

REPO_URL="$1"

echo "正在配置远程仓库..."
# 检查是否已有 origin 远程
if git remote get-url origin &>/dev/null; then
    echo "更新远程仓库 URL..."
    git remote set-url origin "$REPO_URL"
else
    echo "添加远程仓库..."
    git remote add origin "$REPO_URL"
fi

echo "正在获取远程仓库信息..."
git fetch origin 2>/dev/null || echo "注意: 无法获取远程仓库，可能是新仓库"

echo "正在准备强制推送..."
echo "警告: 这将删除远程仓库的所有文件并替换为当前代码"

# 强制推送到远程仓库，覆盖所有内容
echo "正在推送代码到 GitHub..."
git push -u origin main --force

if [ $? -eq 0 ]; then
    echo "✅ 成功！所有代码已上传到 GitHub"
    echo "仓库地址: $REPO_URL"
else
    echo "❌ 推送失败，请检查："
    echo "1. GitHub 仓库 URL 是否正确"
    echo "2. 您是否有推送权限"
    echo "3. 网络连接是否正常"
    exit 1
fi








