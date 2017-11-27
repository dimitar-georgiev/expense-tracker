/**
 * Created by Mitaka on 13-Nov-17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import expensesSelector from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();

    const selector = expensesSelector(state.expenses, state.filters);

    console.log(selector);
    console.log(state);
    // console.log(store.getState());
});

store.dispatch(addExpense({description: 'Water Bill', amount: 4500}));
store.dispatch(addExpense({description: 'Gas Bill', createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 110000}));

// store.dispatch(setTextFilter('water'));
//
// setTimeout(() => {
//     store.dispatch(setTextFilter('gas'));
// }, 3000);

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));