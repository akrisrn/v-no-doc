# Mermaid

@tags: 外部插件
@updated: 1614991065000
@creator: AkrISrn
@updater: AkrISrn
@commit: 53d0fad

## Markdown

```markdown
[$](https://cdn.jsdelivr.net/npm/mermaid@8.9.1/dist/mermaid.min.js)
[$](/uploads/init-mermaid.js "mermaid")
```

- `init-mermaid.js` 会在 `mermaid.min.js` 加载完成后引入。

## [+](/zh/snippets/init-mermaid.js.md)

## 示例

### 流程图

```text
graph TD
    A-->B
    A-->C
    B-->D
    C-->D
```

<div class="mermaid">
graph TD
    A-->B
    A-->C
    B-->D
    C-->D
</div>

### 时序图

```text
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
```

<div class="mermaid">
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
</div>

### 甘特图

```text
gantt
    dateFormat YYYY-MM-DD
    title Adding GANTT diagram to mermaid
    excludes weekdays 2014-01-10
    section A section
    Completed task  :done,   des1, 2014-01-06, 2014-01-08
    Active    task  :active, des2, 2014-01-09, 3d
    Future    task  :        des3, after des2, 5d
    Future    task2 :        des4, after des3, 5d
```

<div class="mermaid">
gantt
    dateFormat YYYY-MM-DD
    title Adding GANTT diagram to mermaid
    excludes weekdays 2014-01-10
    section A section
    Completed task  :done,   des1, 2014-01-06, 2014-01-08
    Active    task  :active, des2, 2014-01-09, 3d
    Future    task  :        des3, after des2, 5d
    Future    task2 :        des4, after des3, 5d
</div>

### 类图

```text
classDiagram
    Class01 <|-- AveryLongClass : Cool
    Class03 *-- Class04
    Class05 o-- Class06
    Class07 .. Class08
    Class09 --> C2 : Where am i?
    Class09 --* C3
    Class09 --|> Class07
    Class07 : equals()
    Class07 : Object[] elementData
    Class01 : size()
    Class01 : int chimp
    Class01 : int gorilla
    Class08 <--> C2: Cool label
```

<div class="mermaid">
classDiagram
    Class01 <|-- AveryLongClass : Cool
    Class03 *-- Class04
    Class05 o-- Class06
    Class07 .. Class08
    Class09 --> C2 : Where am i?
    Class09 --* C3
    Class09 --|> Class07
    Class07 : equals()
    Class07 : Object[] elementData
    Class01 : size()
    Class01 : int chimp
    Class01 : int gorilla
    Class08 <--> C2: Cool label
</div>

### Git 图

```text
gitGraph:
options
{
    "nodeSpacing": 150,
    "nodeRadius": 10
}
end
commit
branch newbranch
checkout newbranch
commit
commit
checkout master
commit
commit
merge newbranch
```

<div class="mermaid">
gitGraph:
options
{
    "nodeSpacing": 150,
    "nodeRadius": 10
}
end
commit
branch newbranch
checkout newbranch
commit
commit
checkout master
commit
commit
merge newbranch
</div>

### 实体关系图

```text
erDiagram
    CUSTOMER ||--o{ ORDER            : places
    ORDER    ||--|{ LINE-ITEM        : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```

<div class="mermaid">
erDiagram
    CUSTOMER ||--o{ ORDER            : places
    ORDER    ||--|{ LINE-ITEM        : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
</div>

### 日程图

```text
journey
    title My working day
    section Go to work
        Make tea:      5: Me
        Go upstairs:   3: Me
        Do work:       1: Me, Cat
    section Go home
        Go downstairs: 5: Me
        Sit down:      5: Me
```

<div class="mermaid">
journey
    title My working day
    section Go to work
        Make tea:      5: Me
        Go upstairs:   3: Me
        Do work:       1: Me, Cat
    section Go home
        Go downstairs: 5: Me
        Sit down:      5: Me
</div>

[$](https://cdn.jsdelivr.net/npm/mermaid@8.9.1/dist/mermaid.min.js)
[$](/uploads/dist/scripts/init-mermaid.js "mermaid")
