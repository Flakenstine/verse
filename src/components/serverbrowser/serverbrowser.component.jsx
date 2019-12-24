// export default ServerBrowser
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/pro-solid-svg-icons'
import { Link } from 'react-router-dom'

import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import palacelogo from '../../images/palace-logo.png'

import './serverbrowser.component.scss'
import '../../styles/_theme.scss'


// eslint-disable-next-line react/prefer-stateless-function
class ServerBrowser extends React.Component {
  render() {
    const servers = ['Palace Interactive 1', 'Palace Interactive 2', 'Palace Interactive 3', 'Palace Interactive 4', 'Palace Interactive 5']

    return (
      <div className="serverBrowser">
        <div className="macButtons">
          <div className="traffic-lights">
            <button className="traffic-light traffic-light-close" id="close"></button>
            <button className="traffic-light traffic-light-minimize" id="minimize" onClick={this.macButtonMinimize}></button>
            <button className="traffic-light traffic-light-maximize" id="maximize"></button>
          </div>
        </div>
        <div className="serverBrowser__icon">
          <span>
            <FontAwesomeIcon icon={faComments} />
          </span>
        </div>
        <div className="serverBrowser__serverlist">


          {servers.map((value) => <OverlayTrigger key={value} placement="right" overlay={<Tooltip id="tooltip-right">{value}</Tooltip>}><div className="server"><Link to="/"><img src={palacelogo} alt="Server Logo" /></Link></div></OverlayTrigger>)}
        </div>
      </div>
    )
  }
}

export default ServerBrowser
