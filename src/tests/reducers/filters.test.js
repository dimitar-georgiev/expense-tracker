/**
 * Created by Mitaka on 24-Nov-17.
 */
import moment from 'moment';
import filterReducers from '../../reducers/filters';

test('default filter values', () => {
    const state = filterReducers(undefined, {type: '@@INIT'});

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('sort by amount', () => {
    const state = filterReducers(undefined, {type: 'SORT_BY_AMOUNT'});

    // expect(state).toEqual({
    //     text: '',
    //     sortBy: 'amount',
    //     startDate: moment().startOf('month'),
    //     endDate: moment().endOf('month')
    // });

    expect(state.sortBy).toBe('amount');
});

test('sort by date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    const action = {type: 'SORT_BY_DATE'};

    const state = filterReducers(currentState, action);

    expect(state.sortBy).toBe('date');
});

test('set text', () => {
    const state = filterReducers(undefined, {type: 'SET_TEXT_FILTER', text: 'test text'});

    expect(state.text).toBe('test text');
});

test('set startDate', () => {
    const state = filterReducers(undefined, {type: 'SET_START_DATE', date: moment(1000)});

    expect(state.startDate).toEqual(moment(1000));
});

test('set endDate', () => {
    const state = filterReducers(undefined, {type: 'SET_END_DATE', date: moment(5000)});

    expect(state.endDate).toEqual(moment(5000));
});