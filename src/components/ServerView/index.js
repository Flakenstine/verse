import React from 'react';
import ServerNavigation from '../ServerNavigation';
import SocialNavigation from '../SocialNavigation';
import './styles.scss';

const ServerView = ({match}) => {
	let serverID = match.params.id;

	return (
		<div className="chat">
			<ServerNavigation server={serverID} />
			<SocialNavigation />
		</div>
	)
}

export default ServerView
