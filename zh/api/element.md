# element

@tags: API
@updated: 1609910685000, 1612610932000
@creator: AkrISrn
@updater: AkrISrn
@commit: 5812292

[toc]

## cleanEventListenerDict()

[+#1.2.0](/snippets/latest-version.md)

- 参数：无
- 返回值：无

清除记录的事件监听器。

## addEventListener(element, type, listener)

[+#1.2.2](/snippets/latest-version.md)

- 参数：
    - `element: Document | Element`：添加事件监听器的元素。
    - `type: string`：事件类型。
    - `listener: EventListenerOrEventListenerObject`：监听器函数。
- 返回值：无

为元素添加事件监听器。它会保证相同类型的监听器不会被重复添加到同一元素上（旧的监听器会被移除）。

## dispatchEvent(type, payload?, timeout?)

[+#1.2.0](/snippets/latest-version.md)

- 参数：
    - `type: enums.EEvent`：事件类型。
    - `payload?: T`：自定义事件的 `detail` 值。
    - `timeout?: number`：派发事件前等待的毫秒数。
- 返回值：`Promise<boolean>`

派发一个自定义事件给 `document`。

## removeClass(element, cls?)

[+#1.2.0](/snippets/latest-version.md)

- 参数：
    - `element: Element`：元素。
    - `cls?: string`：`class` 名。
- 返回值：无

移除元素的指定 `class`。它会在 `class` 为空时移除整个属性。

## scroll(height, isSmooth?)

[+#1.2.0](/snippets/latest-version.md)

- 参数：
    - `height: number`：指定高度值。
    - `isSmooth = true`：是否为平滑滚动。
- 返回值：无

滚动页面到指定高度。

## getIcon(type, width?, height?)

[+#1.2.0](/snippets/latest-version.md)

- 参数：
    - `type: enums.EIcon`：图标类型。
    - `width = 16`：图标宽度。
    - `height = width`：图标高度。
- 返回值：`string`

获取一个 SVG 图标元素字符串。

## getSyncSpan(id?)

[+#1.2.0](/snippets/latest-version.md)

- 参数：
    - `id?: string`：元素 ID。
- 返回值：`string`

获取一个包含 Sync 图标元素的 `<span>` 元素字符串。

## getQueryTagLinks(tag)

[+#1.2.2](/snippets/latest-version.md)

- 参数：
    - `tag: string`：标签名。
- 返回值：`TAnchor[]`

获取一组用于查询标签的链接列表。它会按层级为嵌套标签生成多个链接。

## createList(file, li?)

[+#1.2.2](/snippets/latest-version.md)

- 参数：
    - `file: ISimpleFile`：文件对象。
    - `li?: HTMLLIElement`：所属 `<li>` 元素。
- 返回值：`HTMLLIElement`

为文件对象构建一个包含部分元数据的 `<li>` 元素。
