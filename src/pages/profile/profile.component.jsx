/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import './profile.style.scss';

import profilePicture from '../../images/unknown-profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCommentAltDots } from '@fortawesome/pro-solid-svg-icons';
import { faServer } from '@fortawesome/pro-light-svg-icons'
import { faSwords, faGamepad, faAward, faEdit } from '@fortawesome/pro-regular-svg-icons'

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
                  <a className="stats-image servers"><FontAwesomeIcon icon={faServer}></FontAwesomeIcon></a>
                  <div className="stats-info">
                    <p className="stats-data">21</p>
                    <p className="stats-text">Servers Joined</p>
                  </div>
                </li>
                <li>
                  <a className="stats-image clubs"><FontAwesomeIcon icon={faSwords}></FontAwesomeIcon></a>
                  <div className="stats-info">
                    <p className="stats-data">3</p>
                    <p className="stats-text">Clubs Joined</p>
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
                  <a className="stats-image matches"><FontAwesomeIcon icon={faGamepad}></FontAwesomeIcon></a>
                  <div className="stats-info">
                    <p className="stats-data">20</p>
                    <p className="stats-text">Matches Played</p>
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
      </div>
    )
  }
}

export default Profile
