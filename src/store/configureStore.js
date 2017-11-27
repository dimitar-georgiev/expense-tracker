/**
 * Created by Mitaka on 19-Nov-17.
 */
import {createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {

    return createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}