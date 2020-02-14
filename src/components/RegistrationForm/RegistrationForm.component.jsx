import React, { Component } from "react";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";


class RegistrationForm extends Component {

    state = { email: false, password: false }

    fieldsStateChanged = (field) => state => this.setState({ [field]: state.errors.length === 0 });

    emailChanged = this.fieldsStateChanged('email');
    passwordChanged = this.fieldsStateChanged('password');

    render() {
        const { email, password } = this.state;
        const formValidated = email && password;

        return(
            <div className="form-container d-table-cell position-relative align-middle">
                <form onSubmit={e => e.preventDefault()} noValidate>
                    <div className="d-flex flex-row justify-content-between align-items-center px-3 mb-5">
                        <legend className="form-label mb-0">Create an Account</legend>
                    </div>

                    <div className="py-5 border-gray border-top border-bottom">
                        <EmailField fieldId="email" label="Email" placeholder="" onStateChanged={this.emailChanged} required />
                        <PasswordField fieldId="password" label="Password" placeholder="" onStateChanged={this.passwordChanged} thresholdLength={7} minStrength={3} required />
                    </div>
                    <button type="submit" disabled={formValidated} className="btn btn-primary text-uppercase px-3 py2">Register</button>
                </form>
            </div>
        );

    }
} 


export default RegistrationForm;
