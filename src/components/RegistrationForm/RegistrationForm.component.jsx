import React, { Component } from "react";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";
import axios from "axios";
import { faTrafficLightSlow } from "@fortawesome/pro-regular-svg-icons";


class RegistrationForm extends Component {

    state = { emailValid: false, emailValue: "", passwordValid: false, passwordValue: "", hasError: false, error: "", hasSuccess: false  }

    emailStateChanged = (field) => {
        this.setState({ emailValid: field.errors.length === 0, emailValue: field.value});
    }

    passwordStateChanged = (field) => {
        this.setState({ passwordValid: field.errors.length === 0, passwordValue: field.value});
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

            switch(errorCode) {
                case 2004:
                    this.setState({ hasError: true, error: error.response.data.errors[0].message});
                    break;
                case 2006:
                    this.setState({ hasError: true, error: error.response.data.errors[0].message});
                    break;
                default:
                    this.setState({hasError: true, error: "An unknown error occured while creating an account!"});
            }
        });
    } 

    render() {
        const { emailValid, passwordValid} = this.state;
        const formValidated = emailValid && passwordValid;

        return(
            <div className="form-container d-table-cell position-relative align-middle">
                { this.state.hasError && <div className="alert alert-danger">{ this.state.error }</div> }
                { this.state.hasSuccess && "You have successfully created a verse account! In order to use verse, we will need to verify your account. Please check your registered email for further instructions!" }
                <form onSubmit={this.handleRegister} noValidate>
                    <div className="d-flex flex-row justify-content-between align-items-center px-3 mb-5">
                        <legend className="form-label mb-0">Create an Account</legend>
                    </div>

                    <div className="py-5 border-gray border-top border-bottom">
                        <EmailField fieldId="email" label="Email" placeholder="" onStateChanged={this.emailStateChanged} required />
                        <PasswordField fieldId="password" label="Password" placeholder="" onStateChanged={this.passwordStateChanged} thresholdLength={7} minStrength={3} required />
                        <button type="submit" disabled={!formValidated}  className="btn btn-primary text-uppercase px-3 py2">Register</button>
                    </div>
                </form>
            </div>
        );

    }
} 


export default RegistrationForm;
