import React from 'react';
import ReactDOM from 'react-dom';
import {startLogout} from '../actions/auth.js';
import {connect} from 'react-redux';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

export const Header = ({startLogout}) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard </NavLink>
        <NavLink to="/create" activeClassName="is-active">Add Expense </NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        <button onClick={startLogout}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);