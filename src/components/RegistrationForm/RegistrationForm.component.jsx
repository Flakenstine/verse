import React, { Component } from "react";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";
import Axios from "axios";


class RegistrationForm extends Component {

    state = { emailValid: false, emailValue: "", passwordValid: false, passwordValue: "", hasError: false, error: "" }

    emailStateChanged = (field) => {
        this.setState({ emailValid: field.errors.length === 0, emailValue: field.value});
        console.log(this.state.emailValid);
    }

    passwordStateChanged = (field) => {
        this.setState({ passwordValid: field.errors.length === 0, passwordValue: field.value});
        console.log(this.state.passwordValid);
    }

     
    handleRegister = (e) => {
        // prevent the form from executing the default action when user submits
        e.preventDefault();

        const email = this.state.emailValue;
        const password = this.state.passwordValue;

        if ( email.length !== 0 && password.length !== 0 ) {
            Axios.post('https://api.verseapp.co/v1/users/create', {
                email,
                password
            }).then((result)=> {
                // todo: Actually implement proper login logic
                if (result.status.success) {
                    console.log(result);
                    // instead of logging the response here I am going to send the user a message stating that registration was a success and they should check their email for further instructions.
                } else {
                    console.log("There was an error!");
                }
            }).catch((error) => {
                console.log(error.result);
            })
        } else {
            this.setState({hasError: true, error: "A username and password are required to make an account!"});
        }
    } 

    render() {
        const { emailValid, passwordValid} = this.state;
        const formValidated = emailValid && passwordValid;

        return(
            <div className="form-container d-table-cell position-relative align-middle">
                <form onSubmit={this.handleRegister} noValidate>
                    <div className="d-flex flex-row justify-content-between align-items-center px-3 mb-5">
                        <legend className="form-label mb-0">Create an Account</legend>
                    </div>

                    <div className="py-5 border-gray border-top border-bottom">
                        <EmailField fieldId="email" label="Email" placeholder="" onStateChanged={this.emailStateChanged} required />
                        <PasswordField fieldId="password" label="Password" placeholder="" onStateChanged={this.passwordStateChanged} thresholdLength={7} minStrength={3} required />
                        <button type="submit" disabled={!formValidated} className="btn btn-primary text-uppercase px-3 py2">Register</button>
                    </div>
                </form>
            </div>
        );

    }
} 


export default RegistrationForm;
