import React from 'react'
/* Login Form */
import WindowsBar from '../components/windowsbar/windowsbar.component';
import MainApp from '../components/main/main.component';
import LoginForm from '../components/loginform/loginform.component';
import Axios from 'axios';

const electron = window.require('electron');
const Store = electron.remote.require('./storage/store.js');
const userAuthStore = new Store({ configName: 'auth' });

class AppContainer extends React.Component {

  constructor(props, context){
    super(props, context);

    this.isUserLoggedIn = this.isUserLoggedIn.bind(this);
    this.logUserIn = this.logUserIn.bind(this);

    this.state = {
      userLoggedIn: this.isUserLoggedIn()
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <WindowsBar />
        <MainApp visible={this.state.userLoggedIn} />
        <LoginForm visible={!this.state.userLoggedIn} logUserIn={this.logUserIn} />
      </div>
    );
  }

  isUserLoggedIn() {
    if (userAuthStore.has("authToken") && userAuthStore.has("userId")) {
      let authToken = userAuthStore.get('authToken'), userId = userAuthStore.get("userId");
      console.log("A: " + userAuthStore.get("authToken"));
      Axios.post('https://api.palaceinteractive.com/users/verify', {
        userId
      }, {
        headers: {
          "Authorization": `Bearer ${authToken}`
        }
      }).then((response) => {
        console.log(response);
      });
      return true;
    }
    return false;
  }

  logUserIn() {
    userAuthStore.set("authToken", "abcde");
    if (window.navigator.platform === 'MacIntel') electron.remote.getCurrentWindow().setWindowButtonVisibility(false);
    this.setState({
      userLoggedIn: true
    });
  }
}

export default AppContainer
