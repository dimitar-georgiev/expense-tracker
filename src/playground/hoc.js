/**
 * Created by Mitaka on 19-Nov-17.
 */
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>Don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (<WrappedComponent {...props}/>) : (<p>Not Authenticated!</p>)}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

{/*ReactDOM.render(<AdminInfo info="Actual Info" />, document.querySelector('#app'));*/}
ReactDOM.render(<AuthInfo isAuthenticated={false} info="Actual Info" />, document.querySelector('#app'));