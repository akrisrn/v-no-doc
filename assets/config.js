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
  messages: {
    paths: {
      logo: '/uploads/images/logo.png',
      console: '/console.md',
      sandbox: '/sandbox.md',
      graph: '/graph.md',
      releases: '/{{ 0 }}/releases/',
      api: '/{{ 0 }}/api/',
    },
    links: {
      raw: 'https://raw.githubusercontent.com/akrisrn/v-no-doc/{{ 0 }}',
      powered: ['@akrisrn/v-no', 'https://github.com/akrisrn/v-no'],
      hosted: ['GitHub Pages', 'https://github.com/akrisrn/v-no-doc'],
    },
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
        components: {
          console: 'There is a [console page component]({{ 0 }}), the input value will be executed as inline script.',
          sandbox: 'There is a [sandbox page component]({{ 0 }}), the input value will be rendered like `.md` files.',
          graph: {
            text: 'There is a [force-directed graph page component]({{ 0 }}). It\'s based on [D3.js](https://github.com/d3/d3).',
            error: 'D3.js load failed.',
          },
          provider: 'Powered by {{ 0 }} itself, hosted on {{ 1 }}',
        },
        common: {
          WIP: 'The documentation is still worked in process, and it maybe lacks a lot of content.',
          openSource: 'This page is open source, [improve it]({{ 0 }})',
        },
        latest: ' (Latest)',
        lastDeployed: ' (Last deployed: {{ 0 }})',
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
        components: {
          console: '这里有一个[控制台页面组件]({{ 0 }})，在下面的输入框中输入的字符串都会作为[](/zh/docs/inline-script.md "#")执行。',
          sandbox: `这里有一个[沙盒页面组件]({{ 0 }})，在右侧的输入框中输入的字符串会即时渲染在左侧，渲染逻辑与渲染 \`.md\` 文件一致。

字符串会保存在 \`localStorage\`，无法保证不会丢失，请留意备份重要数据。`,
          graph: {
            text: `这里有一个[力导图页面组件]({{ 0 }})，使用 [D3.js](https://github.com/d3/d3) 绘制，展示了 \`.md\` 文件之间的网状链接关系。

（在非 Chromium 系浏览器中可能存在一些性能问题）

节点会根据标签进行上色，它的正向链接越多，半径越大。点击任意节点或链接可以聚焦和它直接关联的节点和链接，再点一下取消聚焦。

它算是某个被我搁浅的未公开项目的部分代码遗产，在大量删减改造之后，终于有机会在这里重见天日。`,
            error: 'D3.js 加载失败。',
          },
          provider: '该文档由 {{ 0 }} 自身驱动，源文件部署在 {{ 1 }}',
        },
        common: {
          WIP: '文档正在初步施工中，部分页面可能并不完整。',
          openSource: '这个页面是开源的，[改进它]({{ 0 }})',
        },
        latest: '（最新）',
        lastDeployed: '（最后部署：{{ 0 }}）',
      },
    },
  },
};
