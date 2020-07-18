import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
/* Main Window */
import Header from '../Header';
import Communities from '../../containers/Communities';
import Friends from '../../containers/Friends';
import CommunityBrowser from '../CommunityBrowser';
import Profile from '../../containers/Profile';
import Chat from '../../containers/Chat';

import './styles.scss';
import '../../styles/_theme.scss';
import CommunityView from '../CommunityView';

class MainApp extends React.Component {

    render() {
        if (!this.props.visible) return '';

        const routes = [
            { path: '/', component: Chat, exact: true },
            { path: '/discover', component: Communities },
            { path: '/friends', component: Friends },
            { path: '/profile', component: Profile },
            { path: '/community/:id', component: CommunityView }
        ]

        return (
            <div className="row flex-nowrap">
                <div className={`col-sm-4 clearfix app__sidebarLeft`}>
                    <CommunityBrowser />
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
