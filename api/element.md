# element

@tags: API

[toc]

## cleanEventListenerDict()

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：无
- 返回值：无

## addEventListener(element, type, listener)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `element: Document | Element`
    - `type: string`
    - `listener: EventListenerOrEventListenerObject`
- 返回值：无

## dispatchEvent(type, payload?, timeout?)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `type: enums.EEvent`
    - `payload?: T`
    - `timeout?: number`
- 返回值：`Promise<boolean>`

## removeClass(element, cls?)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `element: Element`
    - `cls?: string`
- 返回值：无

## scroll(height, isSmooth?)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `height: number`
    - `isSmooth = true`
- 返回值：无

## getIcon(type, width?, height?)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `type: enums.EIcon`
    - `width = 16`
    - `height = width`
- 返回值：`string`

## getSyncSpan(id?)

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：
    - `id?: string`
- 返回值：`string`

## getQueryTagLinks(tag)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `tag: string`
- 返回值：`TAnchor[]`

## createList(file, li?)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `file: ISimpleFile`
    - `li?: HTMLLIElement`
- 返回值：`HTMLLIElement`
