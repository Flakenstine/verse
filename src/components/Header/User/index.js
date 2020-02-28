import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/pro-light-svg-icons';

const User = ({ user }) => {

	return (
		<div className="header__authed-user">
			<img className="avatar" src={user.avatar} alt={user.username} />
			<div className="username">{user.username} <span className="dropdown_selector"><FontAwesomeIcon icon={faChevronDown} /></span></div>
		</div>
	)

}

export default User;
