export const delay = (time: number) => new Promise((resolve) => setTimeout(() => resolve(), time));

interface ITask {
  title: string;
  description: string;
}

type IState = ITask[];

export default {
  state: [
    { title: '示例任务', description: '初始示例任务说明...' },
  ],
  effects: (dispatch) => ({
    async addTask(task: ITask): Promise<void> {
      // fetch API to add task
      await delay(100);
      // update store
      dispatch.tasks.add([task]);
    },
    async removeTask(taskIndex: number): Promise<void> {
      // fetch API to remove task
      await delay(100);
      // update store
      dispatch.tasks.remove(taskIndex);
    },
  }),
  reducers: {
    add(prevState: IState, task: ITask[]): IState {
      return [...prevState, ...task];
    },
    remove(prevState: IState, taskIndex: number): IState {
      const newState = [...prevState];
      newState.splice(taskIndex, 1);
      return newState;
    },
  },
};