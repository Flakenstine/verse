import React, { Component } from 'react';
import LoadSpinner from '../../components/LoadSpinner';
import LoginComponent from '../Login'

import { getAuthStore } from '../../utils/authUtil';
import { verifyCredentials } from '../../utils/apiUtil';
import Main from '../../components/Main';

class App extends Component {

  state = {
    userAuthed: false,
    loading: true
  }

  componentDidMount() {
    this.checkUserCredentials(true);
    this.logUserIn = this.logUserIn.bind(this);
  }

  checkUserCredentials(init) {
    if (getAuthStore().has("authToken") && getAuthStore().has("userId")) {
      let authToken = getAuthStore().get("authToken");
      let userId = getAuthStore().get("userId");

      verifyCredentials(authToken, userId, (error, response) => {
        if (error) {
          this.setState({
            userAuthed: false,
            loading: false
          });
          this.invalidateCredentials();
        } else {
          this.setState({
            userAuthed: response.data.success,
            loading: false
          });
        }
      });

      if (init) {
        this.setState({
          userAuthed: false,
          loading: true
        });
      }
    } else {
      this.setState({
        userAuthed: false,
        loading: false
      });
      this.invalidateCredentials();
    }
  }

  invalidateCredentials() {
    getAuthStore().set("authToken", null);
    getAuthStore().set("userId", null);
  }

  logUserIn(authToken, userId) {
    getAuthStore().set("authToken", authToken);
    getAuthStore().set("userId", userId);
    this.setState({
      userAuthed: true
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <LoadSpinner visible={this.state.loading} />
        <Main visible={this.state.userAuthed && !this.state.loading} />
        <LoginComponent visible={!this.state.userAuthed && !this.state.loading} logUserIn={this.logUserIn} />
      </div>
    );
  }
}


export default App;
