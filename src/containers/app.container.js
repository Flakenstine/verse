/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { withRouter, Route, Switch } from 'react-router-dom'
/* Main Window */
import Header from '../components/header/header.component'
import Chat from '../pages/chat/chat.component'
import Communities from '../pages/communities/communities.component';
import Friends from '../pages/friends/friends.component'
import ServerBrowser from '../components/serverbrowser/serverbrowser.component'
import Footer from '../components/footer/footer.component'
import Profile from '../pages/profile/profile.component'
/* Login Form */
import LoginForm from '../components/loginform/loginform.component';

const electron = window.require('electron');
const Store = electron.remote.require('./storage/store.js');
const userAuthStore = new Store({ configName: 'auth' });

class AppContainer extends React.Component {
  render() {
    if (userAuthStore.has("authToken")) {
      return getMainRender();
    } else {
      const BrowserWindow  = window.require('electron').remote.getCurrentWindow();
      BrowserWindow.setWindowButtonVisibility(true);
      return getLoginRender();
    }
  }
}

function getMainRender() {
  const routes = [
    { path: '/', component: Chat, exact: true },
    { path: '/discover', component: Communities },
    { path: '/friends', component: Friends },
    { path: '/profile', component: Profile },
  ]

  return (
    <div className="container-fluid">
      <div className="draggableTop" />
      <div className="row flex-nowrap">
        <div className={`col-sm-4 clearfix app__sidebarLeft`}>
          <ServerBrowser />
        </div>
        <div className="col app__main">
          <Header />
          <div class="mainContainer">
            <Switch>
              {routes.map((route) => (
                <Route
                  key={route}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))}
            </Switch>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function getLoginRender() {
  return (
          <LoginForm />
  );
}

AppContainer.propTypes = {
  location: PropTypes.object.isRequired,
}

export default withRouter(AppContainer)
