import {createStore, combineReducers} from 'redux';
import expenseReducer from '../reducers/expenses.js';
import filterReducer from '../reducers/filters.js';

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expenseReducer,
            filters: filterReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}


