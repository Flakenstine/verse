import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchServers } from '../../actions/user';
import { Link, NavLink } from 'react-router-dom';

import './styles.scss';
import { OverlayTrigger } from 'react-bootstrap';
import { Tooltip, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faCog, faComments } from '@fortawesome/pro-solid-svg-icons';
import { faPlus } from '@fortawesome/pro-light-svg-icons';
import Axios from 'axios';
import { apiURL } from '../../utils/apiUtil';
import { getAuthStore } from '../../utils/authUtil';
import { getAuthHeaders } from '../../utils/authUtil';

class ServerBrowser extends Component {

  static propTypes = {
    fetchServers: PropTypes.func.isRequired,
    servers: PropTypes.array.isRequired
  }

  state = {
    show: false,
    serverName: ''
  }

  componentDidMount() {
    this.props.fetchServers();
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let serverName = this.state.serverName;
    this.addServer(serverName);
    this.handleReset();
    this.setState({
      show: false
    })
  }

  handleReset = () => {
    this.setState({
      serverName: ''
    });
  }

  addServer = (serverName) => {
    let authToken = getAuthStore().get("authToken");
    Axios.post(`${apiURL}/server/create`, { serverName }, {
      headers: {
        "Authorization": `Bearer ${authToken}`
      }
    }).then((response) => {
      console.log(response.data)
      this.props.fetchServers();
    }, (error) => {
      console.log(error);
    })
  }

  render() {
    const { servers } = this.props;

    const handleClose = () => this.setState({show: false});
    const handleDisplay = () => this.setState({show: true});

    return (
      <div className="serverBrowser">
        <div className="serverBrowser__icon" style={{ display: window.navigator.platform === 'MacIntel' ? 'block' : 'none'}}><span><FontAwesomeIcon icon={faComments} /></span></div>
        <div className="serverBrowser__server-list">
          {servers.map((s) => <OverlayTrigger key={s.id} placement="right" overlay={<Tooltip id="tooltip-right">{s.displayName}</Tooltip>}><NavLink className="server" key={s.id} exact to={`/server/${s.id}`}>{s.displayName.charAt(0)}</NavLink></OverlayTrigger>)}

          <OverlayTrigger key="add-server" placement="right" overlay={<Tooltip id="tooltip-right">Add a Server</Tooltip>}><div className="server add-server-button" onClick={handleDisplay}><FontAwesomeIcon icon={faPlus} /></div></OverlayTrigger>
        </div>

        <div className="serverBrowser__foot-menu">
          <OverlayTrigger key="user-support" placement="right" overlay={<Tooltip id="tooltip-right">Support Center</Tooltip>}><Link to="/"><FontAwesomeIcon icon={faQuestionCircle} /></Link></OverlayTrigger>
          <OverlayTrigger key="user-settings" placement="right" overlay={<Tooltip id="tooltip-right">User Settings</Tooltip>}><Link to="/"><FontAwesomeIcon icon={faCog} /></Link></OverlayTrigger>
        </div>

        <Modal className="addServerModal" style={{color: "#000"}} show={this.state.show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Create a Server</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            To create a server, please enter the name for your server below.
            <form onSubmit={ this.handleSubmit }>
              <input id="serverName" type="text" onChange={ this.handleInputChange } />
              <label htmlFor="serverName">Enter your server name</label>
              <Button variant="success" type="button">Create Server</Button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  servers: state.user.servers
})

export default connect(
  mapStateToProps,
  { fetchServers }
) (ServerBrowser);
