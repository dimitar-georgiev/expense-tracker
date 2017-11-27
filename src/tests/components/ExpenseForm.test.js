/**
 * Created by Mitaka on 26-Nov-17.
 */
import React from 'react';
import moment from 'moment';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';


test('render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
});

test('render ExpenseForm with data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);

    expect(wrapper).toMatchSnapshot();
});

test('render error for invalid submission', () => {
    const wrapper = shallow(<ExpenseForm/>);

    expect(wrapper).toMatchSnapshot();

    wrapper.find('form').simulate('submit', {
        preventDefault : () => {}
    });

    expect(wrapper.state('error').length).toBeGreaterThan(0);

    expect(wrapper).toMatchSnapshot();
});

test('set description on input change', () => {
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm/>);

    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    });

    expect(wrapper.state('description')).toBe(value);
});

test('set note on text area change', () => {
    const value = 'New note';
    const wrapper = shallow(<ExpenseForm/>);

    wrapper.find('textarea').simulate('change', {
        target: {value}
    });

    expect(wrapper.state('note')).toBe(value);
});

test('set amount with valid value', () => {
    const value = '77.85';
    const wrapper = shallow(<ExpenseForm/>);

    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    });

    expect(wrapper.state('amount')).toBe(value);
});

test('set amount with invalid value', () => {
    const value = '77.85857';
    const wrapper = shallow(<ExpenseForm/>);

    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    });

    expect(wrapper.state('amount')).toBe('');
});

test('call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();

    const wrapper = shallow(<ExpenseForm expense={expenses[1]} onSubmit={onSubmitSpy}/>);

    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });

    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenCalledWith({
        description: expenses[1].description,
        note: expenses[1].note,
        amount: expenses[1].amount,
        createdAt: expenses[1].createdAt
    });
});


//Next two don't work - need additional consideration
// test('set new date on date change', () => {
//     const now = moment();
//     const wrapper = shallow(<ExpenseForm/>);
//
//     wrapper.find('SingleDatePicker').prop('onDateChange')(now);
//
//     expect(wrapper.state('createdAt')).toEqual(now);
// });
//
// test('set focus value when onFocusChange called', () => {
//     const focus = true;
//     const wrapper = shallow(<ExpenseForm/>);
//
//     wrapper.find('SingleDatePicker').prop('onFocusChange')({focus});
//
//     expect(wrapper.state('calendarFocused')).toBe(focus);
// });