import React from 'react';

import {
  Form,
  Input,
  Select,
  Radio,
  Checkbox,
  DatePicker,
  Switch,
  Upload,
  Grid,
  Field,
} from '@alifd/next';

const RadioGroup = Radio.Group;
const { Row, Col } = Grid;
const FormItem = Form.Item;
const Option = Select.Option;

import './index.scss';

const formItemLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};

export default class Register extends React.Component {
  state = {
    size: 'medium',
    textTip: '',
  };

  changeHandle = (v, event) => {
    const sign = event.target.name || event.target.id;

    if (sign && ['username', 'remark'].includes(sign)) {
      if (!v) {
        console.log(true);
        this.setState({ textTip: '不能为空，请输入有效字符' });
      } else {
        console.log(false);

        const ariaText =
          '您输入的内容为:' +
          (!v ? '' : v) +
          '共' +
          (!v ? 0 : v.length) +
          '字符';
        this.setState({ textTip: ariaText });
      }
    } else if (sign && ['password', 'repassword'].indexOf(sign) !== -1) {
      if (!v) {
        this.setState({ textTip: '密码不能为空，请输入有效字符' });
      } else {
        const ariaText = '输入密码共' + (!v ? 0 : v.length) + '字符';
        this.setState({ textTip: ariaText });
      }
    } else if (event.target.type == 'checkbox') {
      const ariaText =
        v.length === 0 ? '您没有选择语言' : '您选择的语言为:' + v.join(',');
      this.setState({ textTip: ariaText });
    }
  };

  changeDateHandle = v => {
    if (v && typeof v === 'object') {
      const ariaText = '输入日期为' + v.format('YYYY/MM/DD');
      this.setState({ textTip: ariaText });
    } else if (!v) {
      const ariaText = '日期不能为空，请输入有效日期';
      this.setState({ textTip: ariaText });
    }
  };

  submitHandle = e => {
    console.log(e);
  };

  render() {
    return (
      <div class="page">
        <Form {...formItemLayout} size={this.state.size}>
          <h2 className="whale-page-title" tabIndex="0">
            注册
          </h2>

          <FormItem required label="username:" aria-describedby="aria">
            <Input
              placeholder="Please enter your user name"
              name="username"
              onChange={this.changeHandle}
              style={{ width: '300px' }}
            />
          </FormItem>

          <FormItem required label="password:" aria-describedby="aria">
            <Input
              htmlType="password"
              placeholder="Please enter your password"
              id="password"
              name="password"
              onChange={this.changeHandle}
              style={{ width: '300px' }}
            />
          </FormItem>

          <FormItem required label="again password:" aria-describedby="aria">
            <Input
              htmlType="password"
              placeholder="Please again enter your password"
              id="repassword"
              name="repassword"
              onChange={this.changeHandle}
              style={{ width: '300px' }}
            />
          </FormItem>

          <FormItem
            required
            label="date(YYYY/MM/DD):"
            aria-describedby="aria"
            requiredMessage="Please select your date"
          >
            <DatePicker
              name="date"
              format="YYYY/MM/DD"
              inputProps={{
                'aria-required': 'true',
                'aria-label': '按下Enter键，按照YYYY/MM/DD格式输入日期',
              }}
              onChange={this.changeDateHandle}
            />
          </FormItem>

          <FormItem label="Switch:">
            <Switch name="switch" aria-label="Switch" defaultChecked />
          </FormItem>

          <FormItem
            required
            label="gender:"
            requiredMessage="Please select your gender"
          >
            <RadioGroup name="sex">
              <Radio value="male" aria-required="true">
                Male
              </Radio>
              <Radio value="female" aria-required="true">
                Female
              </Radio>
            </RadioGroup>
          </FormItem>

          <FormItem label="Language:">
            <Checkbox.Group
              name="langs"
              id="langs"
              aria-label="Please select a programming language"
              onChange={this.changeHandle}
            >
              <Checkbox value="python">python</Checkbox>
              <Checkbox value="java">java</Checkbox>
              <Checkbox value="angular">angular</Checkbox>
              <Checkbox value="c">c</Checkbox>
              <Checkbox value="other">other</Checkbox>
            </Checkbox.Group>
          </FormItem>

          <FormItem label="upload:">
            <Upload.Card
              listType="card"
              action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
              accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
              defaultValue={[]}
              limit={2}
              name="upload"
            />
          </FormItem>

          <FormItem label="Note:" aria-describedby="aria">
            <Input.TextArea
              placeholder="description"
              name="remark"
              onChange={this.changeHandle}
              style={{ width: '500px' }}
            />
          </FormItem>

          <FormItem label=" ">
            <span id="aria" aria-live="polite">
              <span aria-label={this.state.textTip} />
            </span>
            <Form.Submit
              validate
              type="primary"
              onClick={this.submitHandle}
              style={{ marginRight: 3 }}
            >
              Submit
            </Form.Submit>
            <Form.Reset style={{ marginLeft: 100 }}>Reset</Form.Reset>
          </FormItem>
        </Form>
      </div>
    );
  }
}
