import React, { Component } from 'react';
import { Input, Grid, Select, Button, DatePicker, Form } from '@alifd/next';
import moment from 'moment';

const { Row, Col } = Grid;
const { Option } = Select;
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {fixedSpan: 4},
};

export default class Filter extends Component {
  static displayName = 'Filter';

  render() {
    return (
      <Form
        value={this.props.value}
        onChange={this.props.onChange}
      >
        <div>
          <Row wrap>
            <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <FormItem {...formItemLayout} label="所属应用" >
                <Input name="app" style={styles.filterTool}/>
              </FormItem>
            </Col>
            <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <FormItem {...formItemLayout}  label="分类ID" >
                <Input name="id" style={styles.filterTool}/>
              </FormItem>
            </Col>
            <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <FormItem {...formItemLayout} label="标签ID" >
                <Input name="tag" style={styles.filterTool}/>
              </FormItem>
            </Col>
            <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <FormItem {...formItemLayout} label="开始时间" >
                <DatePicker name="startTime" style={styles.filterTool} />
              </FormItem>
            </Col>
            <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <FormItem {...formItemLayout} label="结束时间" >
                <DatePicker name="endTime" style={styles.filterTool} />
              </FormItem>
            </Col>
            <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <FormItem {...formItemLayout} label="尺寸" >
                <Select
                  name="size"
                  placeholder="请选择"
                  style={styles.filterTool}
                >
                  <Option value="small">Small</Option>
                  <Option value="medium">Medium</Option>
                  <Option value="large">Large</Option>
                </Select>
              </FormItem>
            </Col>
            <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <FormItem {...formItemLayout} label="删除状态" >
                <Select name="status" style={styles.filterTool}>
                  <Option value="success">成功</Option>
                  <Option value="failed">失败</Option>
                </Select>
              </FormItem>
            </Col>
            <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <FormItem {...formItemLayout} label="讨论ID" >
                <Input name="commentId" style={styles.filterTool}/>
              </FormItem>
            </Col>
            <Col xxs={24} xs={12} l={8} style={styles.filterCol}>
              <FormItem {...formItemLayout} label="置顶" >
                <Select
                  name="isStick"
                  placeholder="请选择"
                  style={styles.filterTool}
                >
                  <Option value="all">不限</Option>
                  <Option value="stick">置顶</Option>
                  <Option value="not-stick">不置顶</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
          <div
            style={{
              textAlign: 'left',
              marginLeft: '12px',
            }}
          >
            <Form.Reset onClick={this.props.onReset} type="normal">
              重置
            </Form.Reset>
            <Form.Submit
              onClick={this.props.onSubmit}
              type="primary"
              style={{ marginLeft: '10px' }}
            >
              确定
            </Form.Submit>
          </div>
        </div>
      </Form>
    );
  }
}

const styles = {
  filterCol: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },

  filterTitle: {
    width: '68px',
    textAlign: 'right',
    marginRight: '12px',
    fontSize: '14px',
  },

  filterTool: {
    width: '200px',
  },
};
