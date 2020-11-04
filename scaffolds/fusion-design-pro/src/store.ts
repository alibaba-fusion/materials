import { createStore } from 'ice';
import user from './models/user';

const store = createStore({ user });

export default store;
