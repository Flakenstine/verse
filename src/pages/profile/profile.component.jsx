/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import './profile.style.scss';

import profilePicture from '../../images/unknown-profile.png';

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
                    <p className="rank">ONLINE</p>
                    <p className="rank">ADMIN</p>
                    <p className="rank">STAFF</p>
                    <p className="rank">GUARDIAN</p>
                    <p className="rank">PREMIUM</p>
                  </div>
                  <p className="member_since">Member Since November 6, 2016</p>
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
