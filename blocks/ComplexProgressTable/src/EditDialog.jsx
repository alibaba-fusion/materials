import React, { Component } from 'react';
import { Dialog, Grid, Input, Radio, Range, Form } from '@alifd/next';
import CreateFuncDialog from './CreateFuncDialog';

const { Row, Col } = Grid;
const { Group: RadioGroup } = Radio;
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 }
};

class EditDialog extends Component {
  static displayName = 'EditDialog';

  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible,
      value: props.value,
    };
  }

  // ICE: React Component 的生命周期

  componentWillMount() { }

  componentDidMount() { }

  componentWillReceiveProps() { }

  shouldComponentUpdate() {
    return true;
  }

  componentWillUnmount() { }

  onOk = (values, errors) => {
    console.log('errors', errors, 'values', values);
    if (errors) {
      return false;
    }
    if (typeof this.props.onOk === 'function') {
      this.props.onOk(values);
    }
    // ajax values
  };

  onFormChange = (value) => {
    this.setState({
      value,
    });
  };

  render() {
    return (
      <Dialog
        style={styles.dialog}
        autoFocus={false}
        footerAlign="center"
        title="修改项目进度"
        {...this.props}
        onOk={this.onOk}
        isFullScreen
        visible={this.state.visible}
      >
        <Form
          ref={(ref) => {
            this.refForm = ref;
          }}
          value={this.state.value}
          onChange={this.onFormChange}
        >
          <div style={styles.dialogContent}>
            <FormItem {...formItemLayout} label="项目标题："
              required
              min={2}
              max={26}
              requiredMessage="项目标题必填，且最少 2 个字最多 26 个字"
            >
              <Input
                name="title"
                style={styles.input}
                placeholder="项目标题"
              />
            </FormItem>
            <FormItem {...formItemLayout} label="项目进度：" >
              <Range name="progress" marks={[0, 100]} />
            </FormItem>

            <FormItem {...formItemLayout} label="优先级：" >
              <RadioGroup
                name="priority"
                dataSource={[
                  {
                    value: '高',
                    label: '高',
                  },
                  {
                    value: '中',
                    label: '中',
                  },
                  {
                    value: '低',
                    label: '低',
                  },
                ]}
              />
            </FormItem>

          </div>
        </Form>
      </Dialog>
    );
  }
}

const styles = {
  dialog: {
    width: '640px',
  },
  dialogContent: {},
  formRow: {
    marginTop: 20,
  },
  input: {
    width: '100%',
  },
  progressWrapper: {
    marginTop: '10px',
  },
  formLabel: {
    lineHeight: '26px',
    textAlign: 'right',
    display: 'inline-block',
  },
};

export default CreateFuncDialog(EditDialog);
