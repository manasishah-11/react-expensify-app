import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRoute from './routes/AppRouter.js';
import configureStore from './store/configureStore.js';
import {addExpense, removeExpense, editExpense} from './actions/expenses.js';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from './actions/filters.js';
import getVisibleExpenses from './selectors/expenses.js';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss'


const store = configureStore();
store.dispatch(addExpense({description : 'Water bill', amount: 4500}));
store.dispatch(addExpense({description : 'Gas bill', amount: 3000, createdAt: 1000}));
store.dispatch(addExpense({description : 'Rent', amount: 109500}));

const state = store.getState();
const visibeExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibeExpenses);

const jsx = (
    <Provider store={store}>
        <AppRoute />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));