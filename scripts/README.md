# CNCF Upstream Automation Scripts

このディレクトリには、Upstream LensサイトにCNCFのupstream情報を自動収集・投稿するためのスクリプト群が含まれています。

## 概要

CNCF Upstream Automation は、以下の処理を自動的に実行します：

1. **データ収集** (`collect_cncf_upstream.py`)
   - CNCF主要プロジェクトのGitHubリポジトリから情報を収集
   - Issues、Pull Requests、Releasesを対象
   - 重要度を自動判定し、有意な情報のみを抽出

2. **Markdown生成** (`generate_markdown.py`)
   - 収集したデータをUpstream Lensの編集方針に基づいて構造化
   - Astro Content Collections互換のMarkdownファイルを生成
   - 事実（Facts）と解釈（Interpretation）を明確に分離

3. **自動公開** (`run_daily_collection.sh`)
   - データ収集 → Markdown生成 → Git commit & push の一連の処理を実行
   - GitHub Actionsで毎日自動実行

## Upstream Lensの編集方針

生成される記事は、以下の方針に基づいて構成されます：

### 3軸フレームワーク

すべての記事は、以下の3つの視点から分析されます：

- **Product**: 価値仮説、ユーザー、提供したい体験
- **Engineering**: 技術選択、設計判断、実装可能性
- **Organization / Architecture**: 組織構造、運用、ガバナンス、持続性

### 事実と解釈の分離

各記事は以下のセクションで構成されます：

- **Facts（事実）**: 一次情報（GitHub Issue/PR、リリースノート等）
- **Interpretation（解釈）**: 筆者の視点による構造化・意味付け
- **Context（文脈）**: プロジェクトの位置づけと関連情報

### カテゴリ分類

記事は以下のカテゴリに自動分類されます：

- **Philosophy**: 思想・視点の明文化
- **Notes**: upstream 観察メモ
- **Analysis**: 意思決定構造の分析
- **Curation**: 外部情報の整理と解釈
- **Meta**: コミュニティ構造や進化の考察

## ファイル構成

```
scripts/
├── README.md                      # このファイル
├── requirements.txt               # Python依存関係
├── collect_cncf_upstream.py       # データ収集スクリプト
├── generate_markdown.py           # Markdown生成スクリプト
└── run_daily_collection.sh        # メインワークフロースクリプト
```

## 使い方

### ローカルでの手動実行

```bash
# scriptsディレクトリに移動
cd scripts

# 依存関係のインストール
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# データ収集
python3 collect_cncf_upstream.py

# Markdown生成（最新のデータファイルを指定）
python3 generate_markdown.py ../data/raw/cncf_upstream_2025-01-04.json

# または、一連の処理を自動実行
bash run_daily_collection.sh
```

### GitHub Actionsでの自動実行

GitHub Actionsワークフロー (`.github/workflows/daily-cncf-collection.yml`) が設定されています。

**実行タイミング**:
- 毎日UTC 0:00（日本時間 9:00）に自動実行
- 手動実行も可能（ActionsタブからWorkflowを選択 → "Run workflow"）

**処理フロー**:
1. リポジトリをチェックアウト
2. Python/Node.js環境をセットアップ
3. CNCF upstream情報を収集
4. Markdownファイルを生成
5. 変更をコミット＆プッシュ
6. Astroサイトをビルド
7. GitHub Pagesにデプロイ

## 環境変数

### GITHUB_TOKEN

GitHub APIのレート制限を緩和するために使用します。

- GitHub Actionsでは自動的に `secrets.GITHUB_TOKEN` が使用されます
- ローカル実行時は、環境変数として設定してください：

```bash
export GITHUB_TOKEN="your_github_token_here"
python3 collect_cncf_upstream.py
```

## 対象リポジトリ

現在、以下のCNCFプロジェクトを監視しています：

- kubernetes/kubernetes
- prometheus/prometheus
- envoyproxy/envoy
- containerd/containerd
- etcd-io/etcd
- coredns/coredns
- cncf/toc (Technical Oversight Committee)
- kubernetes/community (SIG/WG discussions)
- kubernetes/enhancements (KEPs)
- cncf/sig-security
- open-telemetry/opentelemetry-specification
- grpc/grpc
- cilium/cilium
- argoproj/argo-cd
- fluxcd/flux2

リポジトリリストは `collect_cncf_upstream.py` の `target_repos` で管理されています。

## カスタマイズ

### 監視対象リポジトリの追加

`collect_cncf_upstream.py` の `target_repos` リストを編集：

```python
self.target_repos = [
    'kubernetes/kubernetes',
    'your-org/your-repo',  # 追加
]
```

### 重要度判定ロジックのカスタマイズ

`collect_cncf_upstream.py` の `analyze_significance()` メソッドを編集：

```python
def analyze_significance(self, item: Dict[str, Any], item_type: str) -> Dict[str, Any]:
    # カスタムロジックを実装
    pass
```

### Markdown テンプレートのカスタマイズ

`generate_markdown.py` の各種 `_generate_*()` メソッドを編集：

- `_generate_facts_section()`: 事実セクション
- `_generate_interpretation_section()`: 解釈セクション
- `_generate_context_section()`: 文脈セクション

## トラブルシューティング

### GitHub API レート制限エラー

```
Error fetching issues from kubernetes/kubernetes: 403 Client Error: Forbidden
```

**解決策**: `GITHUB_TOKEN` 環境変数を設定してください。

### Markdown生成エラー

```
Error generating markdown for issue: ...
```

**解決策**:
- データファイルの形式を確認
- ログを確認してエラー原因を特定
- 必要に応じて `generate_markdown.py` のエラーハンドリングを改善

### Git push エラー（GitHub Actions）

```
Permission denied (publickey)
```

**解決策**:
- リポジトリの Settings → Actions → General で、
  "Workflow permissions" を "Read and write permissions" に設定

## ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。

## 貢献

Upstream Lens は個人プロジェクトですが、改善提案やバグ報告は歓迎します。

---

*Upstream Lens - Seeing decisions before code is written*
