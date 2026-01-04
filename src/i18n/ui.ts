export const languages = {
  ja: '日本語',
  en: 'English',
};

export const defaultLang = 'ja';

export const ui = {
  ja: {
    // Navigation
    'nav.home': 'Home',
    'nav.posts': 'Posts',
    'nav.about': 'About',
    'nav.philosophy': 'Philosophy',
    'nav.howToRead': 'How to Read',
    'nav.disclaimer': 'Disclaimer',
    'nav.author': 'Author',

    // Hero
    'hero.tagline': 'Seeing decisions before code is written',
    'hero.description': '技術選択の背景にある意思決定を、コードが書かれる前の upstream から読み解く',
    'hero.cta.philosophy': 'Philosophy',
    'hero.cta.posts': 'Posts',

    // Value Props
    'value.structure.title': '構造を見る',
    'value.structure.desc': '技術トレンドを「結果」ではなく、意思決定プロセスとして理解する',
    'value.context.title': '文脈を知る',
    'value.context.desc': 'なぜその判断がなされたのか、upstream の議論から構造を読み解く',
    'value.perspective.title': '視点を持つ',
    'value.perspective.desc': '中立を装わず、事実と解釈を分離し、思考の前提を明示する',

    // Framework
    'framework.title': '3軸の思考フレームワーク',
    'framework.subtitle': 'すべての分析は、この3つの軸で構造化されます',
    'framework.product.title': 'Product',
    'framework.product.desc': '価値仮説、ユーザー、提供したい体験',
    'framework.product.tag': 'Why',
    'framework.engineering.title': 'Engineering',
    'framework.engineering.desc': '技術選択、設計判断、実装可能性',
    'framework.engineering.tag': 'How',
    'framework.organization.title': 'Organization',
    'framework.organization.desc': '組織構造、運用、ガバナンス、持続性',
    'framework.organization.tag': 'Who',
    'framework.learnMore': '詳しくはPhilosophyへ',

    // Getting Started
    'gettingStarted.title': 'はじめに',
    'gettingStarted.step1.title': 'Philosophy',
    'gettingStarted.step1.desc': 'サイトの視点と思考軸を理解する',
    'gettingStarted.step2.title': 'How to Read',
    'gettingStarted.step2.desc': '記事の読み方と前提を確認する',
    'gettingStarted.step3.title': 'Posts',
    'gettingStarted.step3.desc': '興味のある記事から読み始める',

    // Status
    'status.title': '現在、サイト構築中です',
    'status.desc': 'コンテンツは順次公開予定です',

    // Footer
    'footer.copyright': '© {year} Upstream Lens. All rights reserved.',
    'footer.disclaimer': 'This site is not affiliated with CNCF or any related projects.',

    // Common
    'common.readMore': '続きを読む',
    'common.backToList': '記事一覧に戻る',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.posts': 'Posts',
    'nav.about': 'About',
    'nav.philosophy': 'Philosophy',
    'nav.howToRead': 'How to Read',
    'nav.disclaimer': 'Disclaimer',
    'nav.author': 'Author',

    // Hero
    'hero.tagline': 'Seeing decisions before code is written',
    'hero.description': 'Decoding the decision-making behind technology choices from upstream before code is written',
    'hero.cta.philosophy': 'Philosophy',
    'hero.cta.posts': 'Posts',

    // Value Props
    'value.structure.title': 'See Structure',
    'value.structure.desc': 'Understand tech trends as decision-making processes, not just outcomes',
    'value.context.title': 'Know Context',
    'value.context.desc': 'Decode why decisions were made through upstream discussions and structure',
    'value.perspective.title': 'Have Perspective',
    'value.perspective.desc': 'Separate facts from interpretation without claiming neutrality',

    // Framework
    'framework.title': '3-Axis Thinking Framework',
    'framework.subtitle': 'All analyses are structured along these three axes',
    'framework.product.title': 'Product',
    'framework.product.desc': 'Value hypothesis, users, desired experience',
    'framework.product.tag': 'Why',
    'framework.engineering.title': 'Engineering',
    'framework.engineering.desc': 'Technology choices, design decisions, feasibility',
    'framework.engineering.tag': 'How',
    'framework.organization.title': 'Organization',
    'framework.organization.desc': 'Organizational structure, operations, governance, sustainability',
    'framework.organization.tag': 'Who',
    'framework.learnMore': 'Learn more in Philosophy',

    // Getting Started
    'gettingStarted.title': 'Getting Started',
    'gettingStarted.step1.title': 'Philosophy',
    'gettingStarted.step1.desc': 'Understand our perspective and thinking framework',
    'gettingStarted.step2.title': 'How to Read',
    'gettingStarted.step2.desc': 'Check how to read articles and prerequisites',
    'gettingStarted.step3.title': 'Posts',
    'gettingStarted.step3.desc': 'Start reading from topics that interest you',

    // Status
    'status.title': 'Site Under Construction',
    'status.desc': 'Content will be published progressively',

    // Footer
    'footer.copyright': '© {year} Upstream Lens. All rights reserved.',
    'footer.disclaimer': 'This site is not affiliated with CNCF or any related projects.',

    // Common
    'common.readMore': 'Read more',
    'common.backToList': 'Back to list',
  },
} as const;
