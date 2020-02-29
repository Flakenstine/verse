import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/pro-light-svg-icons';
import { getUserServers } from '../../utils/apiUtil';
import { getAuthStore } from '../../utils/authUtil';

import './styles.scss';
import { Tooltip, Modal, Button } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { faQuestionCircle, faCog, faComments } from '@fortawesome/pro-solid-svg-icons';

const ServerBrowser = () => {

  const [servers, setServerList] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleDisplay = () => setShow(true);

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
        { servers.map((value) => <OverlayTrigger key={value.id} placement="right" overlay={<Tooltip id="tooltip-right">{value.displayName}</Tooltip> }><NavLink className="server" exact to={`/server/${value.id}`}>S</NavLink></OverlayTrigger>)}


        <OverlayTrigger key="add-server" placement="right" overlay={<Tooltip id="tooltip-right">Add a Server</Tooltip>}><div className="server add-server-button" onClick={handleDisplay}><FontAwesomeIcon icon={faPlus} /></div></OverlayTrigger>
      </div>
      <div className="serverBrowser__foot-menu">
        <OverlayTrigger key="user-support" placement="right" overlay={<Tooltip id="tooltip-right">Support Center</Tooltip>}><Link to="/"><FontAwesomeIcon icon={faQuestionCircle} /></Link></OverlayTrigger>
        <OverlayTrigger key="user-settings" placement="right" overlay={<Tooltip id="tooltip-right">User Settings</Tooltip>}><Link to="/"><FontAwesomeIcon icon={faCog} /></Link></OverlayTrigger>
      </div>

      <Modal className="addServerModal" style={{color: "#000"}} show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Join a Server</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          To join a new server, please provide the invite token for that server below
          <form>
            <input id="inviteCode" type="text" onChange={e => e.preventDefault} />
            <label htmlFor="inviteCode">Enter an invite token</label>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>Join</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ServerBrowser;
