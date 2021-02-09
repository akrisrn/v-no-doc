# web.config

@tags: 部署，snippet/code
@updated: 1608370400000, 1612335423000
@creator: AkrISrn
@updater: AkrISrn
@commit: e876fb2

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <staticContent>
      <mimeMap fileExtension=".md" mimeType="text/markdown; charset=UTF-8"/>
    </staticContent>
  </system.webServer>
</configuration>
```
