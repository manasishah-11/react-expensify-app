import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRoute, {history} from './routes/AppRouter.js';
import configureStore from './store/configureStore.js';
import {startSetExpenses} from './actions/expenses.js';
import {login, logout} from './actions/auth.js';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import {firebase} from './firebase/firebase.js';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRoute />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if(history.location.pathname === '/'){
                history.push('/dashboard');
            }
        });
    }
    else{
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});

