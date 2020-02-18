import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
/* Main Window */
import Header from '../header/header.component';
import Chat from '../../pages/chat/chat.component';
import Communities from '../../pages/communities/communities.component';
import Friends from '../../pages/friends/friends.component';
import ServerBrowser from '../serverbrowser/serverbrowser.component';
import Footer from '../footer/footer.component';
import Profile from '../../pages/profile/profile.component';

import './main.component.scss';
import '../../styles/_theme.scss';

class MainApp extends React.Component {

    render() {
        if (!this.props.visible) return '';

        const routes = [
            { path: '/', component: Chat, exact: true },
            { path: '/discover', component: Communities },
            { path: '/friends', component: Friends },
            { path: '/profile', component: Profile },
        ]

        return (
            <div className="row flex-nowrap">
                <div className={`col-sm-4 clearfix app__sidebarLeft`}>
                    <ServerBrowser />
                </div>
                <div className="col app__main">
                    <Header />
                    <div className="mainContainer">
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
                <Footer />
            </div>
        );
    }
}

// MainApp.propTypes = {
//     location: PropTypes.object.isRequired,
// }
  
export default withRouter(MainApp)
