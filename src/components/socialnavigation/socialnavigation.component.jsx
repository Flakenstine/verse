/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/pro-solid-svg-icons'

import './socialnavigation.component.scss'

class SocialNavigation extends React.Component {
  render() {
    const friends = ['Flakenstine', 'Legobuilder0813', 'JustPlatinum', 'Gatario', 'Vidsify']
    return (
      <div className="socialMenu">
        <div className="socialMenu__icon">
          <span>
            <FontAwesomeIcon icon={faUsers} />
          </span>
        </div>
        <div className="socialMenu__friendslist">
          {friends.map((_value) => <div key={_value} className="friend" />)}
        </div>
      </div>
    )
  }
}

export default SocialNavigation
