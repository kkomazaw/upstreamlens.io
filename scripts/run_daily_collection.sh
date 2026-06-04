#!/bin/bash
#
# CNCF Upstream Daily Collection Workflow
#
# このスクリプトは以下の処理を順次実行します：
# 1. CNCF upstream情報の収集
# 2. Markdown記事の生成
# 3. Gitコミット＆プッシュ
#

set -e  # エラー時は即座に終了

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

echo "======================================"
echo "CNCF Upstream Daily Collection"
echo "======================================"
echo "Start time: $(date)"
echo ""

# Python仮想環境のセットアップ
echo "[1/5] Setting up Python environment..."
cd "$SCRIPT_DIR"

if [ ! -d "venv" ]; then
    python3 -m venv venv
    echo "✓ Created virtual environment"
fi

source venv/bin/activate
pip install -q -r requirements.txt
echo "✓ Python dependencies installed"
echo ""

# データ収集
echo "[2/5] Collecting CNCF upstream data..."
python3 collect_cncf_upstream.py
echo "✓ Data collection completed"
echo ""

# 最新のデータファイルを取得
LATEST_DATA=$(ls -t "$PROJECT_ROOT/data/raw/cncf_upstream_"*.json | head -1)

if [ -z "$LATEST_DATA" ]; then
    echo "Error: No data file found"
    exit 1
fi

echo "Using data file: $LATEST_DATA"
echo ""

# Markdown生成
echo "[3/5] Generating Markdown articles..."
python3 generate_markdown.py "$LATEST_DATA"
echo "✓ Markdown generation completed"
echo ""

# Git操作
cd "$PROJECT_ROOT"

echo "[4/5] Checking for changes..."
if [ -n "$(git status --porcelain)" ]; then
    echo "✓ Changes detected"

    echo "[5/5] Committing and pushing changes..."

    git config --local user.email "github-actions[bot]@users.noreply.github.com"
    git config --local user.name "github-actions[bot]"

    git add src/content/posts/
    git add data/raw/

    COMMIT_DATE=$(date '+%Y-%m-%d')
    git commit -m "chore: CNCF upstream daily update - $COMMIT_DATE

🤖 Generated with Upstream Lens Automation

Co-Authored-By: Upstream Lens Bot <noreply@upstreamlens.io>"

    git push

    echo "✓ Changes committed and pushed"
else
    echo "ℹ No changes to commit"
fi

echo ""
echo "======================================"
echo "Collection completed successfully!"
echo "End time: $(date)"
echo "======================================"
