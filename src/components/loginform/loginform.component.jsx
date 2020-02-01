import React, { useState } from 'react';
import axios from 'axios';

import './loginform.component.scss';
import '../../styles/_theme.scss';

const electron = window.require('electron');
const Store = electron.remote.require('./storage/store.js');
const userAuthStore = new Store({ configName: 'auth'});

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [hasError, setHasError] = useState(false);

    const handleLogin = () => {
        setHasError(false);
        axios.post("https://api.palaceinteractive.com/users/login", {
            email,
            password
        }).then(result => {
            if (result.data.success === true) {
                userAuthStore.set("authToken", result.data.authToken);
                const app = electron.remote.app;
                app.relaunch();
                app.exit();
            } else {
                setErrorMessage(result.data);
                setHasError(true);
            }
        }).catch((error) => {
            if (error.response) {
                setErrorMessage(error.response.data.errors[0].message);
                setHasError(true);
            }
        });
    }

    return (
        // temporary html, this is all to test the logic of the login.
        <div style={{margin: "1rem 2rem", textAlign: "center"}}>
            { hasError &&<div className="alert alert-danger" role="alert">{errorMessage}</div> }
            <form onSubmit={e => {e.preventDefault(); handleLogin()}}>
                <h4>VERSE</h4>
                <div>
                    <h5>Email</h5>
                    <input style={{width: "250px"}} type="email" value={email} aria-label="Email" autoComplete="off" maxLength="999" spellCheck="false" noValidate onChange={e => { setEmail(e.target.value); }} />
                </div>
                <div>
                    <h5>Password</h5>
                    <input style={{width: "250px", border: hasError ? '1px solid red' : 'none'}} type="password" value={password} aria-label="Password" autoComplete="off" maxLength="999" spellCheck="false" noValidate onChange={e => { setPassword(e.target.value); }} />
                </div>
                <button style={{marginTop: "15px", width: "200px"}} className="btn btn-primary btn-lg" type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;


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
