import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStore, faUserPlus, faChevronDown, faEuroSign } from '@fortawesome/pro-light-svg-icons';
import { faBell } from '@fortawesome/pro-solid-svg-icons';
import { Link } from 'react-router-dom';
class Header extends React.Component {
    
    render() {
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
                    <div className="username">Brant <span className="dd-menu-icon"><FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></span></div>
                </div>
            </header>
        );
    }
}

export default Header




                {/* All of this needs to be fixed hella bad */}
                {/* <div className="header-nav">
                    <nav>
                        <ul>
                            <li className="nav-item">
                                <a className="nav-link">Chat</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Games</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Clubs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Friends</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="header-search-container">
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon> Search...
                </div>
                <div className="header-user-options">
                    <button>
                        <a><FontAwesomeIcon icon={faStore}></FontAwesomeIcon></a>
                    </button>
                    <button>
                        <a><FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon></a>
                    </button>
                    <button>
                        <a><FontAwesomeIcon icon={faBell}></FontAwesomeIcon></a>
                    </button>
                </div>
                <div className="header-user-menu">
                    <img className="avatar"></img>
                    <div className="username"><span>Welcome,</span> Brant!  <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></div>
                </div> */}