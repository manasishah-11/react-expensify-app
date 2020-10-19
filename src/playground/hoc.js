import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return(props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
}
const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
    return(props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please log in to view the info.</p>}
        </div>
    );
};
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo info="This is some info" isAdmin={true} />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="This is some info"/>, document.getElementById('app'));