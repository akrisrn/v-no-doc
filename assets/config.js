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
        common: {
          WIP: 'The documentation is still worked in process, and it maybe lacks a lot of content.',
          openSource: 'This page is open source, [improve it]',
        },
        latest: ' (Latest)',
        lastDeployed: ' (Last deployed: << 0 >>)',
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
        common: {
          WIP: '文档正在初步施工中，部分页面可能并不完整。',
          openSource: '这个页面是开源的，[改进它]',
        },
        latest: '（最新）',
        lastDeployed: '（最后部署：<< 0 >>）',
      },
    },
  },
};
