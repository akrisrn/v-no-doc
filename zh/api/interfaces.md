# Interfaces

@tags: API
@updated: 1609910685000, 1613906715000
@creator: AkrISrn
@updater: AkrISrn
@commit: 26f1ac7

[toc]

## IConfig

[+#1.2.8](/snippets/latest-version.md)

```ts
interface IConfig {
  siteName?: string;
  dateFormat?: string;
  smartQuotes?: string | string[];
  replacer?: [string, string][];
  cdn?: string;
  cacheKey?: string | Dict<string>;
  paths: {
    favicon?: string
    index: string
    readme: string
    archive: string
    category: string
    search: string
    common?: string
  };
  messages: {
    home: string
    raw: string
    footnotes: string
    returnHome: string
    lastUpdated: string
    untagged: string
    pageError: string
    searching: string
    searchNothing: string
    showBacklinks: string
    noBacklinks: string
    loading: string
    redirectFrom: string

    [index: string]: TMessage
  };
  defaultConf?: string;
  multiConf?: Dict<IConfig>;
  alias?: string;

  [index: string]: any;
}
```

## IMessage

[+#1.2.8](/snippets/latest-version.md)

```ts
interface IMessage {
  [index: string]: TMessage;
}
```

## IFlags

[+#1.2.1](/snippets/latest-version.md)

```ts
interface IFlags {
  title: string;
  tags?: string[];
  updated?: string[];
  cover?: string;
  times?: number[];
  startDate?: string;
  endDate?: string;
  creator?: string;
  updater?: string;

  [index: string]: string | string[] | number[] | undefined;
}
```

## ISimpleFile

[+#1.2.2](/snippets/latest-version.md)

```ts
interface ISimpleFile {
  path: string;
  flags: IFlags;
  isError?: boolean;
}
```

## IFile

[+#1.2.2](/snippets/latest-version.md)

```ts
interface IFile extends ISimpleFile {
  data: string;
  links: Dict<TLink>;
}
```
