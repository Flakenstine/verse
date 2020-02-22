import React from 'react';
import ServerNavigation from '../servernavigation/servernavigation.component';
import SocialNavigation from '../socialnavigation/socialnavigation.component';

const ServerView = ({match}) => {
	let serverID = match.params.id;

	return (
		<div className="chat">
			<ServerNavigation server={serverID}/>
			<SocialNavigation />
		</div>
	)
} 

export default ServerView
