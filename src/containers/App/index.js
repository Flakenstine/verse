import React, { Component } from 'react';
import LoadSpinner from '../../components/LoadSpinner';
import LoginComponent from '../Login'


import { getAuthStore } from '../../utils/authUtil';
import { verifyCredentials } from '../../utils/apiUtil';
import WindowsTitleBar from '../../components/WindowsTitleBar';
import Main from '../../components/Main';
import { MacOSBar } from '../../components';

const electron = window.require('electron');

class App extends Component {

    state = {
        userAuthed: false,
        loading: true
    }

    componentDidMount () {
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
			if (init) {
				this.setState({
					userAuthed: false,
					loading: false
				});
			} else {
				this.setState({
					userAuthed: false,
					loading: false
				});
			}
		}
	}

	logUserIn (authToken, userId) {
		getAuthStore().set("authToken", authToken);
		getAuthStore().set("userId", userId);
		console.log(getAuthStore().get("authToken"));
		if (window.navigator.platform === 'MacIntel') electron.remote.getCurrentWindow().setWindowButtonVisibility(false);
		this.setState({
			userAuthed: true
		});
	}

    render() {
		return (
			<div className="container-fluid">
				<WindowsTitleBar />
				<MacOSBar visible={!this.state.loading}/>
				<LoadSpinner visible={this.state.loading} />
				<Main visible={this.state.userAuthed && !this.state.loading} />
				<LoginComponent visible={!this.state.userAuthed && !this.state.loading} logUserIn={this.logUserIn} />
			</div>
		);
    }
}


export default App;
