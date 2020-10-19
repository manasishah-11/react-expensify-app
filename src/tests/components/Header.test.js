import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import Header from '../../components/Header.js';

test('should render header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
});
