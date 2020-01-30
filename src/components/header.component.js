import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStore, faUserPlus, faChevronDown, faEuroSign } from '@fortawesome/pro-light-svg-icons';
import { faBell } from '@fortawesome/pro-solid-svg-icons';
import { Link } from 'react-router-dom';



const Header = () => {

    const Avatar = (props) => {
        return (
            <img className="avatar" src={props.user.avatarUrl} alt={props.user.name} />
        );
    }
    const User = (props) => {
        return (
            <div className="user">
                <Avatar user={props.user} />
                <div className="username">{props.user.name}</div>
            </div>
        );
    }

    const CurrentUser = (props) => {
        return (
            <User user={props.authedUser}></User>
        );
    }

    const currentUser = {
        authedUser: {
            name: 'Flakenstine',
            avatarUrl: ''
        },
    }

    return (
        <header className="header">
            <div className="header-nav">
                <nav>
                    <ul>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Chat</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/games">Games</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/clubs">Clubs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/friends">Friends</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="header-search-bar">
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon> Search...
            </div>
            <div className="header-user-options">
                <button>
                    <a>
                        <FontAwesomeIcon icon={faStore}></FontAwesomeIcon>
                    </a>
                </button>
                <button>
                    <a>
                        <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
                    </a>
                </button>
                <button>
                    <a>
                        <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
                    </a>
                </button>
            </div>
            <div className="header-user-menu">
                <Link className="nav-link" to="/profile">
                    <img className="avatar"></img>
                </Link>
                <CurrentUser user={currentUser.authedUser}></CurrentUser>
                {/* <div className="username">Brant <span className="dd-menu-icon"><FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></span></div> */}
            </div>
        </header>
    );
}

export default Header
