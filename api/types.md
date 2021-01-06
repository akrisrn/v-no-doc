# Types

@tags: API

[toc]

## Dict

[+#1.2.0](/snippets/version-when-last-update.md)

```ts
type Dict<T> = { [index: string]: T }
```

## TLink

[+#1.2.1](/snippets/version-when-last-update.md)

```ts
type TLink = {
  href: string;
  texts: string[];
  isMarkdown?: boolean;
  isImage?: boolean;
  isAnchor?: boolean;
  isExternal?: boolean;
  isError?: boolean;
}
```

## TFileData

[+#1.2.2](/snippets/version-when-last-update.md)

```ts
type TFileData = {
  data: string;
  flags: IFlags;
  links: string[];
}
```

## TQuery

[+#1.2.0](/snippets/version-when-last-update.md)

```ts
type TQuery = Dict<string | null>
```

## THashPath

[+#1.2.0](/snippets/version-when-last-update.md)

```ts
type THashPath = {
  path: string;
  anchor: string;
  query: string;
}
```

## TConfList

[+#1.2.2](/snippets/version-when-last-update.md)

```ts
type TConfList = [string[], string[]]
```

## TRedirectList

[+#1.2.2](/snippets/version-when-last-update.md)

```ts
type TRedirectList = [string[], string[]]
```

## TFlag

[+#1.2.2](/snippets/version-when-last-update.md)

```ts
type TFlag = [string, string]
```

## TAnchor

[+#1.2.2](/snippets/version-when-last-update.md)

```ts
type TAnchor = [string, string]
```

## TAsyncResult

[+#1.2.2](/snippets/version-when-last-update.md)

```ts
type TAsyncResult = [string, string]
```

## Vue

[+#1.2.0](/snippets/version-when-last-update.md)

```ts
/**
 * vue/types/vue.d.ts
 */
type Vue = any
```

## Route

[+#1.2.0](/snippets/version-when-last-update.md)

```ts
/**
 * vue-router/types/router.d.ts
 */
type Route = any
```

## axios

[+#1.2.0](/snippets/version-when-last-update.md)

```ts
/**
 * axios/index.d.ts
 */
type axios = any
```

## Dayjs

[+#1.2.0](/snippets/version-when-last-update.md)

```ts
/**
 * dayjs/index.d.ts
 */
type Dayjs = any
```

## MarkdownIt

[+#1.2.0](/snippets/version-when-last-update.md)

```ts
/**
 * markdown-it/lib/index.d.ts
 */
type MarkdownIt = any
```

## Token

[+#1.2.0](/snippets/version-when-last-update.md)

```ts
/**
 * markdown-it/lib/token.d.ts
 */
type Token = any
```