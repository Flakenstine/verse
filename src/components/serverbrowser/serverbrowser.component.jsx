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

const electron = window.require('electron')


// eslint-disable-next-line react/prefer-stateless-function
class ServerBrowser extends React.Component {

  macButtonsMinimize = () => {
    electron.remote.getCurrentWindow().minimize();
  };

  macButtonsMaximize = () => {
    const currentWindow = electron.remote.getCurrentWindow()
    currentWindow.setFullScreen(!currentWindow.isFullScreen());
  };

  macButtonsClose = () => {
    electron.remote.app.hide()
    //add a double click to quit()
  };

  render() {
    const servers = ['Palace Interactive 1', 'Palace Interactive 2', 'Palace Interactive 3', 'Palace Interactive 4', 'Palace Interactive 5']

    return (
      <div className="serverBrowser">
        <div className="macButtons" style={{ display: window.navigator.platform === 'MacIntel' ? 'block' : 'none' }}>
          <div className="traffic-lights">
            <button className="traffic-light traffic-light-close" id="close" onClick={this.macButtonsClose}></button>
            <button className="traffic-light traffic-light-minimize" id="minimize" onClick={this.macButtonsMinimize}></button>
            <button className="traffic-light traffic-light-maximize" id="maximize" onClick={this.macButtonsMaximize}></button>
          </div>
        </div>
        <div className="serverBrowser__icon" style={{ marginTop: window.navigator.platform === 'Win32' ? '7px' : '-16px' }}>
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
