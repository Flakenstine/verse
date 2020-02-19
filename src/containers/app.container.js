import React from 'react'
/* Login Form */
import Axios from 'axios';
import WindowsBar from '../components/windowsbar/windowsbar.component';
import MainApp from '../components/main/main.component';
import FullSpinner from '../components/fullspinner/fullspinner.component';
import LoginComponent from '../pages/login/login.component';

const electron = window.require('electron');
const apiUtil = require('../utils/apiUtil');
const authUtil = require('../utils/authUtil');

class AppContainer extends React.Component {

  constructor(props, context){
    super(props, context);

    this.isUserLoggedIn = this.checkUserCredentials.bind(this);
    this.logUserIn = this.logUserIn.bind(this);

    this.checkUserCredentials(true);
  }

  render() {
    return (
      <div className="container-fluid">
        <WindowsBar />
        <FullSpinner visible={this.state.loading} />
        <MainApp visible={this.state.userLoggedIn && !this.state.loading} />
        <LoginComponent visible={!this.state.userLoggedIn && !this.state.loading} logUserIn={this.logUserIn} />
      </div>
    );
  }

  checkUserCredentials(init) {
    if (authUtil.getAuthStore().has("authToken") && authUtil.getAuthStore().has("userId")) {
      let authToken = authUtil.getAuthStore().get('authToken'), userId = authUtil.getAuthStore().get("userId");
      apiUtil.verifyCredentials(authToken, userId, (error, response) => {
        if (error) {
          this.setState({
            userLoggedIn: false,
            loading: false
          });
        } else {
          this.setState({
            userLoggedIn: response.data.success,
            loading: false
          });
        }
      });
      if (init) {
        this.state = {
          userLoggedIn: false,
          loading: true
        };
      }
    } else {
      if (init) {
        this.state = {
          userLoggedIn: false,
          loading: false
        }
      } else {
        this.setState({
          userLoggedIn: false,
          loading: false
        });
      }
    }
  }

  logUserIn(authToken, userId) {
    console.log("AYY " + authToken + " " + userId);
    authUtil.getAuthStore().set("authToken", authToken);
    authUtil.getAuthStore().set("userId", userId);
    if (window.navigator.platform === 'MacIntel') electron.remote.getCurrentWindow().setWindowButtonVisibility(false);
    this.setState({
      userLoggedIn: true
    });
  }
}

export default AppContainer
