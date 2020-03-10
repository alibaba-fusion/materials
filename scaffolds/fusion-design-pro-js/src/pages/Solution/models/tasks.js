export const delay = time => new Promise(resolve => setTimeout(() => resolve(), time));
export default {
  state: [
    {
      title: '示例任务',
      description: '初始示例任务说明...',
    },
  ],
  effects: {
    async addTask(prevState, task, actions) {
      // fetch API to add task
      await delay(100); // update store

      actions.add([task]);
    },

    async removeTask(prevState, taskIndex, actions) {
      // fetch API to remove task
      await delay(100); // update store

      actions.remove(taskIndex);
    },
  },
  reducers: {
    add(prevState, task) {
      return [...prevState, ...task];
    },

    remove(prevState, taskIndex) {
      const newState = [...prevState];
      newState.splice(taskIndex, 1);
      return newState;
    },
  },
};
