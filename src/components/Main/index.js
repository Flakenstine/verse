import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
/* Main Window */
import Header from '../Header';
import Communities from '../../containers/Communities';
import Friends from '../../containers/Friends';
import ServerBrowser from '../ServerBrowser';
import Profile from '../../containers/Profile';
import Chat from '../../containers/Chat';

import './styles.scss';
import '../../styles/_theme.scss';
import ServerView from '../ServerView';

class MainApp extends React.Component {

    render() {
        if (!this.props.visible) return '';

        const routes = [
            { path: '/', component: Chat, exact: true },
            { path: '/discover', component: Communities },
            { path: '/friends', component: Friends },
            { path: '/profile', component: Profile },
            { path: '/server/:id', component: ServerView }
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
            </div>
        );
    }
}

export default withRouter(MainApp)
