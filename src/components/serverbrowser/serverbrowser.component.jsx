import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/pro-light-svg-icons';
import { getUserServers } from '../../utils/apiUtil';
import { getAuthStore } from '../../utils/authUtil';

import './serverbrowser.component.scss';
import { Tooltip } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { faQuestionCircle, faCog, faComments } from '@fortawesome/pro-solid-svg-icons';

const ServerBrowser = () => {

  const [servers, setServerList] = useState([]);

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
      <div className="serverBrowser__icon">
        <span>
          <FontAwesomeIcon icon={faComments} />
        </span>
      </div>
      <div className="serverBrowser__server-list">
        { servers.map((value) => <OverlayTrigger key={value} placement="right" overlay={<Tooltip id="tooltip-right">{value}</Tooltip> }><div className="server"><Link to="/"></Link></div></OverlayTrigger>)}
        <OverlayTrigger key="add-server" placement="right" overlay={<Tooltip id="tooltip-right">Add a Server</Tooltip>}><div className="server add-server-button"><FontAwesomeIcon icon={faPlus} /></div></OverlayTrigger>
      </div>
      <div className="serverBrowser__foot-menu">
        <OverlayTrigger key="user-support" placement="right" overlay={<Tooltip id="tooltip-right">Support Center</Tooltip>}><Link to="/"><FontAwesomeIcon icon={faQuestionCircle} /></Link></OverlayTrigger>
        <OverlayTrigger key="user-settings" placement="right" overlay={<Tooltip id="tooltip-right">User Settings</Tooltip>}><Link to="/"><FontAwesomeIcon icon={faCog} /></Link></OverlayTrigger>
      </div>
    </div>
  );
}

export default ServerBrowser;
