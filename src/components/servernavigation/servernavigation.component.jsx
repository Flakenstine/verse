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
      <div className="server-navigation">
        <div className="server-navigation-header">
          <h4>
            {this.props.server}
            <span><FontAwesomeIcon icon={faChevronDown} /></span>
          </h4>
        </div>
      </div>
    )
  }
}

export default ServerNavigation
