# Upstream Lens

CNCFアップストリームを起点に、
プラットフォームエンジニアリングのトレンドと構造を読み解く分析サイト。

🌐 https://upstreamlens.io

## About this site

Upstream Lens は、CNCF（Cloud Native Computing Foundation）を中心とした
アップストリームコミュニティの議論・設計思想・構造変化を分析し、
エンタープライズやプラットフォームエンジニアが判断に使える形で整理・共有する
**非公式・個人運営の分析メディア**です。

## Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Hosting**: GitHub Pages
- **Content**: Markdown (Content Collections)
- **Deployment**: GitHub Actions

## Development

### Prerequisites

- Node.js 20.x or later
- npm

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Project Structure

```
upstreamlens.io/
├── src/
│   ├── components/       # Astro components
│   ├── content/          # Content Collections
│   │   └── posts/        # Blog posts (Markdown)
│   ├── layouts/          # Page layouts
│   └── pages/            # Pages and routes
├── public/               # Static assets
└── astro.config.mjs      # Astro configuration
```

### Adding Content

記事は `src/content/posts/` ディレクトリに Markdown ファイルとして追加します。

```markdown
---
title: "記事タイトル"
description: "記事の説明"
pubDate: 2026-01-03
category: "Analysis"
tags: ["CNCF", "Platform Engineering"]
draft: false
---

記事の内容をここに書きます。
```

#### カテゴリ

- `Philosophy` - サイトの思想・視点の明文化
- `Notes` - upstream 観察メモ
- `Analysis` - 意思決定構造の分析
- `Curation` - 外部情報の整理と解釈
- `Meta` - コミュニティ構造や進化の考察

## Deployment

このサイトは GitHub Actions により自動的に GitHub Pages にデプロイされます。

`main` ブランチへのプッシュで自動的にビルド・デプロイが実行されます。

### GitHub Pages 設定

1. リポジトリの Settings → Pages
2. Source: "GitHub Actions" を選択
3. Custom domain（オプション）: `upstreamlens.io`

## Disclaimer

This site is not affiliated with CNCF or any related projects.

## License

Content: All rights reserved
Code: MIT License (see LICENSE file)
