import * as React from 'react';
import { Button } from '@alifd/next';

interface IExceptionBlockProps {
  onRefresh: () => Promise<any>;
}

const ExceptionBlock: React.FunctionComponent<IExceptionBlockProps> = ({ onRefresh }): JSX.Element => {
  return (
    <div className="table-empty-block">
      <div className="result-image">
        <img alt="data empty" src="//img.alicdn.com/tfs/TB1_yJXFkL0gK0jSZFAXXcA9pXa-1112-758.png" />
      </div>
      <div className="result-title">
        <Button type="secondary" onClick={onRefresh}>重新加载</Button>
      </div>
    </div>
  );
};

export default ExceptionBlock;
