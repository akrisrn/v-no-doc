# 部署在 Node.js

@tags: 部署
@updated: 1608394091000, 1610010081000
@creator: AkrISrn
@updater: AkrISrn
@commit: ad10f15

v-no-script 有个帮助你[启动 Web 服务的脚本](https://github.com/akrisrn/v-no-script/blob/master/src/web-server.ts)，它专门设计用来在本地部署 v-no。

它除了可以部署静态资源，也能为 v-no 植入一个 [WebSocket 客户端](https://github.com/akrisrn/v-no-script/blob/master/src/ws-client.ts)，让它能响应网站目录下的 `index.html`、`assets/config` 和 `.md` 文件的修改，自动重载 / 刷新页面（Hot / Live reload）。

它需要你在 `.env` 文件中正确填写下面的配置项才能正常工作：

```shell
SITE_PATH=
PORT=3000
PUBLIC_PATH=/
INDEX_PATH=-/index.html
COMMON_FILE=/common.md
EXCLUDE_DIRS=
DISABLE_WS=
```

| | |
| - | - |
| `SITE_PATH` | 网站根目录的路径。不能为空。 |
| `PORT` | 端口。可以为空，默认为 `3000`。 |
| `PUBLIC_PATH` | 和 `VUE_APP_PUBLIC_PATH` [](/zh/docs/env-vars.md "#")一致。可以为空，默认为 `/`。 |
| `INDEX_PATH` | 和 `VUE_APP_INDEX_PATH` [](/zh/docs/env-vars.md "#")一致。可以为空，默认为 `-/index.html`。 |
| `COMMON_FILE` | 和 `config.paths.common` [配置项](/zh/docs/conf-paths.md "#") 一致。可以为空，默认为 `/common.md`。 |
| `EXCLUDE_DIRS` | 不监听文件修改的目录名，用英文逗号进行分隔。它们会被追加进 `['.git', 'node_modules', 'assets']` 列表。 |
| `DISABLE_WS` | 禁用 `WebSocket` 服务，通常用于预渲染。如果它不为空，则视为 true。 |
