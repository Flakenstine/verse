import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import LoginForm from '../../components/LoginForm/'
import RegistrationForm from '../../components/RegistrationForm';

import './styles.scss';

const RedirectForm = () => {
    return <Redirect to='/login' />;
}

const LoginComponent = (props) => {
    const loginFunction = props.logUserIn;

    if (!props.visible) return '';
    return (
        <div className="loginContainer">
            <div className="bg-image"></div>
            <div className="mainArea">
                <Switch>
                    <Route key={'redirect'} path='/' exact component={RedirectForm} />
                    <Route key={'login'} path='/login' exact render={(props) => <LoginForm {...props} logUserIn={loginFunction} />} />
                    <Route key={'register'} path='/register' exact component={RegistrationForm} />
                </Switch>
            </div>
        </div>
    );
}

export default LoginComponent;
