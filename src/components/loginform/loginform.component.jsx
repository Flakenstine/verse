import React from 'react'

import './loginform.component.scss'
import '../../styles/_theme.scss'

const electron = window.require('electron');
const Store = electron.remote.require('./storage/store.js');
const userAuthStore = new Store({ configName: 'auth' });

class LoginForm extends React.Component {

  handleLogin = () => {
      userAuthStore.set("authToken", "abcde");
      const app = electron.remote.app;
      app.relaunch();
      app.exit();
  };

  render() {

    return (
        <form style={Object.assign({margin:'auto'})} onSubmit={e => {e.preventDefault(); this.handleLogin()}}>
            <h4>Login</h4>
            <div>
                <h5>Email</h5>
                <div>
                    <input name="" type="email" placeholder="" aria-label="Email" autoComplete="off" maxLength="999" spellCheck="false" />
                </div>
            </div>
            <div>
                <h5>Password</h5>
                <div>
                    <input name="" type="password" placeholder="" aria-label="Password" autoComplete="off" maxLength="999" spellCheck="false" />
                </div>
            </div>
            <button type="submit">
                <div>Login</div>
            </button>
        </form>
    )
  }
}

export default LoginForm
