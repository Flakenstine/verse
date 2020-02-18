import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './serverbrowser.component.scss';
import '../../styles/_theme.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/pro-solid-svg-icons';

import axios from 'axios';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import palacelogo from '../../images/palace-logo.png'

const electron = window.require('electron');
const Store = electron.remote.require('./storage/store.js');
const userAuthStore = new Store({ configName: 'auth' });

class ServerBrowser extends Component {

  state = { servers: [] }

  componentDidMount() {
    this.loadServers();
  }

  macButtonsMinimize = () => {
    electron.remote.getCurrentWindow().minimize();
  }

  macButtonsMaximize = () => {
    const currentWindow = electron.remote.getCurrentWindow()
    currentWindow.setFullScreen(!currentWindow.isFullScreen());
  }

  macButtonsClose = () => {
    electron.remote.app.hide()
    //add a double click to quit()
  }

  loadServers = () => {
    const authToken = userAuthStore.get("authToken");

    axios.get('https://api.verseapp.co/v1/users/me/servers', {
      headers: {
        "Authorization": `Bearer ${authToken}`
      }
    }).then((response) => {
      console.log(response);
      this.setState({ servers: [ response.servers ]});
      console.log(this.state.servers);
    }, (error) => {
      console.log(error.response);
    });
  } 


  render() {
    return (
      <div className="serverBrowser">
        {/* these will be moved */}
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
          {/* need to load servers from api first */}
        {/* {this.state.servers.map((value) => <OverlayTrigger key={value} placement="right" overlay={<Tooltip id="tooltip-right">{value}</Tooltip>}><div className="server"><Link to="/"><img src={palacelogo} alt="Server Logo" /></Link></div></OverlayTrigger>)} */}
        </div>
      </div>
    );
  }
}

export default ServerBrowser;
