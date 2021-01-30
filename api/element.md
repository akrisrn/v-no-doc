# element

@tags: API
@updated: 1609910685000
@creator: AkrISrn
@updater: AkrISrn
@commit: b1952be

[toc]

## cleanEventListenerDict()

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：无
- 返回值：无

清除记录的事件监听器。

## addEventListener(element, type, listener)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `element: Document | Element`
    - `type: string`
    - `listener: EventListenerOrEventListenerObject`
- 返回值：无

添加事件监听器。它会保证监听器不会被重复添加。

## dispatchEvent(type, payload?, timeout?)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `type: enums.EEvent`
    - `payload?: T`
    - `timeout?: number`
- 返回值：`Promise<boolean>`

派发一个自定义事件给 `document`。

## removeClass(element, cls?)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `element: Element`
    - `cls?: string`
- 返回值：无

移除元素的 `class`。它会在 `class` 为空时移除整个属性。

## scroll(height, isSmooth?)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `height: number`
    - `isSmooth = true`
- 返回值：无

滚动页面到指定高度。

## getIcon(type, width?, height?)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `type: enums.EIcon`
    - `width = 16`
    - `height = width`
- 返回值：`string`

获取 SVG 图标元素。

## getSyncSpan(id?)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `id?: string`
- 返回值：`string`

获取包含 Sync 图标元素的 `<span>`。

## getQueryTagLinks(tag)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `tag: string`
- 返回值：`TAnchor[]`

获取一组用于查询标签的链接列表。

## createList(file, li?)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `file: ISimpleFile`
    - `li?: HTMLLIElement`
- 返回值：`HTMLLIElement`

为文件创建一个包含部分元数据的文章列表项。
