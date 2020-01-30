import React from 'react';

const LoginForm = () => {

    //todo implement login logic completely
    const handleLogin = () => {}

    return (
        // temporary html, this is all to test the logic of the login.
        <div style={{margin: "1rem 2rem", textAlign: "center"}}>
            <form onSubmit={e => {e.preventDefault(); this.handleLogin()}}>
                <h4>VERSE</h4>
                <div>
                    <h5>Email</h5>
                    <input style={{width: "250px"}} name="" type="email" placeholder="" aria-label="Email" autoComplete="off" maxLength="999" spellCheck="false" />
                </div>
                <div>
                    <h5>Password</h5>
                    <input style={{width: "250px"}} name="" type="password" placeholder="" aria-label="Password" autoComplete="off" maxLength="999" spellCheck="false"/>
                </div>
                <button style={{marginTop: "15px", width: "200px"}} class="btn btn-primary btn-lg" type="submit">Login</button>
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
