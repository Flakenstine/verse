import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faPlus, faCog, faQuestionCircle } from '@fortawesome/pro-light-svg-icons';
import { getUserServers } from '../../utils/apiUtil';
import { getAuthStore } from '../../utils/authUtil';

import palacelogo from '../../images/palace-logo.png';
import './serverbrowser.component.scss';
import { Tooltip } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const electron = window.require('electron');

const ServerBrowser = () => {

  const [servers, setServerList] = useState([]);

  const macButtonsMinimize = () => {
    electron.remote.getCurrentWindow().minimize()
  }

  const macButtonsMaximize = () => {
    const currentWindow = electron.remote.currentWindow();
    currentWindow.setFullScreen(!currentWindow.isFullScreen());
  }

  const macButtonsClose = () => {
    electron.remote.app.hide();
  }


  const getServers = () => {
    let authToken = getAuthStore().get("authToken");
  
    getUserServers(authToken, (error, response) => {
      if (error) {
        console.log("There was an error attempting to fetch user servers");
      } else {
        setServerList(response.data.servers);
      }
    });
  }

  useEffect(() => {
    getServers();
  }, []);


  return (
    <div className="serverBrowser">
      <div className="macButtons" style={{ display: window.navigator.platform === 'MacIntel' ? 'block' : 'none' }}>
          <div className="traffic-lights">
            <button className="traffic-light traffic-light-close" id="close" onClick={macButtonsClose}></button>
            <button className="traffic-light traffic-light-minimize" id="minimize" onClick={macButtonsMinimize}></button>
            <button className="traffic-light traffic-light-maximize" id="maximize" onClick={macButtonsMaximize}></button>
        </div>
      </div>
      <div className="serverBrowser__icon" style={{ display: window.navigator.platform === 'Win32' ? '7px': '-16px' }}>
        <span>
          <FontAwesomeIcon icon={faComments} />
        </span>
      </div>
      <div className="serverBrowser__server-list">
        { servers.map((value) => <OverlayTrigger key={value} placement="right" overlay={<Tooltip id="tooltip-right">{value}</Tooltip> }><div className="server"><Link to="/"></Link></div></OverlayTrigger>)}
        <OverlayTrigger key="add-server" placement="right" overlay={<Tooltip id="tooltip-right">Add a Server</Tooltip>}><div className="server add-server-button"><FontAwesomeIcon icon={faPlus} /></div></OverlayTrigger>
        {/* <div className="server add-server-button"><OverlayTrigger key="add-server" placement="right"></OverlayTrigger></div> */}
      </div>
      <div className="serverBrowser__foot-menu">
        <Link to="/"><FontAwesomeIcon icon={faQuestionCircle} /></Link>
        <Link to="/"><FontAwesomeIcon icon={faCog} /></Link>
      </div>
    </div>
  );
}

export default ServerBrowser;
