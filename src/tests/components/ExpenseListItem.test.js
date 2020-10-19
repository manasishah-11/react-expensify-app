import ExpenseListItem from '../../components/ExpenseListItem.js';
import {shallow} from 'enzyme';
import React from 'react';
import expenses from '../fixtures/expenses.js';

test('should render list item correctly', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});
