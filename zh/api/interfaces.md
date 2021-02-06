# Interfaces

@tags: API
@updated: 1612334783000, 1612335391000
@creator: AkrISrn
@updater: AkrISrn
@commit: c6035a2

[toc]

## IConfig

[+#1.2.0](/snippets/latest-version.md)

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
