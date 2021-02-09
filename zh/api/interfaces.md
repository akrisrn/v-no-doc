# Interfaces

@tags: API
@updated: 1609910685000, 1612610932000
@creator: AkrISrn
@updater: AkrISrn
@commit: 5812292

[toc]

## IMessage

[+#1.2.6](/snippets/latest-version.md)

```ts
interface IMessage {
  [index: string]: string | IMessage
}
```

## IConfig

[+#1.2.6](/snippets/latest-version.md)

```ts
interface IConfig {
  siteName?: string;
  dateFormat?: string;
  smartQuotes?: string | string[];
  replacer?: [string, string][];
  cdn?: string;
  cacheKey?: string | Dict<string>;
  paths: {
    favicon?: string;
    index: string;
    readme: string;
    archive: string;
    category: string;
    search: string;
    common?: string;
  };
  messages: {
    home: string;
    raw: string;
    footnotes: string;
    returnHome: string;
    lastUpdated: string;
    untagged: string;
    pageError: string;
    searching: string;
    searchNothing: string;
    showBacklinks: string;
    noBacklinks: string;
    loading: string;
    redirectFrom: string;

    [index: string]: string | IMessage;
  };
  defaultConf?: string;
  multiConf?: Dict<IConfig>;
  alias?: string;

  [index: string]: any;
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
