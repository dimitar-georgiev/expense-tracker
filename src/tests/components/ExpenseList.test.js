/**
 * Created by Mitaka on 26-Nov-17.
 */
import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseList} from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test('render ExpensesList', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);

    expect(wrapper).toMatchSnapshot();
});

test('print No expenses when no expenses provided', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);

    expect(wrapper).toMatchSnapshot();
});