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
            <div>
                <div className="login--wrapper">
                    <div className="card">
                        <div className="card-header">
                            <img className="verseLogo" src={verseLogo}></img>
                            <legend className="form-label mb-0">Sign in or Create an Account</legend>
                        </div>
                        <div className="card-body">
                            <form noValidate onSubmit={this.handleLogin}>
                                <div className="emailArea">
                                    <EmailField label="Email" fieldId="email" placeholder="" onStateChanged={this.emailChanged} required />
                                </div>

                                <div className="passwordArea">
                                    <FormField type="password" label="Password" fieldId="password" placeholder="" onStateChanged={this.passwordChanged} required />
                                </div>
                                
                                <div className="forgotp">
                                    <button class="btn btn-link" type="button">Forgotten Password?</button>
                                </div>

                                <div className="loginButton">
                                    <button type="submit" value="Login">Login</button>
                                </div>

                                <div className="createAccount">
                                    <button class="btn btn-link createAccountButton" type="button" onClick={this.props.toggleLogin}>Create an account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm
