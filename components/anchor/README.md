# anchor

`npm i @alifd/biz-anchor`

`2.0.0` 后增加跟随页面滚动自动切换 active 态功能

## API
> 继承 Affix 所有能力

| 参数名 | 说明 | 必填 | 类型 | 默认值 | 备注 |
| ------ | ---- | ---- | ---- | ------ | ---- |
| offsetTop | 菜单距离顶部偏离的固定高度 |   false   |   Number   |      0  |      |
| noHash | 不修改hash |   false   |   Number   |      0  |      |
| content | 返回关注内容的node节点, 自动生成目录 |   false   |   documentNode   |      0  |      |
| scrollNode | 指定要监听的滚动节点(默认监听 window 对象)，如需修改指定该参数 |   false   |   window   |      0  |      |

### Anchor.Link
| 参数名 | 说明 | 必填 | 类型 | 默认值 | 备注 |
| ------ | ---- | ---- | ---- | ------ | ---- |
|    active    |      |  -   |  bool    |    false    |      |

