/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import './profile.style.scss';

import profilePicture from '../../images/unknown-profile.png';
import recentlyPlayed from '../../images/recently-played.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCommentAltDots, faChevronDoubleUp } from '@fortawesome/pro-solid-svg-icons';
import { faAward, faEdit, faBullhorn, faAngleDown, faMedal } from '@fortawesome/pro-regular-svg-icons';
import { faSpotify, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

{/* Icons for Moderation Top Right
  faTools, faShieldAlt from pro-regular-svg
  faSword from '@fortawesome/pro-light-svg-icons'
*/}

class Profile extends React.Component {
  render() {
    return (
      <div className="profile">
        <div className="profile_header">
          <div className="profile_header_top">
            <div className="user_info">
              <div className="col-3 left">
                <div className="avatar">
                  <img src={profilePicture}></img>
                </div>
              </div>
              <div className="col">
                <div className="info">
                  <h1>Brant</h1>
                  <div className="rank_area">
                    <p className="rank online">ONLINE</p>
                    <p className="rank admin">ADMIN</p>
                    <p className="rank staff">STAFF</p>
                    <p className="rank watchdog">WATCHDOG</p>
                    <p className="rank premium">PREMIUM</p>
                  </div>
                  <p className="member_since">Member Since November 6, 2016</p>
                </div>
              </div>
            </div>
          </div>
          <div className="profile_header_bottom">
            <div className="stats_area">
              <ul className="stats">
                <li>
                  <a className="stats-image friends"><FontAwesomeIcon icon={faUsers}></FontAwesomeIcon></a>
                  <div className="stats-info">
                    <p className="stats-data">1,521</p>
                    <p className="stats-text">Friends Added</p>
                  </div>
                </li>
                <li>
                  <a className="stats-image servers"><FontAwesomeIcon icon={faBullhorn}></FontAwesomeIcon></a>
                  <div className="stats-info">
                    <p className="stats-data">21</p>
                    <p className="stats-text">Communities Joined</p>
                  </div>
                </li>
                <li>
                  <a className="stats-image awards"><FontAwesomeIcon icon={faAward}></FontAwesomeIcon></a>
                  <div className="stats-info">
                    <p className="stats-data">15</p>
                    <p className="stats-text">Awards Received</p>
                  </div>
                </li>
                <li>
                  <a className="stats-image matches"><FontAwesomeIcon icon={faChevronDoubleUp}></FontAwesomeIcon></a>
                  <div className="stats-info">
                    <p className="stats-data accountLevel">150</p>
                    <p className="stats-text">Account Level</p>
                  </div>
                </li>
                <li className="status-area">
                  <a className="status-mark"><FontAwesomeIcon icon={faCommentAltDots}></FontAwesomeIcon></a>
                  <p className="status-current">Current Status</p>
                  <span className="status-text">Looking for a group to play Fortnite</span>
                  <a className="status-edit" ><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></a>
                </li>
              </ul>
            </div>
            <div className="user_tools_area">
              <ul className="user_tools">
                <li className="tool_addFriend">
                  <div className="tool">
                    <a className="tool_addFriend_text">Add Friend</a>
                  </div>
                </li>
                <li className="tool_message">
                  <div className="tool">
                    <a className="tool_message_text">Message</a>
                  </div>
                </li>
                <li className="tool_report">
                  <div className="tool">
                    <a className="tool_report_text">Report</a>
                  </div>
                </li>
              </ul>
            </div> {/* End user_tools_area*/}
          </div> {/* End profile_header_bottom*/}
        </div>
        <div className="profile-content">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="card">
                  <div className="card-header">
                    <a className="card-dropdown"><FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon></a>
                    ABOUT ME
                  </div>
                  <div className="card-body">
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum sapien vitae lacus congue, sed fermentum ipsum eleifend. Proin vitae venenatis magna. Ut imperdiet magna ut volutpat ultricies. In luctus fringilla ex id pellentesque. Ut ex ex, aliquet in diam vel, posuere bibendum orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col mini-box">
                    <div className="card">
                      <div className="card-header">
                        <a className="card-dropdown"><FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon></a>
                        JOINED COMMUNITIES
                      </div>
                      <div className="card-body">
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col mini-box">
                    <div className="card">
                      <div className="card-header">
                        <a className="card-dropdown"><FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon></a>
                        AWARDS
                      </div>
                      <div className="card-body">
                        <div className="awards-area">
                          <ul className="awards">
                            <li className="award1">
                              <i className="award1Logo"><FontAwesomeIcon icon={faMedal}></FontAwesomeIcon></i>
                            </li>
                            <li className="award1">
                              <i className="award1Logo"><FontAwesomeIcon icon={faMedal}></FontAwesomeIcon></i>
                            </li>
                            <li className="award1">
                              <i className="award1Logo"><FontAwesomeIcon icon={faMedal}></FontAwesomeIcon></i>
                            </li>
                            <li className="award1">
                              <i className="award1Logo"><FontAwesomeIcon icon={faMedal}></FontAwesomeIcon></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col mini-box">
                    <div className="card">
                      <div className="card-header">
                        <a className="card-dropdown"><FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon></a>
                        CONNECTIONS
                      </div>
                      <div className="card-body">
                        <ul className="social-btns">
                          <li><button className="btn btn-spotify"><i className="pull-left"><FontAwesomeIcon icon={faSpotify}></FontAwesomeIcon></i>Listen along on Spotify</button></li>
                          <li><button className="btn btn-twitter"><i className="pull-left"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></i>Follow me on Twitter</button></li>
                          <li><button className="btn btn-github"><i className="pull-left"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></i>Follow me on GitHub</button></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
