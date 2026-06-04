# CNCF Upstream 自動収集システム セットアップガイド

このガイドでは、Upstream LensサイトにCNCF upstream情報を毎日自動収集・投稿するシステムのセットアップ方法を説明します。

## システム概要

### 機能

- **自動データ収集**: CNCF主要プロジェクトのGitHub Issues/PRs/Releasesを毎日自動収集
- **自動分析**: Product/Engineering/Organizationの3軸フレームワークに基づいて重要度を判定
- **自動記事生成**: Upstream Lensの編集方針に準拠したMarkdown記事を自動生成
- **自動公開**: 生成された記事を自動的にGitにコミット＆プッシュし、GitHub Pagesにデプロイ

### 実行スケジュール

- **頻度**: 毎日UTC 0:00（日本時間 9:00）に自動実行
- **手動実行**: GitHub Actionsから随時実行可能

### アーキテクチャ

```
GitHub Actions (スケジューラー)
    ↓
データ収集 (collect_cncf_upstream.py)
    ↓
重要度分析 (3軸フレームワーク)
    ↓
Markdown生成 (generate_markdown.py)
    ↓
Git commit & push
    ↓
Astro Build
    ↓
GitHub Pages Deploy
```

## セットアップ手順

### 1. リポジトリ権限設定

GitHub Actionsがリポジトリにコミット＆プッシュできるように権限を設定します。

1. GitHubリポジトリページを開く
2. **Settings** → **Actions** → **General** に移動
3. **Workflow permissions** セクションで以下を選択：
   - ✅ **Read and write permissions**
   - ✅ **Allow GitHub Actions to create and approve pull requests**（オプション）
4. **Save** をクリック

### 2. GitHub Pages設定

GitHub Pagesのデプロイソースを設定します。

1. GitHubリポジトリページを開く
2. **Settings** → **Pages** に移動
3. **Source** で **GitHub Actions** を選択
4. **Save** をクリック

### 3. ワークフロー有効化

`.github/workflows/daily-cncf-collection.yml` がリポジトリにコミットされていることを確認します。

```bash
git add .github/workflows/daily-cncf-collection.yml
git add scripts/
git commit -m "feat: Add CNCF upstream automation"
git push
```

### 4. 初回手動実行（推奨）

自動実行を待つ前に、手動で一度実行してテストします。

1. GitHubリポジトリページを開く
2. **Actions** タブをクリック
3. 左サイドバーから **CNCF Upstream Daily Collection** を選択
4. 右上の **Run workflow** をクリック
5. **Run workflow** ボタンをクリックして実行開始

### 5. 実行結果の確認

1. Actionsタブで実行状況を確認
2. 完了後、リポジトリに新しいコミットが追加されているか確認
3. `src/content/posts/<年>/` に新しいMarkdownファイルが生成されているか確認
4. サイト (`https://upstreamlens.io`) を開いて記事が公開されているか確認

## トラブルシューティング

### ワークフローが失敗する

#### 1. 権限エラー

**エラーメッセージ**:
```
remote: Permission to <user>/<repo>.git denied to github-actions[bot].
```

**解決方法**:
- リポジトリ設定で "Read and write permissions" が有効になっているか確認
- ワークフローファイルの `permissions:` セクションが正しいか確認

#### 2. Pythonパッケージインストールエラー

**エラーメッセージ**:
```
ERROR: Could not find a version that satisfies the requirement requests
```

**解決方法**:
- `scripts/requirements.txt` が正しくコミットされているか確認
- GitHub Actionsログで詳細なエラーメッセージを確認

#### 3. Astroビルドエラー

**エラーメッセージ**:
```
Error: Cannot find module 'astro'
```

**解決方法**:
- `package.json` と `package-lock.json` が正しくコミットされているか確認
- ワークフローの `npm ci` ステップが成功しているか確認

### GitHub API レート制限

**症状**:
- データ収集が途中で失敗する
- 「API rate limit exceeded」エラーが表示される

**解決方法**:

GitHub Actionsでは、`GITHUB_TOKEN` が自動的に提供されるため、通常は問題ありません。
ただし、大量のリポジトリを監視する場合は、Personal Access Token (PAT) の使用を検討してください。

1. GitHubで Personal Access Token を作成
   - Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Generate new token
   - スコープ: `repo` (読み取りのみの場合は `public_repo`)
2. リポジトリのSecretsに追加
   - Settings → Secrets and variables → Actions → New repository secret
   - Name: `GH_PAT`
   - Value: 生成したトークン
3. ワークフローファイルを編集

```yaml
      - name: Run CNCF upstream collection
        env:
          GITHUB_TOKEN: ${{ secrets.GH_PAT }}  # ← 変更
        run: |
          chmod +x scripts/run_daily_collection.sh
          cd scripts
          bash run_daily_collection.sh
```

## カスタマイズ

### 監視対象リポジトリの変更

`scripts/collect_cncf_upstream.py` の `target_repos` リストを編集：

```python
self.target_repos = [
    'kubernetes/kubernetes',
    'prometheus/prometheus',
    # 追加したいリポジトリ
    'your-org/your-repo',
]
```

### 実行スケジュールの変更

`.github/workflows/daily-cncf-collection.yml` の `cron` 設定を編集：

```yaml
on:
  schedule:
    - cron: '0 0 * * *'  # UTC 0:00 (日本時間 9:00)
    # 例: 毎日日本時間18:00に実行したい場合
    # - cron: '0 9 * * *'  # UTC 9:00 (日本時間 18:00)
```

Cron構文リファレンス:
- `*` = すべて
- `0 0 * * *` = 毎日0時0分
- `0 9 * * 1` = 毎週月曜日9時0分
- `0 */6 * * *` = 6時間ごと

### 重要度判定ロジックのカスタマイズ

`scripts/collect_cncf_upstream.py` の `analyze_significance()` メソッドを編集：

```python
def analyze_significance(self, item: Dict[str, Any], item_type: str) -> Dict[str, Any]:
    # カスタムキーワード
    product_keywords = ['user', 'experience', 'api', 'feature']
    engineering_keywords = ['performance', 'scalability', 'architecture']
    org_keywords = ['sig', 'wg', 'governance', 'kep']

    # カスタム重要度判定
    is_significant = (
        comments >= 10 or  # コメント閾値を変更
        reactions >= 20 or  # リアクション閾値を変更
        # その他のカスタム条件
    )
```

### Markdownテンプレートのカスタマイズ

`scripts/generate_markdown.py` の各種メソッドを編集：

```python
def _generate_interpretation_section(self, item, item_type, analysis):
    # カスタム解釈テンプレート
    interpretation = "### カスタムセクション\n\n"
    # ...
    return interpretation
```

## 運用

### 日次の確認

毎日以下を確認することを推奨します：

1. GitHub Actionsの実行結果（成功/失敗）
2. 生成された記事の品質
3. 誤検知や重要な情報の見逃しがないか

### メンテナンス

定期的に以下のメンテナンスを実施してください：

1. **監視対象リポジトリの見直し**（月次）
   - 新しいCNCFプロジェクトの追加
   - 非アクティブなリポジトリの削除

2. **重要度判定ロジックの改善**（月次）
   - 誤検知の分析と閾値調整
   - 新しいキーワードの追加

3. **Pythonパッケージのアップデート**（四半期）
   ```bash
   cd scripts
   pip list --outdated
   pip install --upgrade requests
   pip freeze > requirements.txt
   ```

4. **GitHub Actions ワークフローの更新**（四半期）
   - アクションのバージョン更新
   - セキュリティ脆弱性のチェック

## よくある質問

### Q: データ収集が0件の日もある？

A: はい、監視対象リポジトリに重要な更新がない日は、記事が生成されません。これは正常な動作です。

### Q: 英語版記事も自動生成できる？

A: 現在は日本語のみですが、`generate_markdown.py` の `MarkdownGenerator` クラスに英語テンプレートを追加することで可能です。

### Q: NotebookLMとの統合は？

A: 現在の実装では使用していません。収集したデータをNotebookLMにアップロードして高度な分析を行う場合は、別途カスタマイズが必要です。

### Q: 収集したデータはどこに保存される？

A: `data/raw/cncf_upstream_<日付>.json` に保存されますが、`.gitignore` により Git には含まれません（ファイルサイズが大きくなるため）。

## サポート

問題が発生した場合は、以下を確認してください：

1. GitHub Actions のログ
2. `scripts/README.md` のトラブルシューティングセクション
3. GitHubリポジトリのIssues

---

**Upstream Lens - Seeing decisions before code is written**
