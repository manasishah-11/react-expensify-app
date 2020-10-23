import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import expenseReducer from '../reducers/expenses.js';
import filterReducer from '../reducers/filters.js';
import authReducer from '../reducers/auth.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expenseReducer,
            filters: filterReducer,
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};


