/**
 * Created by Mitaka on 17-Nov-17.
 */
import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
        type: 'INCREMENT',
        incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count = 0} = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

const store = createStore((state = {count: 0}, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count : action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
});

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 7}));

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 3}));

store.dispatch(setCount({count: 77}));

store.dispatch(resetCount());

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 7
// });
//
// store.dispatch({
//     type: 'DECREMENT'
// });
//
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 3
// });
//
// store.dispatch({
//     type: 'RESET'
// });
//
// store.dispatch({
//     type: 'SET',
//     count: 111
// });