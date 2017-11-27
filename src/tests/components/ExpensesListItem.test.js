/**
 * Created by Mitaka on 26-Nov-17.
 */
import React from 'react';
import {shallow} from 'enzyme';
import ExpensesListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('render ExpenseListItem', () => {
    const wrapper = shallow(<ExpensesListItem {...expenses[0]}/>);

    expect(wrapper).toMatchSnapshot();
});