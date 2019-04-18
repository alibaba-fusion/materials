import React, { Component } from 'react';
import { Form, Input, Grid, DatePicker } from '@alifd/next';

const FormItem = Form.Item;
const { Row, Col } = Grid;
const { RangePicker } = DatePicker;

const style = {
  padding: '20px 10px 5px 10px',
  background: '#F7F8FA',
  margin: '10px',
  borderRadius: '20px',
};
const formItemLayout = {
  labelCol: { span: 6 },
};

export default class SearchTable extends Component {
  static displayName = 'SearchTable';

  static defaultProps = {};

  submitHandle(v) {
    console.log(v);
  }

  render() {
    return (
      <div
        style={{ backgroundColor: 'white', outline: 'none' }}
        aria-label="表单搜索"
        tabIndex="0"
      >
        <Form style={style}>
          <Row>
            <Col offset="1" span="5">
              <FormItem {...formItemLayout} label="标题:">
                <Input
                  placeholder="请输入搜索标题"
                  aria-label="please enter title"
                />
              </FormItem>
            </Col>
            <Col span="6">
              <FormItem {...formItemLayout} label="日期:">
                <RangePicker
                  inputProps={{ 'aria-label': '日期' }}
                  onChange={item => console.log(item)}
                  style={{ width: '80%' }}
                />
              </FormItem>
            </Col>

            <Col span="2">
              {/* <Button type="primary" style={{ marginRight: '5px' }}>Search</Button> */}
              <FormItem label=" " {...formItemLayout}>
                <Form.Submit
                  validate
                  type="primary"
                  onClick={this.submitHandle}
                >
                  搜索
                </Form.Submit>
              </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
