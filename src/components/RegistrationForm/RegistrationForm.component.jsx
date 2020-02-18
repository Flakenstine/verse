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
t

     
    handleRegister = (e) => {
        // prevent the form from executing the default action when user submits
        e.preventDefault();

        const email = this.state.emailValue;
        const password = this.state.passwordValue;

        console.log(email);
        console.log(password);

        // prevent the user from submitting if the form inputs are empty
        if (email.length !== 0 && password.length !== 0) {
            axios.post('https://api.verseapp.co/v1/users/create', {
                email,
                password
            })
            .then((response) => {
                if (response.status.success) {
                    console.log(response);
                } else {
                    // error checking will go here
                    console.log("An error occured!");
                }
            }, (error) => {
                console.log(error);
            });
        } else {
            this.setState({hasError: true, error: "A username and password are required to make an account!"});
        }
    } 

    render() {
        const { emailValid, passwordValid} = this.state;
        const formValidated = emailValid && passwordValid;

        return(
            <div className="form-container d-table-cell position-relative align-middle">
                {/* { && "You have successfully created a verse account! In order to use verse, we will need to verify your account. Please check your registered email for further instructions!"} */}
                <form onSubmit={this.handleRegister} noValidate>
                    <div className="d-flex flex-row justify-content-between align-items-center px-3 mb-5">
                        <legend className="form-label mb-0">Create an Account</legend>
                    </div>

                    <div className="py-5 border-gray border-top border-bottom">
                        <EmailField fieldId="email" label="Email" placeholder="" onStateChanged={this.emailStateChanged} required />
                        <PasswordField fieldId="password" label="Password" placeholder="" onStateChanged={this.passwordStateChanged} thresholdLength={7} minStrength={3} required />
                        <button type="submit"  className="btn btn-primary text-uppercase px-3 py2">Register</button>
                    </div>
                </form>
            </div>
        );

    }
} 


export default RegistrationForm;
