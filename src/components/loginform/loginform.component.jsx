import React, { Component } from 'react';
import FormField from '../FormField';
import EmailField from './EmailField';
import Axios from 'axios';

const apiUtil = require('../../utils/apiUtil');

class LoginForm extends Component {

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
					this.setState({hasError: true, error: response.result});
				} else {
					if (response.data.success) {
						this.props.logUserIn(response.data.authToken, response.data.userId);
					} else {
						this.setState({hasError: true, error: "Login credentials are invalid"})
					}
				}
			});
		} else {
			this.setState({hasError: true, error: "Email and Password are required!"});
		}
	}

	render() {
		return (
			<div>
				<div className="form-container d-table-cell position-relative align-middle login-form">
				{ this.state.hasError && <div className="alert alert-danger">{this.state.error}</div> }
				<form noValidate onSubmit={this.handleLogin}>
					<div className="py-5 border-gray border-top border-bottom">
						<EmailField fieldId="email" label="Email" placeholder="" onStateChanged={this.emailChanged} required />
						<FormField type="password" fieldId="password" label="Password" placeholder="" onStateChanged={this.passwordChanged} required />
						<button type="submit" className="btn btn-primary text-uppercase px-3 py-2">Login</button>
					</div>
				</form>
				</div>
			</div>
		)
	}
}

export default LoginForm
