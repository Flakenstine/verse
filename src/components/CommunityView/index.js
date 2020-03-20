import React from 'react';
import CommunityNavigation from '../CommunityNavigation';
import ChatMenu from '../ChatMenu';
import SocialNavigation from '../SocialNavigation';
import './styles.scss';

const CommunityView = ({match}) => {
	let communityID = match.params.id;

	return (
		<div className="chat">
			<CommunityNavigation community={communityID} />
			<ChatMenu />
			<SocialNavigation />
		</div>
	)
}

export default CommunityView
