import React from 'react';
import ServerNavigation from '../ServerNavigation';
import ChatMenu from '../ChatMenu';
import SocialNavigation from '../SocialNavigation';
import './styles.scss';

const ServerView = ({match}) => {
	let serverID = match.params.id;

	return (
		<div className="chat">
			<ServerNavigation server={serverID} />
			<ChatMenu />
			<SocialNavigation />
		</div>
	)
}

export default ServerView
