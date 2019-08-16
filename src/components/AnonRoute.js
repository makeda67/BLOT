import React from 'react';
import {Route} from 'react-router-dom';
import withAuth from './withAuth.js';
import {Redirect} from 'react-router-dom';

function AnonRoute(props) {
    const {isLoggedIn, component: Component, ...rest} = props;
    return (
        <>
            {!isLoggedIn ? <Route render={() => {
                return <Component />
            }}
            {...rest}
            /> : <Redirect to='/private' />}
        </>
    );
}

export default withAuth(AnonRoute);
