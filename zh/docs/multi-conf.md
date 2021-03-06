# 多配置

@tags: 部署/配置
@updated: 1607966207000, 1613115194000
@creator: AkrISrn
@updater: AkrISrn
@commit: b2345cc

$$: title $$是可以自由切换的、会覆盖到主配置的多组备用配置项。

因为只要更换 `paths` 段指定的 `.md` 文件就可以索引到不同的内容，你可以用它在同一个地方构建多个独立索引的内容分区。没错，它可以用来做国际化（i18n）。

| | |
| - | - |
| `defaultConf` | `localStorage` 没有相关记录时，默认选择的配置名。如果此项为空，会停用$$: title $$。 |
| `multiConf` | 键为配置名、值为主配置子集的对象。只有此项列出的配置组的个数多于一个时，才会启用$$: title $$。 |
| `alias` | 它不在默认配置中，只用在 `multiConf` 为当前配置组指定一个别名。 |

$$: title $$在启用后，顶栏的最右边会出现一个选择框供切换配置使用。它会将选定的配置名记录到 `localStorage` 以便之后读取。

v-no 会尝试从 `multiConf` 中取出指定配置名下的一组配置项，并将它覆盖到外层主配置上。如果没有与 `localStorage` 记录的配置名对应的配置组，记录会被清除，并尝试用默认配置组继续。

这里是一个$$: title $$写法的示例：

[+](/zh/snippets/multi-conf-example.md)

如果 `multiConf` 只有一组配置项，虽然不会启用$$: title $$，但你只要在 `defaultConf` 指定了它，对主配置的覆盖也会进行。所以，你也可以把外层主配置全部移动到 `multiConf` 中，这样配置文件会更加整洁。只要主配置最后是完整可用的，v-no 就可以正常运作。

## [+](/zh/docs/multi-conf-auto-switch.md)
