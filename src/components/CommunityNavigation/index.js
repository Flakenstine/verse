import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/pro-light-svg-icons'

import './styles.scss'

const CommunityNavigation = (props) => {
  return (
    <div className="server-navigation">
      <div className="server-navigation-header">
        <h4>
          {props.community}
          <span><FontAwesomeIcon icon={faChevronDown} /></span>
        </h4>
      </div>
    </div>
  )
}

export default CommunityNavigation;
