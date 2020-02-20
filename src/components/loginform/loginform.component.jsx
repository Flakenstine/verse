import React from 'react'

import './loginform.component.scss'
import '../../styles/_theme.scss'
import EmailField from './EmailField';
import FormField from '../FormField';

import verseLogo from '../../images/verse-logo-gold.png'

const apiUtil = require('../../utils/apiUtil');

class LoginForm extends React.Component {

    state = { email: "", password: "", hasError: false, error: "" }

    fieldValueChanged = (field) => state => this.setState({ [field]: state.value });

    emailChanged = this.fieldValueChanged('email');
    passwordChanged = this.fieldValueChanged('password');

    handleLogin = (e) => {
        e.preventDefault();

        const email = this.state.email;
        const password = this.state.password;

        if (email.length !== 0 || password.length !== 0) {
            apiUtil.handleLogin(email, password, (error, response) => {
                if (error) {
                    this.setState({ hasError: true, error: response.result });
                } else {
                    if (response.data.success) {
                        this.props.logUserIn(response.data.authToken, response.data.userId);
                    } else {
                        this.setState({ hasError: true, error: "Login credentials are invalid" })
                    }
                }
            });
        } else {
            this.setState({ hasError: true, error: "Email and Password are required!" });
        }
    }

    render() {
        return (
            <div className="loginArea">
                <div className="bg-image"></div>
                <div className="login--wrapper">
                    <div className="card">
                        <div className="card-header">
                            <img className="verseLogo" src={verseLogo}></img>
                            <p className="signInText">Sign in or create an account</p>
                        </div>
                        <div className="card-body">
                            <form noValidate onSubmit={this.handleLogin}>
                                <div className="emailArea">
                                    <label htmlFor="email">Email</label>
                                    <EmailField className="user-input" fieldId="email" placeholder="" onStateChanged={this.emailChanged} required />
                                </div>

                                <div className="passwordArea">
                                    <label htmlFor="password">Password</label>
                                    <FormField className="user-input" type="password" fieldId="password" placeholder="" onStateChanged={this.passwordChanged} required />
                                </div>
                                <p className="forgotp">Forgotten Password?</p>

                                <div className="loginButton">
                                    <input type="submit" value="Login"/>
                                </div>

                                <p className="createAccount">Need an account?<a> Click here!</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm
