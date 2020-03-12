import { request } from 'ice';

interface IState {
  name: string;
  department: string;
  avatar: string;
  userid: number | null;
}

export default {
  state: {
    name: 'default',
    department: '',
    avatar: '',
    userid: null,
  },
  effects: {
    async fetchUserProfile(state: IState, payload, actions) {
      const res = await request('/api/profile');
      if (res.status === 'SUCCESS') {
        actions.update(res.data);
      }
    },
  },
  reducers: {
    update(prevState: IState, payload: IState) {
      return { ...prevState, ...payload };
    },
  },
};