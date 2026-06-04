# CNCF Upstream Collector

自動的にCNCFのアップストリーム情報を収集し、Upstream Lensサイトに投稿するデーモンシステム。

## 概要

このツールは、以下のソースから毎日CNCFのアップストリーム活動を収集します：

- **GitHub Activity**: CNCF組織の重要なIssue、PR、Releaseを収集
- **CNCF Blog**: 公式ブログの最新投稿を収集
- **SIG/WG Meeting Notes**: KubernetesやCNCFのSIG/WGミーティング議事録を収集

## インストール

```bash
cd scripts/collector
npm install
```

## 設定

### 環境変数

```bash
# GitHub Personal Access Token (推奨)
export GITHUB_TOKEN=your_github_token_here
```

トークンを設定しない場合、GitHubのAPI rate limitが制限されます。

### 設定ファイル

`config.json`で収集の詳細を設定できます：

```json
{
  "sources": {
    "github": {
      "enabled": true,
      "organizations": ["kubernetes", "prometheus", ...],
      "eventTypes": ["release", "issue", "pull_request"],
      "lookbackDays": 1
    },
    ...
  },
  "output": {
    "directory": "../../src/content/posts",
    "category": "Notes",
    "autoTag": true
  },
  "filters": {
    "minStars": 100,
    "excludeLabels": ["duplicate", "invalid"],
    "importantKeywords": [...]
  }
}
```

## 使用方法

### ローカルでのテスト実行

```bash
# Dry run (実際には保存しない)
npm run test

# 実際に収集して保存
npm run collect
```

### 自動実行

GitHub Actionsにより、毎日午前9時(JST)に自動的に実行されます。

ワークフロー: `.github/workflows/collect-upstream.yml`

手動で実行する場合：
1. GitHubリポジトリの「Actions」タブに移動
2. 「Collect CNCF Upstream Data」を選択
3. 「Run workflow」をクリック

## 出力形式

収集されたデータは、以下の形式でMarkdownファイルとして保存されます：

```markdown
---
title: "Upstream GitHub - 2025-06-04"
description: "CNCF upstream activity from github"
pubDate: 2025-06-04
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", ...]
draft: false
---

## Overview

...

## 🔥 High Priority Updates

### kubernetes/kubernetes: v1.30.0

...
```

## アーキテクチャ

```
collector/
├── index.js              # メインコレクタースクリプト
├── sources/
│   ├── github.js        # GitHubコレクター
│   ├── cncf-blog.js     # CNCF Blogコレクター
│   └── sig-wg.js        # SIG/WGコレクター
├── config.json          # 設定ファイル
└── package.json
```

## データフロー

1. **収集**: 各ソースから最新のデータを収集
2. **フィルタリング**: 重要度や関連性でフィルタリング
3. **変換**: Markdown形式に変換
4. **保存**: `src/content/posts/YYYY/` に保存
5. **コミット**: Gitにコミット＆プッシュ
6. **デプロイ**: 自動的にGitHub Pagesに反映

## トラブルシューティング

### API Rate Limit エラー

`GITHUB_TOKEN`環境変数を設定してください。

### 収集されたデータが空

- `config.json`の`lookbackDays`を増やしてみてください
- フィルター設定が厳しすぎないか確認してください

### ワークフローが失敗する

- GitHub Actionsのログを確認
- GitHub Pagesが有効になっているか確認
- リポジトリの権限設定を確認

## カスタマイズ

### 新しいデータソースの追加

1. `sources/`に新しいコレクタークラスを作成
2. `index.js`でインポートして登録
3. `config.json`に設定を追加

例：

```javascript
// sources/custom-source.js
export class CustomSourceCollector {
  constructor(config) {
    this.config = config;
    this.name = 'Custom Source';
  }

  async collect() {
    // 実装
    return items;
  }
}
```

### フィルタリングロジックのカスタマイズ

`index.js`の`filterItems()`メソッドを編集してください。

## ライセンス

このプロジェクトのライセンスに従います。
