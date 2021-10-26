import * as React from 'react';
import { Box, Search, Card, Tag, Divider, Typography, Icon, Loading, Button, Pagination } from '@alifd/next';
import styles from './index.module.css';

const { useState, useEffect } = React;
const { Group: TagGroup, Selectable: SelectableTag } = Tag;
const DEFAULT_DATA = {
  tagsA: ['类目一', '类目二', '类目三', '类目四', '类目五', '类目六', '类目七', '类目八', '类目九', '类目十'],
  tagA: '类目一',
  tagsB: ['不到一年', '一年以上三年以下', '三年以上五年以下', '五年以上'],
  tagB: '一年以上三年以下',
  cards: new Array(5).fill({
    title: '构建一套产品化设计系统',
    content:
      '随着互联网行业的聚变式发展，在电商业务从“信息透出” 到 “在线交易” 的过程中，网站 UI 构建也经历了“体验一致性”、“设计效率”、“UI系统构建/应用效率”、“多端适配” …',
    subContent: '谢瑶 3 小时前更新',
  }),
};

const BasicList = (props) => {
  const { dataSource = DEFAULT_DATA, onSearch = () => {} } = props;
  const [tagAValue, setTagAValue] = useState(dataSource.tagA);
  const [tagBValue, setTagBValue] = useState(dataSource.tagB);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  const onTagAValueChange = (v) => {
    setLoading(true);
    setTagAValue(v);
  };

  const onTagBValueChange = (v) => {
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
    return dataSource.tagsA.map((name) => (
      <SelectableTag key={name} checked={tagAValue === name} onChange={() => onTagAValueChange(name)} {...props}>
        {name}
      </SelectableTag>
    ));
  };

  const renderTagListB = () => {
    return dataSource.tagsB.map((name) => (
      <SelectableTag key={name} checked={tagBValue === name} onChange={() => onTagBValueChange(name)} {...props}>
        {name}
      </SelectableTag>
    ));
  };

  const renderCards = () => {
    return dataSource.cards.map((c, i) => (
      <div className={styles.listItem} key={i}>
        <div className={styles.cardMain}>
          <div className={styles.cardLeft}>
            <img
              src="https://shadow.elemecdn.com/app/element/list.62a82841-1bcb-11ea-a71c-17428dec1b82.png"
              alt="img"
            />
            <div>
              <div className={styles.cardTitle}>{c.title}</div>
              <div className={styles.cardContent}>{c.content}</div>
              <div className={styles.subContent}>{c.subContent}</div>
            </div>
          </div>

          <div className={styles.cardRight}>
            <Button type="primary" text>
              编辑
            </Button>
            <Button type="primary" text>
              订阅
            </Button>
            <Button type="primary" text>
              删除
            </Button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <Card free className={styles.basicList}>
        <Box align="center">
          <Search type="primary" hasIcon={false} searchText="搜索" onSearch={onSearchClick} />
        </Box>
        <Divider
          dashed
          style={{
            margin: '24px 0',
          }}
        />
        <Box className={styles.tagBox}>
          <div className={styles.tagBoxItem}>
            <Typography.Text className={styles.tagTitleName}>内容分类</Typography.Text>
            <TagGroup>{renderTagListA()}</TagGroup>
          </div>
          <div className={styles.tagBoxItem}>
            <Typography.Text className={styles.tagTitleName}>时间</Typography.Text>
            <TagGroup>{renderTagListB()}</TagGroup>
          </div>
        </Box>
        <Loading visible={loading} className={styles.mainList}>
          <Box className={styles.mainContent} spacing={10}>
            <div className={styles.listItem}>
              <div className={styles.addContent}>
                <Icon type="add" className={styles.addContentIcon} size="xs" />
                <div className={styles.addText}>添加内容</div>
              </div>
            </div>
            {renderCards()}
            <Box margin={[15, 0, 0, 0]} direction="row" align="center" justify="space-between">
              <div className={styles.totalPagin}>
                共<span>200</span>条需求
              </div>
              <Pagination onChange={onPaginationChange} />
            </Box>
          </Box>
        </Loading>
      </Card>
    </>
  );
};

export default BasicList;
