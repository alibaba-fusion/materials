# MergeCellTable

简介：合并单元格 Table

合并单元格的 Table

表格中需要合并单元格的数据，原始形态大多数为以下两种：

```javascript
const dataSource = [
  { id: '1', name: 'xx', group: 'a' },
  { id: '2', name: 'xx', group: 'a' },
  { id: '3', name: 'xx', group: 'a' },
  { id: '4', name: 'xx', group: 'b' },
  { id: '5', name: 'xx', group: 'b' },
];
```

```javascript
const dataSource = [
  {
    group: 'a',
    children: [
      { id: '1', name: 'xx' },
      { id: '2', name: 'xx' },
      { id: '3', name: 'xx' },
    ],
  },
  {
    group: 'b',
    children: [
      { id: '4', name: 'xx' },
      { id: '5', name: 'xx' },
    ],
  },
];
```

为了实现合并单元格, 需要对上述数据源做转换, 拉平数据并添加`groupCount` `groupIndex`，并且保证同一分组排在相邻的位置上。

- `groupCount`为当数据所在分组的数据总数
- `groupIndex`为当前数据在分组内的排序

转换后的数据格式为：

```json
[
  { "id": "1", "name": "xx", "group": "a", "groupCount": 3, "groupIndex": 0 },
  { "id": "2", "name": "xx", "group": "a", "groupCount": 3, "groupIndex": 1 },
  { "id": "3", "name": "xx", "group": "a", "groupCount": 3, "groupIndex": 2 },
  { "id": "4", "name": "xx", "group": "b", "groupCount": 2, "groupIndex": 0 },
  { "id": "5", "name": "xx", "group": "b", "groupCount": 2, "groupIndex": 1 }
]
```
