import { createStore } from 'ice';
import tasks from './models/tasks';

const store = createStore({ tasks });

export default store;
