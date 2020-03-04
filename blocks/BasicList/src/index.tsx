import React, { useState, useEffect } from 'react';
import { Box, Search, Card, Tag, Divider, Typography, Icon, Loading, Button, Pagination } from '@alifd/next';

import styles from './index.module.scss';

const { Group: TagGroup, Selectable: SelectableTag } = Tag;

export interface ICardItem {
  title?: string;
  content?: string;
  subContent?: string;
};

export interface DataSource {
  cards: ICardItem[];
  tagsA: string[];
  tagA: string;
  tagsB: string[];
  tagB: string;
};

const DEFAULT_DATA: DataSource = {
  tagsA: ['类目一', '类目二', '类目三', '类目四', '类目五', '类目六', '类目七', '类目八', '类目九', '类目十'],
  tagA: '类目一',
  tagsB: ['不到一年', '一年以上三年以下', '三年以上五年以下', '五年以上'],
  tagB: '一年以上三年以下',
  cards: new Array(5).fill({
    title: '构建一套产品化设计系统',
    content: '随着互联网行业的聚变式发展，在电商业务从“信息透出” 到 “在线交易” 的过程中，网站 UI 构建也经历了“体验一致性”、“设计效率”、“UI系统构建/应用效率”、“多端适配” …',
    subContent: '谢瑶 3 小时前更新',
  }),
};

const BasicList: React.FunctionComponent<BasicListProps> = (props: BasicListProps): JSX.Element => {
  const {
    dataSource = DEFAULT_DATA,
    onSearch = (): void => { },
  } = props;

  const [tagAValue, setTagAValue] = useState(dataSource.tagA);
  const [tagBValue, setTagBValue] = useState(dataSource.tagB);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  const onTagAValueChange = (v: string) => {
    setLoading(true);
    setTagAValue(v);
  };

  const onTagBValueChange = (v: string) => {
    setLoading(true);
    setTagBValue(v);
  };

  const onSearchClick = () => {
    setLoading(true);
    onSearch();
  };

  const onPaginationChange = () => {
    setLoading(true);
  };

  const renderTagListA = () => {
    return dataSource.tagsA.map((name: string) => (
      <SelectableTag key={name}
        checked={tagAValue === name}
        onChange={() => onTagAValueChange(name)}
        {...props}>{name}</SelectableTag>
    ));
  };

  const renderTagListB = () => {
    return dataSource.tagsB.map((name: string) => (
      <SelectableTag key={name}
        checked={tagBValue === name}
        onChange={() => onTagBValueChange(name)}
        {...props}>{name}</SelectableTag>
    ));
  };

  const renderCards = () => {
    return dataSource.cards.map((c: ICardItem, i: number) => (
      <div className={styles.ListItem} key={i}>
        <div className={styles.main}>
          <div className={styles.left}>
            <img src="https://shadow.elemecdn.com/app/element/list.62a82841-1bcb-11ea-a71c-17428dec1b82.png" alt="img" />
            <div>
              <div className={styles.title}>
                {c.title}
              </div>
              <div className={styles.content}>
                {c.content}
              </div>
              <div className={styles.subContent}>
                {c.subContent}
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <Button type="primary" text>编辑</Button>
            <Button type="primary" text>订阅</Button>
            <Button type="primary" text>删除</Button>
          </div>
        </div>
      </div>
    ));
  };

  return (<>
    <Card free className={styles.BasicList}>
      <Box align="center">
        <Search type="primary" hasIcon={false} searchText="搜索" onSearch={onSearchClick} />
      </Box>
      <Divider dashed style={{ margin: '24px 0' }} />
      <Box className={styles.TagBox}>
        <div className={styles.TagBoxItem}>
          <Typography.Text className={styles.TagTitleName}>内容分类</Typography.Text>
          <TagGroup>{renderTagListA()}</TagGroup>
        </div>
        <div className={styles.TagBoxItem}>
          <Typography.Text className={styles.TagTitleName}>时间</Typography.Text>
          <TagGroup>{renderTagListB()}</TagGroup>
        </div>
      </Box>

      <Loading visible={loading} className={styles.MainList}>
        <Box className={styles.MainContent} spacing={10}>
          <div className={styles.ListItem}>
            <div className={styles.add}>
              <Icon type="add" className={styles.icon} size="xs" />
              <div className={styles.addText}>
                添加内容
              </div>
            </div>
          </div>
          {renderCards()}
          <Box margin={[15, 0, 0, 0]} direction="row" align="center" justify="space-between">
            <div className={styles.total}>
              共<span>200</span>条需求
            </div>
            <Pagination onChange={onPaginationChange} />
          </Box>
        </Box>
      </Loading>
    </Card>
  </>);
};

export default BasicList;
