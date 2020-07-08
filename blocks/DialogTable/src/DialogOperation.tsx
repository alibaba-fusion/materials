import React, { useRef } from 'react';
import { Dialog } from '@alifd/next';
import { DialogProps } from '@alifd/next/types/dialog';

import Operation, { ActionType, OperaitionProps, OperationRef } from './Operation';

const getDialogProps = (actionType: ActionType): string => {
  switch (actionType) {
    case 'add':
    default:
      return '添加员工';

    case 'edit':
      return '编辑员工';

    case 'preview':
      return '预览员工';
  }
};

const DialogOperation: React.FC<OperaitionProps & DialogProps> = (props) => {
  const { actionType, dataSource, onOk = () => {}, ...lastProps } = props;
  const optionRef = useRef<OperationRef>(null);
  
  const handleOk = (event: Event) => {
    if (actionType === 'preview') {
      return onOk(event);
    }
    optionRef.current.getValues((values) => {
      onOk(event);
    });
  }

  return (
    <Dialog
      shouldUpdatePosition
      isFullScreen
      title={getDialogProps(actionType)}
      style={{ width: 600 }}
      footerAlign="center"
      {...lastProps}
      onOk={handleOk}
    >
      <Operation ref={optionRef} actionType={actionType} dataSource={dataSource} />
    </Dialog>
  );
}

export default DialogOperation;