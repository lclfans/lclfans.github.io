# lclfans.github.io

简洁的个人技术主页，按照个人简介原文展示端侧 AI、实时语音与机器人系统相关经验和项目 Demo。

## 目录结构

```text
.
├── index.html                  # GitHub Pages 入口
├── assets/
│   ├── css/styles.css          # 简洁页面样式与响应式布局
│   ├── icons/favicon.svg
│   ├── images/posters/         # 项目视频封面
│   └── videos/                 # 项目 Demo 视频
└── content/self-introduction.txt
```

## 本地预览

在仓库根目录执行：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。

## GitHub Pages

仓库名为 `lclfans/lclfans.github.io`，网站入口位于仓库根目录。推送到默认分支后，页面地址为：

<https://lclfans.github.io/>

如果仓库尚未启用 Pages，请在 GitHub 仓库的 **Settings → Pages** 中选择 **Deploy from a branch**，
分支选择 `main`，目录选择 `/ (root)`。
