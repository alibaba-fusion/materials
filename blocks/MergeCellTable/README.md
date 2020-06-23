# MergeCellTable

简介：合并单元格 Table

合并单元格的 Table

原始数据常见的两种

```javascript
const dataSource = [
  { id: "1", name: "xx", group: "a" },
  { id: "2", name: "xx", group: "a" },
  { id: "3", name: "xx", group: "a" },
  { id: "4", name: "xx", group: "b" },
  { id: "5", name: "xx", group: "b" },
  { id: "6", name: "xx", group: "b" },
];
```

```javascript
const dataSource = [
  {
    group: "a",
    children: [
      { id: "1", name: "xx" },
      { id: "2", name: "xx" },
      { id: "3", name: "xx" },
    ],
  },
  {
    group: "b",
    children: [
      { id: "1", name: "xx" },
      { id: "2", name: "xx" },
      { id: "3", name: "xx" },
    ],
  },
];
```

为了实现合并单元格, 需要对数据源做转换, 手动统计出 groupCount 数量以及 分组内的排序, 并且保证同一分组排在相邻的位置。
上面两例 dataSource 是等价的, 转换后的结构是一致的

```json
[
  { "id": "1", "name": "xx", "group": "a", "groupCount": 3, "groupIndex": 0 },
  { "id": "2", "name": "xx", "group": "a", "groupCount": 3, "groupIndex": 1 },
  { "id": "3", "name": "xx", "group": "a", "groupCount": 3, "groupIndex": 2 },
  { "id": "4", "name": "xx", "group": "b", "groupCount": 3, "groupIndex": 0 },
  { "id": "5", "name": "xx", "group": "b", "groupCount": 3, "groupIndex": 1 },
  { "id": "6", "name": "xx", "group": "b", "groupCount": 3, "groupIndex": 2 }
]
```
