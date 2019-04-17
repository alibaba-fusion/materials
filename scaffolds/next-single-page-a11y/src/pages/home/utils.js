import { Icon } from '@alifd/next';

const map = {
  todo: '待进行',
  doing: '进行中',
  done: '已完成',
  failed: '异常',
};

const renderIcon = (state, called) => {
  let type;
  switch (state) {
    case 'todo':
      type = 'ellipsis';
      break;
    case 'doing':
      type = 'clock';
      break;
    case 'done':
      type = 'success-filling';
      break;
    case 'failed':
      type = 'delete-filling';
      break;
    default:
      break;
  }
  return (
    <Icon type={type} aria-label={called || map[state]} className={state} />
  );
};

export { renderIcon };
