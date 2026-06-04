#!/usr/bin/env python3
"""
CNCF Upstream Information Collector

このスクリプトは、CNCFエコシステムのupstream情報を収集し、
Upstream Lensの3軸フレームワーク（Product/Engineering/Organization）に
基づいて分析を行います。
"""

import os
import json
import requests
from datetime import datetime, timedelta
from typing import List, Dict, Any
from pathlib import Path


class CNCFUpstreamCollector:
    """CNCF upstream情報を収集するクラス"""

    def __init__(self, github_token: str = None):
        self.github_token = github_token or os.environ.get('GITHUB_TOKEN')
        self.headers = {
            'Accept': 'application/vnd.github.v3+json',
        }
        if self.github_token:
            self.headers['Authorization'] = f'token {self.github_token}'

        # CNCF主要プロジェクト（例：Graduated + Incubating）
        self.target_repos = [
            'kubernetes/kubernetes',
            'prometheus/prometheus',
            'envoyproxy/envoy',
            'containerd/containerd',
            'etcd-io/etcd',
            'coredns/coredns',
            'cncf/toc',  # Technical Oversight Committee
            'kubernetes/community',  # SIG/WG discussions
            'kubernetes/enhancements',  # KEPs
            'cncf/sig-security',
            'open-telemetry/opentelemetry-specification',
            'grpc/grpc',
            'cilium/cilium',
            'argoproj/argo-cd',
            'fluxcd/flux2',
        ]

    def fetch_recent_issues(self, repo: str, days: int = 1) -> List[Dict[str, Any]]:
        """指定したリポジトリの最近のIssuesを取得"""
        since = (datetime.now() - timedelta(days=days)).isoformat()
        url = f'https://api.github.com/repos/{repo}/issues'
        params = {
            'state': 'all',
            'since': since,
            'per_page': 30,
            'sort': 'updated',
        }

        try:
            response = requests.get(url, headers=self.headers, params=params, timeout=10)
            response.raise_for_status()
            return response.json()
        except requests.RequestException as e:
            print(f"Error fetching issues from {repo}: {e}")
            return []

    def fetch_recent_prs(self, repo: str, days: int = 1) -> List[Dict[str, Any]]:
        """指定したリポジトリの最近のPull Requestsを取得"""
        since = (datetime.now() - timedelta(days=days)).isoformat()
        url = f'https://api.github.com/repos/{repo}/pulls'
        params = {
            'state': 'all',
            'sort': 'updated',
            'direction': 'desc',
            'per_page': 30,
        }

        try:
            response = requests.get(url, headers=self.headers, params=params, timeout=10)
            response.raise_for_status()
            prs = response.json()

            # 指定期間内に更新されたPRのみフィルタ
            cutoff = datetime.now() - timedelta(days=days)
            filtered_prs = [
                pr for pr in prs
                if datetime.fromisoformat(pr['updated_at'].replace('Z', '+00:00')).replace(tzinfo=None) > cutoff
            ]
            return filtered_prs
        except requests.RequestException as e:
            print(f"Error fetching PRs from {repo}: {e}")
            return []

    def fetch_recent_releases(self, repo: str, days: int = 7) -> List[Dict[str, Any]]:
        """指定したリポジトリの最近のReleasesを取得"""
        url = f'https://api.github.com/repos/{repo}/releases'
        params = {'per_page': 10}

        try:
            response = requests.get(url, headers=self.headers, params=params, timeout=10)
            response.raise_for_status()
            releases = response.json()

            # 指定期間内のリリースのみフィルタ
            cutoff = datetime.now() - timedelta(days=days)
            filtered_releases = [
                rel for rel in releases
                if datetime.fromisoformat(rel['published_at'].replace('Z', '+00:00')).replace(tzinfo=None) > cutoff
            ]
            return filtered_releases
        except requests.RequestException as e:
            print(f"Error fetching releases from {repo}: {e}")
            return []

    def analyze_significance(self, item: Dict[str, Any], item_type: str) -> Dict[str, Any]:
        """
        アイテムの重要度を分析し、3軸フレームワークに分類する

        Returns:
            {
                'is_significant': bool,
                'axes': ['Product', 'Engineering', 'Organization'],
                'category': 'Analysis' | 'Notes' | 'Curation' | 'Meta',
                'reasoning': str
            }
        """
        # 簡易的な重要度判定（将来的にはLLM APIを使った高度な分析も可能）
        title = item.get('title', '').lower()
        body = item.get('body', '').lower() if item.get('body') else ''

        # キーワードベースの分析
        product_keywords = ['user', 'experience', 'api', 'feature', 'usability', 'adoption']
        engineering_keywords = ['performance', 'scalability', 'architecture', 'implementation', 'technical']
        org_keywords = ['sig', 'wg', 'governance', 'community', 'process', 'policy', 'kep', 'proposal']

        axes = []
        if any(kw in title or kw in body for kw in product_keywords):
            axes.append('Product')
        if any(kw in title or kw in body for kw in engineering_keywords):
            axes.append('Engineering')
        if any(kw in title or kw in body for kw in org_keywords):
            axes.append('Organization')

        # デフォルト軸
        if not axes:
            axes = ['Engineering']

        # カテゴリ判定
        if item_type == 'release':
            category = 'Curation'
        elif 'kep' in title or 'proposal' in title or 'sig' in title:
            category = 'Analysis'
        elif 'governance' in title or 'community' in title:
            category = 'Meta'
        else:
            category = 'Notes'

        # 重要度判定（コメント数、リアクション数などで判定）
        comments = item.get('comments', 0)
        reactions = item.get('reactions', {}).get('total_count', 0) if 'reactions' in item else 0

        is_significant = (
            comments >= 5 or
            reactions >= 10 or
            item_type == 'release' or
            any(kw in title for kw in ['kep', 'sig', 'proposal', 'breaking', 'security'])
        )

        return {
            'is_significant': is_significant,
            'axes': axes,
            'category': category,
            'reasoning': f"Detected axes: {', '.join(axes)}. Comment count: {comments}, Reactions: {reactions}"
        }

    def collect_daily_updates(self, days: int = 1) -> Dict[str, List[Dict[str, Any]]]:
        """すべての対象リポジトリから日次更新を収集"""
        collected_data = {
            'issues': [],
            'prs': [],
            'releases': [],
            'collection_date': datetime.now().isoformat(),
        }

        print(f"Collecting CNCF upstream data from {len(self.target_repos)} repositories...")

        for repo in self.target_repos:
            print(f"Processing {repo}...")

            # Issues収集
            issues = self.fetch_recent_issues(repo, days)
            for issue in issues:
                if 'pull_request' not in issue:  # PRは別途処理
                    analysis = self.analyze_significance(issue, 'issue')
                    if analysis['is_significant']:
                        issue['_analysis'] = analysis
                        issue['_repo'] = repo
                        collected_data['issues'].append(issue)

            # PRs収集
            prs = self.fetch_recent_prs(repo, days)
            for pr in prs:
                analysis = self.analyze_significance(pr, 'pr')
                if analysis['is_significant']:
                    pr['_analysis'] = analysis
                    pr['_repo'] = repo
                    collected_data['prs'].append(pr)

            # Releases収集（週次で確認）
            if days >= 7:
                releases = self.fetch_recent_releases(repo, days)
                for release in releases:
                    analysis = self.analyze_significance(release, 'release')
                    release['_analysis'] = analysis
                    release['_repo'] = repo
                    collected_data['releases'].append(release)

        print(f"\nCollection complete:")
        print(f"  - Significant Issues: {len(collected_data['issues'])}")
        print(f"  - Significant PRs: {len(collected_data['prs'])}")
        print(f"  - Recent Releases: {len(collected_data['releases'])}")

        return collected_data

    def save_raw_data(self, data: Dict[str, Any], output_dir: str = None):
        """収集した生データを保存"""
        if output_dir is None:
            # スクリプトのディレクトリからプロジェクトルートを取得
            script_dir = Path(__file__).parent
            project_root = script_dir.parent
            output_dir = project_root / 'data' / 'raw'
        else:
            output_dir = Path(output_dir)

        output_path = Path(output_dir)
        output_path.mkdir(parents=True, exist_ok=True)

        date_str = datetime.now().strftime('%Y-%m-%d')
        filename = output_path / f'cncf_upstream_{date_str}.json'

        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)

        print(f"\nRaw data saved to: {filename}")
        return filename


def main():
    """メイン実行関数"""
    collector = CNCFUpstreamCollector()

    # デイリー収集（過去1日分）
    data = collector.collect_daily_updates(days=1)

    # データ保存
    collector.save_raw_data(data)


if __name__ == '__main__':
    main()
