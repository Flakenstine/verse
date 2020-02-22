import React, { Component } from 'react';
import WindowsBar from '../../components/windowsbar/windowsbar.component';
import FullSpinner from '../../components/fullspinner/fullspinner.component';
import LoginComponent from '../../pages/login/login.component';

class App extends Component {

    state = {
        userAuthed: false,
        loading: true
    }

    componentWillMount () {
        checkUserCredentials(true);
    }
    render() {
        <div className="container-fluid">
            <WindowsBar />
            <FullSpinner visible={this.state.loading} />
            <MainApp visible={this.state.userLoggedIn && !this.state.loading} />
            <LoginComponent visible={!this.state.userLoggedIn && !this.state.loading} />
         </div>
    }
}


export default App;
