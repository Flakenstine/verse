/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { withRouter, Route, Switch } from 'react-router-dom'

import Header from '../components/header/header.component'
import Chat from '../pages/chat/chat.component'
import Clubs from '../pages/clubs/clubs.component'
import Games from '../pages/games/games.component'
import Friends from '../pages/friends/friends.component'
import ServerBrowser from '../components/serverbrowser/serverbrowser.component'
import SocialNavigation from '../components/socialnavigation/socialnavigation.component'
import ServerNavigation from '../components/servernavigation/servernavigation.component'

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
        path: '/clubs',
        component: Clubs,
      },
      {
        path: '/friends',
        component: Friends,
      },
    ]

    return (
      <div className="container-fluid-clearfix">
        <div className="draggableTop" />
        <div className="row flex-nowrap">
          <div className={`col-sm-4 clearfix ${this.hideChatSidebar(location.pathname)}`}>
            <ServerBrowser />
            <Route path="/" exact component={ServerNavigation} />
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
          <div className="col clearfix app__sidebar-right" style={{ display: `${this.hideFriendSidebar(location.pathname)}` }}>
            <SocialNavigation />
          </div>
        </div>
      </div>
    )
  }
}

AppContainer.propTypes = {
  location: PropTypes.object.isRequired,
}

export default withRouter(AppContainer)
