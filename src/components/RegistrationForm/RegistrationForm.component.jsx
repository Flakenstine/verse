import React, { Component } from "react";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";
import axios from "axios";

import verseLogo from '../../images/verse-logo-gold.png'
import './RegistrationForm.component.scss'

class RegistrationForm extends Component {

    state = { emailValid: false, emailValue: "", passwordValid: false, passwordValue: "", hasError: false, error: "", hasSuccess: false }

    emailStateChanged = (field) => {
        this.setState({ emailValid: field.errors.length === 0, emailValue: field.value });
    }

    passwordStateChanged = (field) => {
        this.setState({ passwordValid: field.errors.length === 0, passwordValue: field.value });
    }

    handleRegister = (e) => {
        e.preventDefault();
        this.setState({ hasError: false });

        const email = this.state.emailValue;
        const password = this.state.passwordValue;

        axios.post('https://api.verseapp.co/v1/users/create', {
            email,
            password
        })
            .then((response) => {
                if (response.status.success) {
                    this.setState({ hasSuccess: true });
                }
            }, (error) => {
                const errorCode = error.response.data.errors[0].code;

                switch (errorCode) {
                    case 2004:
                        this.setState({ hasError: true, error: error.response.data.errors[0].message });
                        break;
                    case 2006:
                        this.setState({ hasError: true, error: error.response.data.errors[0].message });
                        break;
                    default:
                        this.setState({ hasError: true, error: "An unknown error occured while creating an account!" });
                }
            });
    }

    render() {
        const { emailValid, passwordValid } = this.state;
        const formValidated = emailValid && passwordValid;

        return (
            <div>
                {this.state.hasError && <div className="alert alert-danger">{this.state.error}</div>}
                {this.state.hasSuccess && "You have successfully created a verse account! In order to use verse, we will need to verify your account. Please check your registered email for further instructions!"}
                <div className="login--wrapper">
                    <div className="card">
                        <div className="card-header">
                            <img className="verseLogo" src={verseLogo}></img>
                            <legend className="form-label mb-0">Create an Account</legend>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.handleRegister} noValidate>
                                <div className="emailArea">
                                    <EmailField fieldId="email" label="Email" placeholder="" onStateChanged={this.emailStateChanged} required />
                                </div>

                                <div className="passwordArea">
                                    <PasswordField fieldId="password" label="Password" placeholder="" onStateChanged={this.passwordStateChanged} thresholdLength={7} minStrength={3} required />
                                </div>

                                <div className="registerButton">
                                    <button type="submit" disabled={!formValidated} className="btn">Register</button>
                                </div>

                                <div className="accountPresent">
                                    <button class="btn btn-link" type="button" onClick={this.props.toggleLogin}>Already have an account?</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}


export default RegistrationForm;
