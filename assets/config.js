try {
  cacheKey;
} catch {
  cacheKey = '';
}

try {
  deployTime;
} catch {
  deployTime = '';
}

vnoConfig = {
  siteName: 'v-no',
  dateFormat: '',
  smartQuotes: '',
  replacer: [
    ['“', '『'],
    ['”', '』'],
    ['‘', '「'],
    ['’', '」'],
    ['-->', '→'],
    ['<--', '←'],
  ],
  cdn: !['127.0.0.1', 'localhost'].includes(location.hostname)
      ? 'https://cdn.jsdelivr.net/gh/akrisrn/v-no-doc@master/' : '',
  cacheKey,
  paths: {
    favicon: '/uploads/images/favicon.png',
    common: '/common.md',
  },
  defaultConf: 'en',
  multiConf: {
    en: {
      alias: 'English',
      paths: {
        index: '/en/index.md',
        readme: '/en/README.md',
        archive: '/en/archives.md',
        category: '/en/categories.md',
        search: '/en/search.md',
      },
      messages: {
        home: 'HOME',
        raw: 'Raw',
        footnotes: 'Footnotes:',
        returnHome: 'Return to home',
        lastUpdated: 'Last updated',
        untagged: 'untagged',
        pageError: '## [+](/en/error.md)',
        searching: 'Searching...',
        searchNothing: 'Nothing.',
        showBacklinks: 'Show backlinks',
        noBacklinks: 'No backlinks.',
        loading: 'Loading...',
        redirectFrom: 'Redirect from: ',
      },
    },
    zh: {
      alias: '简体中文',
      paths: {
        index: '/zh/index.md',
        readme: '/zh/README.md',
        archive: '/zh/archives.md',
        category: '/zh/categories.md',
        search: '/zh/search.md',
      },
      messages: {
        home: '主页',
        raw: '源文件',
        footnotes: '脚注：',
        returnHome: '返回主页',
        lastUpdated: '最后更新',
        untagged: '未分类',
        pageError: '## [+](/zh/error.md)',
        searching: '搜索中……',
        searchNothing: '什么也没找到。',
        showBacklinks: '查看反向链接',
        noBacklinks: '没有页面链接到这里。',
        loading: '加载中……',
        redirectFrom: '重定向自：',
      },
    },
  },
};
