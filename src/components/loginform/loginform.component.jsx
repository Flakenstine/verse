import React, { Component } from 'react';
import FormField from '../FormField';
import EmailField from './EmailField';
import Axios from 'axios';


class LoginForm extends Component {

	state = { email: "", password: ""}

	fieldValueChanged = (field) => state => this.setState({ [field]: state.value});

	emailChanged = this.fieldValueChanged('email');
	passwordChanged = this.fieldValueChanged('password');


	handleLogin = () => {
		const email = this.state.email;
		const password = this.state.password;
		Axios.post("https://api.palaceinteactive.com/users/login", {
			email,
			password
		}).then(result => {
			if (result.data.sucess) {

			}
		}).catch((error) => {
			
		})
	}


	render() {
		return (
			<div className="form-container d-table-cell position-relative align-middle">
				<form noValidate onSubmit={e => {e.preventDefault(); this.handleLogin()}}>
					<div className="d-flex flex-row justify-content-between align-items-center px-3 mb-3">
						<legend className="form-label mb-0">Welcome back!</legend>
					</div>
					<div className="py-5 border-gray border-top border-bottom">
						<EmailField fieldId="email" label="Email" placeholder="" onStateChanged={this.emailChanged} required />
						<FormField type="text" fieldId="password" label="Password" placeholder="" onStateChanged={this.passwordChanged} required />
						<button type="button" className="btn btn-primary text-uppercase px-3 py-2" onClick={this.handleLogin()}>Login</button>
					</div>
				</form>
			</div>
		)
	}


		// handleLogin = () => {
		// 	console.log(FormField);
		// }
}

export default LoginForm

// import React, { useState } from 'react';
// import axios from 'axios';

// import './loginform.component.scss';
// import '../../styles/_theme.scss';

// const electron = window.require('electron');
// const Store = electron.remote.require('./storage/store.js');
// const userAuthStore = new Store({ configName: 'auth'});

// const LoginForm = () => {

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [errorMessage, setErrorMessage] = useState("");
//     const [hasError, setHasError] = useState(false);

//     const handleLogin = () => {
//         setHasError(false);
//         axios.post("https://api.palaceinteractive.com/users/login", {
//             email,
//             password
//         }).then(result => {
//             if (result.data.success === true) {
//                 userAuthStore.set("authToken", result.data.authToken);
//                 const app = electron.remote.app;
//                 app.relaunch();
//                 app.exit();
//             }
//         }).catch((error) => {
//             console.log(error.response);
//         });
//     }

//     return (
//         // temporary html, this is all to test the logic of the login.
//         <div style={{margin: "1rem 2rem", textAlign: "center"}}>
//             { hasError &&<div className="alert alert-danger" role="alert">{errorMessage}</div> }
//             <form onSubmit={e => {e.preventDefault(); handleLogin()}}>
//                 <h4>VERSE</h4>
//                 <div>
//                     <h5>Email</h5>
//                     <input style={{width: "250px"}} type="email" value={email} aria-label="Email" autoComplete="off" maxLength="999" spellCheck="false" noValidate onChange={e => { setEmail(e.target.value); }} />
//                 </div>
//                 <div>
//                     <h5>Password</h5>
//                     <input style={{width: "250px", border: hasError ? '1px solid red' : 'none'}} type="password" value={password} aria-label="Password" autoComplete="off" maxLength="999" spellCheck="false" noValidate onChange={e => { setPassword(e.target.value); }} />
//                 </div>
//                 <button style={{marginTop: "15px", width: "200px"}} className="btn btn-primary btn-lg" type="submit">Login</button>
//             </form>
//         </div>
//     );
// }

// export default LoginForm;


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
