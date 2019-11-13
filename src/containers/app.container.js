/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { withRouter, Route, Switch } from 'react-router-dom'

<<<<<<< Updated upstream
import Header from '../components/header/header.component'
import Chat from '../pages/chat/chat.component'
import Clubs from '../pages/clubs/clubs.component'
import Games from '../pages/games/games.component'
import Friends from '../pages/friends/friends.component'
import ServerBrowser from '../components/serverbrowser/serverbrowser.component'
import SocialNavigation from '../components/socialnavigation/socialnavigation.component'
import ServerNavigation from '../components/servernavigation/servernavigation.component'
=======
import Header from '../components/header.component';
import ServerBrowser from '../components/server-browser.component';
import SocialNavigation from '../components/social-navigation.component';
import Chat from '../components/chat.component';
import Games from '../components/games.component';
import Friends from '../components/friends.component';
import Profile from '../components/profile.component';
>>>>>>> Stashed changes

import Footer from '../components/footer/footer.component'

class AppContainer extends React.Component {
  /**
   * Hide the server navigation menu when we aren't at the root location
   *
   * @memberof AppContainer
   */

<<<<<<< Updated upstream
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
        <Footer />
      </div>
    )
  }
}

AppContainer.propTypes = {
  location: PropTypes.object.isRequired,
=======
    render () {
        const routes = [
            {
                path: "/",
                exact: true,
                component: Chat
            },
            {
                path: "/games",
                exact: true,
                component: Games
            },
            {
                path: "/friends",
                exact: true,
                component: Friends
            },
            {
                path: "/profile",
                exact: true,
                component: Profile
            },

        ]

        return (
            <div className="container-fluid clearfix">
                <div class="row flex-nowrap">
                    <div class="col app-sidebar-left">
                        <ServerBrowser></ServerBrowser>
                    </div>
                    <div class="col app-main">
                        <Header></Header>
                        <Switch>
                             {routes.map((route, index) => (
                                <Route key={index} exact={route.exact}  path={route.path} component={route.component}></Route>
                             ))}
                             <Route component={Chat}></Route>
                         </Switch>
                    </div>
                    <div class="col app-sidebar-right">
                        <SocialNavigation></SocialNavigation>
                    </div>
                </div>
            </div>
            // <div className="container-fluid">
            //     <div className="draggableTop"></div>
            //     <div className="row">
            //         <div className="col app-side-bar-left">
            //             <ServerBrowser></ServerBrowser>
            //             <ServerNavigation></ServerNavigation>
            //         </div>
            //         <div class="col">
            //             <Header></Header>
            //             <Switch>
            //                 {routes.map((route, index) => (
            //                    <Route key={index} exact={route.exact}  path={route.path} component={route.component}></Route>
            //                 ))}
            //             </Switch>
            //         </div>
            //         <div class="col app-side-bar-right">
            //             <SocialNavigation></SocialNavigation>
            //         </div>
            //     </div>
            // </div>
        )
    }
>>>>>>> Stashed changes
}

export default withRouter(AppContainer)
