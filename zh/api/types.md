# Types

@tags: API
@updated: 1609910685000, 1614251237000
@creator: AkrISrn
@updater: AkrISrn
@commit: fd7c6a1

[toc]

## Dict

[+#1.2.0](/snippets/latest-version.md)

```ts
type Dict<T> = { [index: string]: T }
```

## TLink

[+#1.2.11](/snippets/latest-version.md)

```ts
type TLink = {
  href: string
  texts: string[]
  isMarkdown?: boolean
  isImage?: boolean
  isAnchor?: boolean
  isExternal?: boolean
}
```

## TFileData

[+#1.2.2](/snippets/latest-version.md)

```ts
type TFileData = {
  data: string
  flags: IFlags
  links: string[]
}
```

## TQuery

[+#1.2.0](/snippets/latest-version.md)

```ts
type TQuery = Dict<string | null>
```

## THashPath

[+#1.2.0](/snippets/latest-version.md)

```ts
type THashPath = {
  path: string
  anchor: string
  query: string
}
```

## TConfList

[+#1.2.2](/snippets/latest-version.md)

```ts
type TConfList = [string[], string[]]
```

## TMessageData

[+#1.2.8](/snippets/latest-version.md)

```ts
type TMessageData = string | number | boolean | null
```

## TMessage

[+#1.2.8](/snippets/latest-version.md)

```ts
type TMessage = TMessageData | TMessageData[] | IMessage
```

## TRedirectList

[+#1.2.2](/snippets/latest-version.md)

```ts
type TRedirectList = [string[], string[]]
```

## TFlag

[+#1.2.9](/snippets/latest-version.md)

```ts
type TFlag = {
  key: string
  value: string
}
```

## TAnchor

[+#1.2.10](/snippets/latest-version.md)

```ts
type TAnchor = {
  text: string
  href: string
  isExternal?: boolean
  isMarkdown?: boolean
}
```

## TAsyncResult

[+#1.2.9](/snippets/latest-version.md)

```ts
type TAsyncResult = {
  id: string
  result: string
  isError?: boolean
}
```

## VPD

[+#1.2.6](/snippets/latest-version.md)

```ts
/**
 * vue-property-decorator/lib/index.d.ts
 */
type VPD = any
```

## Vue

[+#1.2.0](/snippets/latest-version.md)

```ts
/**
 * vue/types/vue.d.ts
 */
type Vue = any
```

## Route

[+#1.2.0](/snippets/latest-version.md)

```ts
/**
 * vue-router/types/router.d.ts
 */
type Route = any
```

## axios

[+#1.2.0](/snippets/latest-version.md)

```ts
/**
 * axios/index.d.ts
 */
type axios = any
```

## Dayjs

[+#1.2.0](/snippets/latest-version.md)

```ts
/**
 * dayjs/index.d.ts
 */
type Dayjs = any
```

## MarkdownIt

[+#1.2.0](/snippets/latest-version.md)

```ts
/**
 * markdown-it/lib/index.d.ts
 */
type MarkdownIt = any
```

## Token

[+#1.2.0](/snippets/latest-version.md)

```ts
/**
 * markdown-it/lib/token.d.ts
 */
type Token = any
```
