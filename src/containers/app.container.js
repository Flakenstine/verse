/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { withRouter, Route, Switch } from 'react-router-dom'

import Header from '../components/header/header.component'
import Chat from '../pages/chat/chat.component'
import Communities from '../pages/communities/communities.component';
import Games from '../pages/games/games.component'
import Friends from '../pages/friends/friends.component'
import ServerBrowser from '../components/serverbrowser/serverbrowser.component'
import Footer from '../components/footer/footer.component'
import Profile from '../pages/profile/profile.component'

class AppContainer extends React.Component {
  /**
   * Hide the server navigation menu when we aren't at the root location
   *
   * @memberof AppContainer
   */
  hideChatSidebar = (location) => (location === '/' ? 'app__sidebar-left' : 'app__sidebar-left--alt')

  hideFriendSidebar = (location) => (location === '/' ? '' : 'none')

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
    )
  }
}

AppContainer.propTypes = {
  location: PropTypes.object.isRequired,
}

export default withRouter(AppContainer)
