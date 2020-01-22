import React from 'react'
/* Login Form */
import MainApp from '../components/main/main.component';
import LoginForm from '../components/loginform/loginform.component';

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
    return(
      <div className="container-fluid">
        <div className="draggableTop" />
        <MainApp visible={this.state.userLoggedIn} />
        <LoginForm visible={!this.state.userLoggedIn} logUserIn={this.logUserIn} />
      </div>
    );
  }

  isUserLoggedIn() {
    console.log(userAuthStore);
    return userAuthStore.has("authToken");
  }

  logUserIn() {
    userAuthStore.set("authToken", "abcde");
    this.setState({
      userLoggedIn: true
    });
  }
}

export default AppContainer