import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRoute from './routes/AppRouter.js';
import configureStore from './store/configureStore.js';
import {addExpense, removeExpense, editExpense} from './actions/expenses.js';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from './actions/filters.js';
import getVisibleExpenses from './selectors/expenses.js';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import './firebase/firebase.js';


const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRoute />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));