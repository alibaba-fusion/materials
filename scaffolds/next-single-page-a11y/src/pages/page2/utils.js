import { Icon } from '@alifd/next';

const renderIcon = state => {
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
  return <Icon type={type} className={state} />;
};

export { renderIcon };
