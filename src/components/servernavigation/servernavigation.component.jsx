/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/pro-solid-svg-icons'
import { faChevronDown } from '@fortawesome/pro-light-svg-icons'

import './servernavigation.component.scss'

class ServerNavigation extends React.Component {
  constructor(props) {
    super(props)

    this.state = { server: 'Palace Interactive' }
  }

  render() {
    return (
      <div className="serverNavigation">
        <div className="serverNavigation__header">
          {this.props.server}
          {/* <FontAwesomeIcon icon={faCheckCircle} /> */}
          <span><FontAwesomeIcon icon={faChevronDown} /></span>
        </div>
      </div>
    )
  }
}

export default ServerNavigation
