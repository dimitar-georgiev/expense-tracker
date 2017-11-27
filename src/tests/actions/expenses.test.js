/**
 * Created by Mitaka on 22-Nov-17.
 */
import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('remove expense', () => {
    const action = removeExpense({id: '123qwerty'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123qwerty'
    });
});

test('edit expense', () => {
    const action = editExpense('123qwerty', {
        note: 'New note'
    });

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123qwerty',
        updates: {
            note: 'New note'
        }
    });
});

test('add expense', () => {
    const action = addExpense({
        description: 'Test description',
        note: 'Test Note',
        amount: 100,
        createdAt: 10000
    });

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: 'Test description',
            note: 'Test Note',
            amount: 100,
            createdAt: 10000
        }
    });
});

test('add expense defaults', () => {
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});