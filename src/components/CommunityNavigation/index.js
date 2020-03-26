import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/pro-light-svg-icons'
import { faCommentAltLines } from '@fortawesome/pro-duotone-svg-icons'

import './styles.scss'

const CommunityNavigation = (props) => {
  return (
    <div className="community-navigation">
      <div className="community-navigation-header">
        <h4>
          {props.community}
          <span><FontAwesomeIcon icon={faChevronDown} /></span>
        </h4>
      </div>
      <div className="community-navigation-chlist">
        <ul>
          <li><a href=""><span><FontAwesomeIcon icon={faCommentAltLines} /></span> General Chat 1</a></li>
          <li><a href=""><span><FontAwesomeIcon icon={faCommentAltLines} /></span> General Chat 2</a></li>
          <li><a href=""><span><FontAwesomeIcon icon={faCommentAltLines} /></span> General Chat 3</a></li>
          <li><a href=""><span><FontAwesomeIcon icon={faCommentAltLines} /></span> General Chat 4</a></li>
        </ul>
      </div>
    </div>
  )
}

export default CommunityNavigation;
