import React, { Component } from 'react';
import FormField from '../FormField';
import EmailField from './EmailField';
import Axios from 'axios';

const electron = window.require('electron');
const Store = electron.remote.require('./storage/store.js');
const userAuthStore = new Store({ configName: 'auth' });


class LoginForm extends Component {

	state = { email: "", password: "", hasError: false, error: "" }

	fieldValueChanged = (field) => state => this.setState({ [field]: state.value });

	emailChanged = this.fieldValueChanged('email');
	passwordChanged = this.fieldValueChanged('password');


	handleLogin = () => {
		const email = this.state.email;
		const password = this.state.password;
		if (email.length !== 0 || password.length !== 0 ) {
			Axios.post('https://api.palaceinteractive.com/users/login', {
				email,
				password
			}).then((result) => {
				if (result.data.success) {
					userAuthStore.set("authToken", result.data.authToken)
					const app = electron.remote.app
					app.relaunch();
					app.exit();
				} else {
					this.setState({hasError: true, error: "Login credentials are invalid"})
				}
			}).catch((error) => {
				this.setState({hasError: true, error: error.result});
			})
		} else {
			this.setState({hasError: true, error: "Email and password are required"});
		}
	}


	render() {
		return (
			<div className="main-container">
				{ this.state.hasError && <div className="alert alert-danger">{this.state.error}</div> }
				<div className="form-container d-table-cell position-relative align-middle">
				<form noValidate onSubmit={e => {e.preventDefault(); this.handleLogin()}}>
					<div className="d-flex flex-row justify-content-between align-items-center px-3 mb-3">
						<legend className="form-label mb-0">Welcome to Verse!</legend>
					</div>
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


// import React from 'react'

// import './loginform.component.scss'
// import '../../styles/_theme.scss'

// const electron = window.require('electron');
// const Store = electron.remote.require('./storage/store.js');
// const userAuthStore = new Store({ configName: 'auth' });

// class LoginForm extends React.Component {

//   handleLogin = () => {
//       userAuthStore.set("authToken", "abcde");
//       const app = electron.remote.app;
//       app.relaunch();
//       app.exit();
//   };

//   handleRegister = () => {
//   };

//   render() {

//     return (
//         <div>
//             <form style={Object.assign({margin:'auto'})} onSubmit={e => {e.preventDefault(); this.handleLogin()}}>
//                 <h4>Login</h4>
//                 <div>
//                     <h5>Email</h5>
//                     <div>
//                         <input name="" type="email" placeholder="" aria-label="Email" autoComplete="off" maxLength="999" spellCheck="false" />
//                     </div>
//                 </div>
//                 <div>
//                     <h5>Password</h5>
//                     <div>
//                         <input name="" type="password" placeholder="" aria-label="Password" autoComplete="off" maxLength="999" spellCheck="false" />
//                     </div>
//                 </div>
//                 <button type="submit">
//                     <div>Login</div>
//                 </button>
//             </form>

//             <form style={Object.assign({margin:'auto'})} onSubmit={e => {e.preventDefault(); this.handleRegister()}}>
//                 <h4>Register</h4>
//                 <div>
//                     <h5>Email</h5>
//                     <div>
//                         <input name="" type="email" placeholder="" aria-label="Email" autoComplete="off" maxLength="999" spellCheck="false" />
//                     </div>
//                 </div>
//                 <div>
//                     <h5>Password</h5>
//                     <div>
//                         <input name="" type="password" placeholder="" aria-label="Password" autoComplete="off" maxLength="999" spellCheck="false" />
//                     </div>
//                 </div>
//                 <div>
//                     <h5>Confirm Password</h5>
//                     <div>
//                         <input name="" type="password" placeholder="" aria-label="Confirm Password" autoComplete="off" maxLength="999" spellCheck="false" />
//                     </div>
//                 </div>
//                 <button type="submit">
//                     <div>Register</div>
//                 </button>
//             </form>
//         </div>
//     )
//   }
// }

// export default LoginForm
