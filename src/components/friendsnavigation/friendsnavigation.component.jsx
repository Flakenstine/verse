/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/pro-solid-svg-icons'
import { faChevronDown } from '@fortawesome/pro-light-svg-icons'

import './friendsnavigation.component.scss'

class FriendsNavigation extends React.Component {
  constructor(props) {
    super(props)

    this.state = { title: 'Friends' }
  }

  render() {
    return (
      <div className="friendsNavigation">
        <div className="friendsNavigation__header">
          {this.state.title}
        </div>
      </div>
    )
  }
}

export default FriendsNavigation
