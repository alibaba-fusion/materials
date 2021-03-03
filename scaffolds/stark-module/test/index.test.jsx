import React from 'react';
import { shallow } from 'enzyme';
import IcestarkModuleExample from '../src/index';
import '../src/main.scss';

it('renders', () => {
  const wrapper = shallow(<IcestarkModuleExample />);
  expect(wrapper.find('.IcestarkModuleExample').length).toBe(1);
});
