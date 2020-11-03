module.exports = {
  'GET /api/profile': {
    status: 'SUCCESS',
    data: {
      name: '淘小宝',
      department: '技术部',
      avatar: 'https://img.alicdn.com/tfs/TB1L6tBXQyWBuNjy0FpXXassXXa-80-80.png',
      userid: 10001,
    },
  },
  'POST /api/login': (req, res) => {
    const { username } = req.body;
    const authority = 'admin';
    res.cookie('authority', authority);
    res.send({
      status: 'SUCCESS',
      data: {
        authority,
        username,
      },
    });
  },
};
