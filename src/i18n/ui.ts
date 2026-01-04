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
    'hero.description': '技術トレンドの裏側にある意思決定を、コードが書かれる前から追いかける',
    'hero.cta.philosophy': 'Philosophy',
    'hero.cta.posts': 'Posts',

    // Value Props
    'value.structure.title': '流れを追いかける',
    'value.structure.desc': '技術トレンドを「結果」として見るのではなく、どう決まっていったかのプロセスを追う',
    'value.context.title': '背景を探る',
    'value.context.desc': 'なぜその選択がされたのか、コミュニティの議論から背景を探っていく',
    'value.perspective.title': '視点を明らかにする',
    'value.perspective.desc': '中立を装わず、事実と解釈を分けて、考え方の前提を先に示す',

    // Framework
    'framework.title': '3つの軸で考える',
    'framework.subtitle': 'どんな技術も、この3つの視点で整理しています',
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
    'gettingStarted.title': 'まずはここから',
    'gettingStarted.step1.title': 'Philosophy',
    'gettingStarted.step1.desc': 'このサイトの考え方を知る',
    'gettingStarted.step2.title': 'How to Read',
    'gettingStarted.step2.desc': '記事の読み方をチェック',
    'gettingStarted.step3.title': 'Posts',
    'gettingStarted.step3.desc': '気になる記事を読んでみる',

    // Status
    'status.title': '現在、サイト構築中です',
    'status.desc': 'コンテンツは順次公開予定です',

    // Footer
    'footer.copyright': '© {year} Upstream Lens. All rights reserved.',
    'footer.disclaimer': 'This site is not affiliated with any specific foundation, organization, or project.',

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
    'hero.description': 'Follow the decisions behind tech trends from the very beginning',
    'hero.cta.philosophy': 'Philosophy',
    'hero.cta.posts': 'Posts',

    // Value Props
    'value.structure.title': 'Follow the Flow',
    'value.structure.desc': 'Track how decisions unfold, not just the final outcomes',
    'value.context.title': 'Explore the Background',
    'value.context.desc': 'Discover why choices were made through community discussions',
    'value.perspective.title': 'Be Clear About Perspective',
    'value.perspective.desc': 'Separate facts from interpretation, and state our assumptions upfront',

    // Framework
    'framework.title': 'Think in 3 Dimensions',
    'framework.subtitle': 'We organize every technology through these three perspectives',
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
    'gettingStarted.title': 'Start Here',
    'gettingStarted.step1.title': 'Philosophy',
    'gettingStarted.step1.desc': 'Get to know our perspective',
    'gettingStarted.step2.title': 'How to Read',
    'gettingStarted.step2.desc': 'Check out the reading guide',
    'gettingStarted.step3.title': 'Posts',
    'gettingStarted.step3.desc': 'Dive into articles that interest you',

    // Status
    'status.title': 'Site Under Construction',
    'status.desc': 'Content will be published progressively',

    // Footer
    'footer.copyright': '© {year} Upstream Lens. All rights reserved.',
    'footer.disclaimer': 'This site is not affiliated with any specific foundation, organization, or project.',

    // Common
    'common.readMore': 'Read more',
    'common.backToList': 'Back to list',
  },
} as const;
