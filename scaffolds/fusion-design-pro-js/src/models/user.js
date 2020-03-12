import { request } from 'ice';

export default {
  state: {
    name: 'default',
    department: '',
    avatar: '',
    userid: null,
  },
  effects: {
    async fetchUserProfile(state, payload, actions) {
      const res = await request('/api/profile');

      if (res.status === 'SUCCESS') {
        actions.update(res.data);
      }
    },
  },
  reducers: {
    update(prevState, payload) {
      return { ...prevState, ...payload };
    },
  },
};
