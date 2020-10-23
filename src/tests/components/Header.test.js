import React from 'react';
import {shallow} from 'enzyme';
import{ Header} from '../../components/Header.js';
import { startLogin } from '../../actions/auth.js';

test('should render header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => {}} />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startlogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});
