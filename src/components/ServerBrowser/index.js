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

class ServerBrowser extends Component {

  static propTypes = {
    fetchServers: PropTypes.func.isRequired,
    communities: PropTypes.array.isRequired
  }

  state = {
    show: false,
    communityName: ''
  }

  componentDidMount() {
    this.props.fetchServers();
    console.log(this.props.communities);
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let communityName = this.state.communityName;
    this.addServer(communityName);
    this.handleReset();
    this.setState({
      show: false
    })
  }

  handleReset = () => {
    this.setState({
      communityName: ''
    });
  }

  addServer = (communityName) => {
    let authToken = getAuthStore().get("authToken");
    Axios.post(`${apiURL}communities/create`, { communityName }, {
      headers: {
        "Authorization": `Bearer ${authToken}`
      }
    }).then(() => {
      this.props.fetchServers();
    }, (error) => {
      console.log(error);
    })
  }

  render() {
    const { communities } = this.props;

    const handleClose = () => this.setState({show: false});
    const handleDisplay = () => this.setState({show: true});

    return (
      <div className="serverBrowser">
        <div className="serverBrowser__icon"><span><FontAwesomeIcon icon={faComments} /></span></div>
        <div className="serverBrowser__server-list">
          {communities.map((c) => <OverlayTrigger key={c.id} placement="right" overlay={<Tooltip id="tooltip-right">{c.displayName}</Tooltip>}><NavLink className="server" key={c.id} exact to={`/server/${c.id}`}>{c.displayName.charAt(0)}</NavLink></OverlayTrigger>)}

          <OverlayTrigger key="add-server" placement="right" overlay={<Tooltip id="tooltip-right">Add a Server</Tooltip>}><div className="server add-server-button" onClick={handleDisplay}><FontAwesomeIcon icon={faPlus} /></div></OverlayTrigger>
        </div>

        <div className="serverBrowser__foot-menu" style={{ padding: window.navigator.platform === 'Win32' ? '43px 16px' : '5px 16px'}}>
          <OverlayTrigger key="user-support" placement="right" overlay={<Tooltip id="tooltip-right">Support Center</Tooltip>}><Link to="/"><FontAwesomeIcon icon={faQuestionCircle} /></Link></OverlayTrigger>
          <OverlayTrigger key="user-settings" placement="right" overlay={<Tooltip id="tooltip-right">User Settings</Tooltip>}><Link to="/"><FontAwesomeIcon icon={faCog} /></Link></OverlayTrigger>
        </div>

        <Modal className="addServerModal" style={{color: "#000"}} show={this.state.show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Create a Community</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            To create a community, please your desired name below.
            <form onSubmit={ this.handleSubmit }>
              <input id="communityName" type="text" onChange={ this.handleInputChange } />
              <label htmlFor="communityName">Enter your commnity name</label>
              <Button variant="success" type="button">Create Community</Button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  communities: state.user.communities
})

export default connect(
  mapStateToProps,
  { fetchServers }
) (ServerBrowser);
