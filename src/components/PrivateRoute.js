import React from 'react';
import {Route} from 'react-router-dom';
import withAuth from './withAuth.js';
import {Redirect} from 'react-router-dom';

function PrivateRoute(props) {
    const {isLoggedIn, component: Component, ...rest} = props;
    return (
        <>
            {isLoggedIn ? <Route render={() => {
                return <Component />
            }}
            {...rest}
            /> : <Redirect to='/login' />}
        </>
    );
}

export default withAuth(PrivateRoute);
