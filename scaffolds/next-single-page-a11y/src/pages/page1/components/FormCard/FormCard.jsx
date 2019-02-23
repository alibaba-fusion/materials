/* eslint react/no-string-refs:0 */
import React, { Component } from 'react'

import {
  Form,
  Input,
  Checkbox,
  Radio,
  Select,
  Range,
  Balloon,
  DatePicker,
  TimePicker,
  NumberPicker,
  Field,
  Switch,
  Grid,
  Icon
} from '@alifd/next'

import styles from './index.module.scss'
import './index.scss'

const FormItem = Form.Item
const Option = Select.Option
const RangePicker = DatePicker.RangePicker
const { Row, Col } = Grid

const formItemLayout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 14 }
}

const label = (
  <span>
    <Balloon
      type='primary'
      align="rt"
      trigger={<Icon type='prompt' size='small' style={{ margin: '0 5px' }} />}
      closable={false}
    >
      blablablablablablablabla
    </Balloon>
  </span>
)

export default class FormCard extends Component {
  field = new Field(this)

  handleSubmit(value) {
    console.log('Form values：', value)
  }

  render() {
    const init = this.field.init

    return (
      <Form
        {...formItemLayout}
        field={this.field}
        className={styles.formWrapper}
      >
        <FormItem label='Password:'>
          <div>
            <Input htmlType='password' {...init('pass')} />
            {label}
          </div>
        </FormItem>

        <FormItem label='NumberPicker:'>
          <NumberPicker upBtnProps={{ 'aria-label': 'increasing button' }} downBtnProps={{ 'aria-label': 'decreasing button' }} min={1} max={10} name='numberPicker' defaultValue={3} />
        </FormItem>

        <FormItem label='Switch:' required>
          <Switch name='switch' defaultChecked />
        </FormItem>

        <FormItem label='Range:' required>
          <Range
            defaultValue={30}
            scales={[0, 100]}
            marks={[0, 100]}
            name='range'
          />
        </FormItem>

        <FormItem label='Select:' required>
          <Select style={{ width: 200 }} name='select'>
            <Option value='jack' >jack</Option>
            <Option value='lucy' >lucy</Option>
            <Option value='disabled' disabled>
              disabled
            </Option>
            <Option value='hugohua'>hugohua</Option>
          </Select>
        </FormItem>

        <FormItem label='DatePicker:' required>
          <Row>
            <FormItem>
              <DatePicker aria-label="请按照YYYY-MM-DD格式输入日期" name='date' />
            </FormItem>
          </Row>
        </FormItem>

        <FormItem label='RangePicker:' required>
          <RangePicker aria-label="请按照YYYY-MM-DD格式输入日期" name='rangeDate' />
        </FormItem>

        <FormItem label='TimePicker:' required>
          <TimePicker aria-label="请按照HH-MM-SS格式输入时间" onChange={(val) => console.log(val)} />
        </FormItem>

        <FormItem label='Checkbox:'>
          <Checkbox.Group name='checkbox'>
            <Checkbox value='a'>option 1 </Checkbox>
            <Checkbox value='b'>option 2 </Checkbox>
            <Checkbox aria-label="无法勾选" disabled value='c'>
              {' '}
              option 3
            </Checkbox>
          </Checkbox.Group>
        </FormItem>

        <FormItem label='Radio:'>
          <Radio.Group name='radio'>
            <Radio value='apple'>apple</Radio>
            <Radio value='banana'>banana</Radio>
            <Radio disabled value='cherry'>
              cherry
            </Radio>
          </Radio.Group>
        </FormItem>
        <Row style={{ marginTop: 24 }}>
          <Col offset='3'>
            <Form.Submit aria-label="submit button" type='primary' onClick={this.handleSubmit.bind(this)}>
              Submit
            </Form.Submit>
          </Col>
        </Row>
      </Form>
    )
  }
}
