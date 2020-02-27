import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faStore, faUserPlus, faChevronDown } from '@fortawesome/pro-light-svg-icons'
import { faBell } from '@fortawesome/pro-solid-svg-icons'

import { getProfile } from '../../utils/apiUtil'
import { getAuthStore } from '../../utils/authUtil'
import { NavLink } from 'react-router-dom'
import './styles.scss'

const Header = () => {

  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');

  const getAuthedUser = () => {
    let authToken = getAuthStore().get("authToken");

    getProfile(authToken, (error, response) => {
      let username;
      let avatar;

      if (error) {
        console.log("Failed to fetch username from API");
      } else {
        username = response.data.username;
        avatar = response.data.avatar;
        // username = response.data.username;
      }

      setUsername(username);
      setAvatar(avatar);
    });
  }

  useEffect(() => {
    getAuthedUser();
  }, []);

  return (
    <header className="header">
      <nav>
        <ul>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">Chat</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/communities">Communities</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/friends">Friends</NavLink>
          </li>
        </ul>
      </nav>
      <div className="header__search">
        <FontAwesomeIcon icon={faSearch} />
        {' '}
        <span>Search</span>
      </div>
      <div className="header__subnav">
        <button type="button">
          <NavLink to="/"><FontAwesomeIcon icon={faStore} /></NavLink>
        </button>
        <button type="button">
          <NavLink to="/"><FontAwesomeIcon icon={faUserPlus} /></NavLink>
        </button>
        <button type="button">
          <NavLink to="/"><FontAwesomeIcon icon={faBell} /></NavLink>
        </button>
      </div>
      <span className="separator"></span>
      <div className="header__authed-user">
        <img className="avatar" src={avatar} alt={username} />
        <div className="username">
          {username}
          <span className="dropdown_selector"><FontAwesomeIcon icon={faChevronDown} /></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
