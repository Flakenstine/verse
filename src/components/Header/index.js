import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUser } from '../../actions/user';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faStore, faUserPlus } from '@fortawesome/pro-light-svg-icons'
import { faBell } from '@fortawesome/pro-solid-svg-icons'

import './styles.scss';
import User from './User';

class Header extends Component {
  
  static propTypes = {
    fetchUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {

    const { user } = this.props;

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
      <User user={user}></User>
    </header>
    )
  }


}

const mapStateToProps = (state) => ({
  user: state.user.user
});

export default connect(
  mapStateToProps,
  { fetchUser }
) (Header);
