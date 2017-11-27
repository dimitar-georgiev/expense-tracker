/**
 * Created by Mitaka on 24-Nov-17.
 */
import expensesReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('default', () => {

    const state = expensesReducers(undefined, {type: '@@INIT'});

    expect(state).toEqual([]);
});

test('remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducers(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('shouldn\'t remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '115'
    };

    const state = expensesReducers(expenses, action);

    expect(state).toEqual(expenses);
});

test('add expense', () => {
    const expense = {
        id: '88af',
        description: 'Test description',
        amount: 5588,
        note: 'Test Note',
        createdAt: 787
    };

    const action = {
        type: 'ADD_EXPENSE',
        expense
    };

    const state = expensesReducers(expenses, action);

    expect(state).toEqual([...expenses, expense]);
});

test('edit expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            amount: 171,
        }
    };

    const state = expensesReducers(expenses, action);

    expect(state[0].amount).toBe(171);
});

test('should not edit expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-888',
        updates: {
            amount: 111,
        }
    };

    const state = expensesReducers(expenses, action);

    expect(state).toEqual(expenses);
});