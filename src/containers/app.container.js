import React from 'react'
/* Login Form */
import WindowsBar from '../components/windowsbar/windowsbar.component';
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
    return (
      <div className="container-fluid">
        <WindowsBar />
        <MainApp visible={this.state.userLoggedIn} />
        <LoginForm visible={!this.state.userLoggedIn} logUserIn={this.logUserIn} />
      </div>
    );
  }

  isUserLoggedIn() {
    if (userAuthStore.has("authToken")) {
			Axios.post('https://api.verseapp.co/v1/users/verify', {
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
