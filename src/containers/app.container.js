/* eslint-disable react/forbid-prop-types */
import React from 'react'

import PropTypes from 'prop-types'
import { withRouter, Route, Switch } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faSquareFull, faTimes } from '@fortawesome/pro-light-svg-icons';

import Header from '../components/header/header.component'
import Chat from '../pages/chat/chat.component'
import Communities from '../pages/communities/communities.component';
import Games from '../pages/games/games.component'
import Friends from '../pages/friends/friends.component'
import ServerBrowser from '../components/serverbrowser/serverbrowser.component'
import SocialNavigation from '../components/socialnavigation/socialnavigation.component'
import ServerNavigation from '../components/servernavigation/servernavigation.component'
import Footer from '../components/footer/footer.component'
import Profile from '../pages/profile/profile.component'

const electron = window.require('electron');

class AppContainer extends React.Component {
  /**
   * Hide the server navigation menu when we aren't at the root location
   *
   * @memberof AppContainer
   */
  hideChatSidebar = (location) => (location === '/' ? 'app__sidebar-left' : 'app__sidebar-left--alt')

  hideFriendSidebar = (location) => (location === '/' ? '' : 'none')

  controlButtonsClose = () => {
    electron.remote.getCurrentWindow().close();
  }

  controlButtonsMinimize = () => {
    electron.remote.getCurrentWindow().minimize();
  }

  controlButtonsMinMax = () => {
    const currentWindow = electron.remote.getCurrentWindow();
    if (currentWindow.isMaximized()) {
      currentWindow.unmaximize();
    } else { 
      currentWindow.maximize();
    }
  }

  render() {
    const { location } = this.props

    const routes = [
      {
        path: '/',
        component: Chat,
        exact: true,
      },
      {
        path: '/games',
        component: Games,
      },
      {
        path: '/discover',
        component: Communities,
      },
      {
        path: '/friends',
        component: Friends,
      },
      {
        path: '/profile',
        component: Profile,
      },
    ]

    return (
      <div className="wrapper">
        <div className="windowsTitleBar" style={{display: window.navigator.platform === 'Win32' ? 'inline-flex': 'none'}}>
          <div className="windowControls">
            <ul>
              <li onClick={this.controlButtonsMinimize}><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></li>
              <li onClick={this.controlButtonsMinMax}><FontAwesomeIcon  style={{fontSize: `11px`, marginBottom: `1px`}} icon={faSquareFull}></FontAwesomeIcon></li>
              <li onClick={this.controlButtonsClose}><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></li>
            </ul>
          </div>
        </div>
        <div className="container-fluid-clearfix">
          <div className="draggableTop" />
          <div className="row flex-nowrap">
            <div className={`col-sm-4 clearfix app__sidebarLeft`}>
              <ServerBrowser />
            </div>
            <div className="col app__main">
              <Header />
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
            <div className="col clearfix app__sidebarRight" style={{ display: `${this.hideFriendSidebar(location.pathname)}` }}>
              <SocialNavigation />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

AppContainer.propTypes = {
  location: PropTypes.object.isRequired,
}

export default withRouter(AppContainer)
