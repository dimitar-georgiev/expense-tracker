/**
 * Created by Mitaka on 23-Nov-17.
 */
import moment from 'moment';
import {setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate} from '../../actions/filters';

test('set start date action object', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    });
});

test('set end date action object', () => {
    const action = setEndDate(moment(0));

    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    });
});

test('set text filter default', () => {
    const action = setTextFilter();

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('set text filter real value', () => {
    const action = setTextFilter('test!@#');

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'test!@#'
    });
});

test('sort by amount', () => {
    const action = sortByAmount();

    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
});

test('', () => {
    const action = sortByDate();

    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
});