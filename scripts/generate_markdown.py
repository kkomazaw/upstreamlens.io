#!/usr/bin/env python3
"""
Markdown Generator for Upstream Lens

収集したCNCF upstream情報をUpstream Lensの編集方針に基づいて
Astro Content Collections互換のMarkdownファイルに変換します。

編集方針：
- 事実（Facts）と解釈（Interpretation）を明確に分離
- Product / Engineering / Organization の3軸視点
- 中立を装わず、視点を先に固定する
"""

import json
import sys
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Any


class MarkdownGenerator:
    """Astro Content Collections互換のMarkdown生成クラス"""

    def __init__(self, lang: str = 'ja'):
        self.lang = lang

    def generate_frontmatter(self, item: Dict[str, Any], item_type: str) -> str:
        """Astro Content CollectionsのFrontmatterを生成"""
        analysis = item.get('_analysis', {})
        repo = item.get('_repo', 'unknown')

        # タイトル生成
        title = self._generate_title(item, item_type, repo)

        # 説明生成
        description = self._generate_description(item, item_type, analysis)

        # タグ生成
        tags = self._generate_tags(item, repo, analysis)

        # 日付
        pub_date = datetime.now().strftime('%Y-%m-%d')

        # カテゴリ
        category = analysis.get('category', 'Notes')

        frontmatter = f"""---
title: "{title}"
description: "{description}"
pubDate: {pub_date}
category: {category}
tags: {json.dumps(tags, ensure_ascii=False)}
draft: false
---
"""
        return frontmatter

    def _generate_title(self, item: Dict[str, Any], item_type: str, repo: str) -> str:
        """記事タイトルを生成"""
        if item_type == 'release':
            project = repo.split('/')[1]
            version = item.get('tag_name', 'Unknown')
            return f"{project} {version} リリース - upstream の意思決定を読む"
        elif item_type == 'issue':
            return f"[{repo}] {item.get('title', 'No title')}"
        elif item_type == 'pr':
            return f"[{repo}] PR: {item.get('title', 'No title')}"
        else:
            return f"CNCF Upstream Update - {repo}"

    def _generate_description(self, item: Dict[str, Any], item_type: str, analysis: Dict[str, Any]) -> str:
        """記事の説明を生成"""
        axes = analysis.get('axes', ['Engineering'])
        axes_str = ' / '.join(axes)

        if item_type == 'release':
            return f"新リリースの背景にある技術選択と意思決定を、{axes_str} の視点から分析する。"
        else:
            return f"{axes_str} の観点から、upstream における議論と意思決定構造を読み解く。"

    def _generate_tags(self, item: Dict[str, Any], repo: str, analysis: Dict[str, Any]) -> List[str]:
        """タグを生成"""
        tags = []

        # プロジェクト名
        project = repo.split('/')[1]
        tags.append(project)

        # 軸
        tags.extend(analysis.get('axes', []))

        # CNCF
        tags.append('CNCF')

        # upstream
        tags.append('upstream')

        return list(set(tags))  # 重複除去

    def generate_content(self, item: Dict[str, Any], item_type: str) -> str:
        """記事本文を生成"""
        analysis = item.get('_analysis', {})
        repo = item.get('_repo', 'unknown')

        # Facts セクション
        facts_section = self._generate_facts_section(item, item_type, repo)

        # Interpretation セクション
        interpretation_section = self._generate_interpretation_section(item, item_type, analysis)

        # Context セクション
        context_section = self._generate_context_section(item, repo, analysis)

        content = f"""
## Facts（事実）

{facts_section}

## Interpretation（解釈）

{interpretation_section}

## Context（文脈）

{context_section}

---

**出典**: [{repo}]({item.get('html_url', '#')})

*この記事は upstream の意思決定構造を理解するための視点提供を目的としており、技術選択の推奨や導入判断を目的とするものではありません。*
"""
        return content

    def _generate_facts_section(self, item: Dict[str, Any], item_type: str, repo: str) -> str:
        """事実セクションを生成（一次情報のみ）"""
        if item_type == 'release':
            return f"""
### リリース情報

- **プロジェクト**: {repo}
- **バージョン**: {item.get('tag_name', 'N/A')}
- **公開日**: {item.get('published_at', 'N/A')}
- **リリースノート**: [GitHub]({item.get('html_url', '#')})

### 変更内容

{self._truncate_text(item.get('body', 'リリースノートなし'), 500)}

[全文を読む]({item.get('html_url', '#')})
"""
        elif item_type == 'issue':
            return f"""
### Issue情報

- **タイトル**: {item.get('title', 'N/A')}
- **状態**: {item.get('state', 'N/A')}
- **作成日**: {item.get('created_at', 'N/A')}
- **コメント数**: {item.get('comments', 0)}
- **URL**: [GitHub]({item.get('html_url', '#')})

### 概要

{self._truncate_text(item.get('body', '説明なし'), 500)}

[全文を読む]({item.get('html_url', '#')})
"""
        elif item_type == 'pr':
            return f"""
### Pull Request情報

- **タイトル**: {item.get('title', 'N/A')}
- **状態**: {item.get('state', 'N/A')}
- **作成日**: {item.get('created_at', 'N/A')}
- **マージ状態**: {'Merged' if item.get('merged_at') else 'Not merged'}
- **コメント数**: {item.get('comments', 0)}
- **URL**: [GitHub]({item.get('html_url', '#')})

### 変更の説明

{self._truncate_text(item.get('body', '説明なし'), 500)}

[全文を読む]({item.get('html_url', '#')})
"""
        else:
            return "情報が取得できませんでした。"

    def _generate_interpretation_section(self, item: Dict[str, Any], item_type: str, analysis: Dict[str, Any]) -> str:
        """解釈セクションを生成（筆者の視点による意味付け）"""
        axes = analysis.get('axes', [])

        interpretation = "### 3軸からの読み解き\n\n"

        if 'Product' in axes:
            interpretation += """
**Product 視点**:

この動きは、ユーザー体験や機能提供の観点から、どのような価値仮説を持っているのか。
誰のための変更で、どのような課題を解決しようとしているのか。

"""

        if 'Engineering' in axes:
            interpretation += """
**Engineering 視点**:

技術的な選択肢の中で、なぜこのアプローチが選ばれたのか。
パフォーマンス、スケーラビリティ、保守性など、どのトレードオフが発生しているのか。

"""

        if 'Organization' in axes:
            interpretation += """
**Organization / Architecture 視点**:

SIG/WG の構造、ガバナンスモデル、コミュニティの意思決定プロセスが、
この変更にどのように影響しているのか。組織的な制約や持続性の観点から何が読み取れるか。

"""

        interpretation += """
*これらは筆者の視点による解釈であり、upstream の公式見解ではありません。*
"""

        return interpretation

    def _generate_context_section(self, item: Dict[str, Any], repo: str, analysis: Dict[str, Any]) -> str:
        """文脈セクションを生成"""
        project = repo.split('/')[1]

        context = f"""
### プロジェクトの位置づけ

{project} は CNCF エコシステムにおいて重要な役割を担っているプロジェクトです。

### 関連リソース

- [GitHub Repository]({f'https://github.com/{repo}'})
- [CNCF Project Page](https://www.cncf.io/projects/)

### upstream 観察の視点

本サイト Upstream Lens は、技術トレンドを「結果」ではなく「意思決定プロセス」として理解することを目指しています。

この情報が、あなたの技術選択や組織設計において、新たな思考の視点を提供できることを願っています。
"""

        return context

    def _truncate_text(self, text: str, max_length: int = 500) -> str:
        """テキストを指定文字数で切り詰める"""
        if not text:
            return "（内容なし）"

        text = text.strip()
        if len(text) <= max_length:
            return text

        return text[:max_length] + "...\n\n（以下省略）"

    def generate_markdown_file(self, item: Dict[str, Any], item_type: str, output_dir: Path) -> Path:
        """Markdownファイルを生成して保存"""
        frontmatter = self.generate_frontmatter(item, item_type)
        content = self.generate_content(item, item_type)

        full_content = frontmatter + content

        # ファイル名生成
        date_str = datetime.now().strftime('%Y-%m-%d')
        repo = item.get('_repo', 'unknown').replace('/', '-')
        item_id = item.get('number', item.get('id', 'unknown'))
        filename = f"{date_str}-{repo}-{item_type}-{item_id}.md"

        # 保存
        output_file = output_dir / filename
        output_file.parent.mkdir(parents=True, exist_ok=True)

        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(full_content)

        print(f"Generated: {output_file}")
        return output_file


def main():
    """メイン実行関数"""
    if len(sys.argv) < 2:
        print("Usage: python generate_markdown.py <raw_data_json_file>")
        sys.exit(1)

    input_file = Path(sys.argv[1])
    if not input_file.exists():
        print(f"Error: File not found: {input_file}")
        sys.exit(1)

    # データ読み込み
    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)

    # 出力ディレクトリ（プロジェクトルートからの絶対パス）
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    year = datetime.now().year
    output_dir = project_root / 'src' / 'content' / 'posts' / str(year)

    # Markdown生成
    generator = MarkdownGenerator(lang='ja')

    generated_files = []

    # Issues
    for issue in data.get('issues', []):
        try:
            filepath = generator.generate_markdown_file(issue, 'issue', output_dir)
            generated_files.append(filepath)
        except Exception as e:
            print(f"Error generating markdown for issue: {e}")

    # PRs
    for pr in data.get('prs', []):
        try:
            filepath = generator.generate_markdown_file(pr, 'pr', output_dir)
            generated_files.append(filepath)
        except Exception as e:
            print(f"Error generating markdown for PR: {e}")

    # Releases
    for release in data.get('releases', []):
        try:
            filepath = generator.generate_markdown_file(release, 'release', output_dir)
            generated_files.append(filepath)
        except Exception as e:
            print(f"Error generating markdown for release: {e}")

    print(f"\n✓ Generated {len(generated_files)} markdown files in {output_dir}")


if __name__ == '__main__':
    main()
