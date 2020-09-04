
module.exports = {
  formatter: (data) => {
    return data;
  },
  querySchema: [{
    title: '行业',
    field: 'bizCode',
    component: 'Select',
    componentProps: {
      dataSource: [{
        label: '服饰',
        value: 'dress'
      }]
    }
  }, {
    title: '叶子类目',
    field: 'idPath'
  }, {
    title: '季节',
    field: 'seasonCode'
  }],
  actionSchema: [{
    buttonText: '新建',
    buttonProps: {
      type: 'primary'
    },
    onClick: () => {
      console.log('新建')
    }
  }, {
    buttonText: '批量选择',
    onClick: () => {
      console.log('批量选择')
    }
  }],
  dataSchema: [{
    title: '序号',
    field: 'id'
  }, {
    title: '测款名称',
    field: 'name',
  }, {
    title: '商品数',
    field: 'itemSize',
  }, {
    title: '店铺Logo',
    field: 'logo'
  }, {
    title: '发布时间',
    field: 'publishTime',
  }, {
    title: '测款进度',
    field: 'progress'
  }, {
    title: '状态',
    field: 'statusDesc',
  }, {
    title: '操作',
    field: 'action'
  }
  ],
  paginationParams: {
    pageSize: 10,
    currentPage: 1,
    totalCount: 100
  }
};
