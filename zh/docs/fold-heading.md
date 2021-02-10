# 折叠标题

@tags: 语法/扩展
@updated: 1612096807000, 1612966734000
@creator: AkrISrn
@updater: AkrISrn
@commit: eb862ba

v-no 渲染的页面标题除了会带有锚点图标（右侧），还有一个指示标题层级的元素（左侧），点击它就可以折叠归属于这个标题下的所有元素，不过只对 `<article>` 的直接子元素有效。

你可以在标题标记和文本之间添加一个加号（`## + heading`）来默认折叠指定标题。

示例：

[toc]

## + heading 2-1

paragraph

### + heading 3-1

paragraph

#### heading 4-1

paragraph

##### + heading 5-1

paragraph

###### heading 6-1

paragraph

###### heading 6-2

paragraph

##### heading 5-2

paragraph

#### + heading 4-2

paragraph

### heading 3-2

## heading 2-2

paragraph

### heading 3-1

paragraph

### heading 3-2

paragraph
