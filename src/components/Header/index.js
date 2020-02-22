import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faStore, faUserPlus, faChevronDown } from '@fortawesome/pro-light-svg-icons'
import { faBell } from '@fortawesome/pro-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import './styles.scss'

const authUtil = require('../../utils/authUtil');
const apiUtil = require('../../utils/apiUtil');

const Header = () => {

  const [authedUser, setAuthedUser] = useState({name: 'null', avatarUrl: '../../images/unknown-profile.png'});

  const getAuthedUser = () => {
    const authToken = authUtil.getAuthStore().get("authToken");
    apiUtil.getUsername(authToken, (error, response) => {

      var name, avatar;
      if (error) {
        name = "Unknown";
        avatar = "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png";
      } else {
        name = response.data.username;
        avatar = "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png";
      }
      setAuthedUser({
        name,
        avatarUrl: avatar
      });
    });
  }

  useEffect(() => {
    getAuthedUser()
  }, []);

  const Avatar = (props) => {
    return (
      <img className="avatar" src={props.user.avatarUrl} alt={props.user.name} />
    )
  }

  const User = (props) => {
    return (
      <div className="header__currentUser">
        <Avatar user={props.user} />
        <div className="username">
          {props.user.name}
          <span className="dropdown_selector"><FontAwesomeIcon icon={faChevronDown} /></span>
        </div>
      </div>
    );
  }

  return (
    <header className="header">
      <nav>
        <ul>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">Chat</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/communities">Discovery</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/friends">Friends</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/profile">Profile</NavLink>
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
      <User user={authedUser} />
    </header>
  );
}

export default Header;
