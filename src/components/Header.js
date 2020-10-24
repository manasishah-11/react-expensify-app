import React from 'react';
import ReactDOM from 'react-dom';
import {startLogout} from '../actions/auth.js';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export const Header = ({startLogout}) => (
    <header className="header">
    <div className="content-container">
        <div className="header__content">
            <Link to="/dashboard" className="header__title">
                <h1>Expensify</h1>
            </Link>
            <button onClick={startLogout} className="button button--link">Logout</button>
        </div>
    </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);