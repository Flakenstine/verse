import React, { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faStore, faUserPlus, faChevronDown } from '@fortawesome/pro-light-svg-icons'
import { faBell } from '@fortawesome/pro-solid-svg-icons'

import { getUsername, getAvatar } from '../../utils/apiUtil'
import { getAuthStore } from '../../utils/authUtil'

import { NavLink } from 'react-router-dom'
import './header.component.scss'

const Header = () => {

  const [authedUser, setAuthedUser] = useState({name: 'unknown', avatarUrl: ''});
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  

  const getAuthedUser = () => {
    let username = "flakenstine";

    setName('username');

    setAuthedUser({
      name: name,
      avatarUrl: avatar
    });
  }




  // const getAuthedUser = () => {

  //   const authToken = getAuthStore().get("authToken");

  //   getUsername(authToken, (error, response) => {
  //     let username = "";

  //     if (error) {
  //       username = "Unknown";
  //       console.log("Failed to get username from API");
  //     } else {
  //       username = response.data.username;
  //     }

  //     setName(username);
  //   });

  //   getAvatar(authToken, (error, response) => {
  //     let avatar = "";

  //     if (error) {
  //       console.log("Failed to get avatar from API");
  //     } else {
  //       avatar = response.data.avatar;
  //     }
  //     setAvatar(avatar);
  //   });


  //   setAuthedUser({
  //     name,
  //     avatarUrl: avatar
  //   });


  // }

  // const getAuthedUser = () => {
  //   const authToken = authUtil.getAuthStore().get("authToken");
  //   apiUtil.getUsername(authToken, (error, response) => {
  //     var name, avatar;
  //     if (error) {
  //       name = "Unknown";
  //       avatar = "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png";
  //     } else {
  //       name = response.data.username;
  //       avatar = "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png";
  //     }
  //     setAuthedUser({
  //       name,
  //       avatarUrl: avatar
  //     });
  //   });
  // }

  useEffect(() => {
    getAuthedUser();
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
      <span>{authedUser.name}</span>
      <User user={authedUser} />
    </header>
  );
}

export default Header;
