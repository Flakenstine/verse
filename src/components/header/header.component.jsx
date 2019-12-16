import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch, faStore, faUserPlus, faChevronDown,
} from '@fortawesome/pro-light-svg-icons'
import { faBell } from '@fortawesome/pro-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import './header.component.scss'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  render() {
    return (
      <header className="header">
        <nav>
          <ul>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">Chat</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/games">Discovery</NavLink>
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
        <div className="header__currentUser">
          <img alt="" className="avatar" />
          <div className="username">
            Welcome,
            {' '}
            <span>Brant</span>
            {' '}
            <span className="dropdown_selector"><FontAwesomeIcon icon={faChevronDown} /></span>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
