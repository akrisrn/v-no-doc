# file

@tags: API

[toc]

## createErrorFile(path)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `path: string`
- 返回值：`IFile`

## isCached()

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：无
- 返回值：`boolean`

## disableCache()

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：无
- 返回值：无

## enableCache()

[+#1.2.0](/snippets/version-when-last-update.md)

- 参数：无
- 返回值：无

## getFile(path)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `path: string`
- 返回值：`Promise<IFile>`

## getFiles()

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：无
- 返回值：

```ts
Promise<{
  files: Dict<IFile>;
  backlinks: Dict<string[]>;
}>
```

## sortFiles(fileA, fileB)

[+#1.2.2](/snippets/version-when-last-update.md)

- 参数：
    - `fileA: ISimpleFile`
    - `fileB: ISimpleFile`
- 返回值：`number`
