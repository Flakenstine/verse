import React, { Component } from 'react';

import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/pro-light-svg-icons';
import { faCommentAltLines } from '@fortawesome/pro-light-svg-icons'
import { fetchCommunity } from '../../actions/community';
import { fetchCommunityChannels } from '../../actions/community';


import PropTypes from 'prop-types';

import './styles.scss';
import { faAngleDown } from '@fortawesome/pro-solid-svg-icons';

class CommunityNavigation extends Component {

  static propTypes = {
    fetchCommunity: PropTypes.func.isRequired,
    fetchCommunityChannels: PropTypes.func.isRequired,
    community: PropTypes.object.isRequired,
    channels: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.fetchCommunity(this.props.selectedCommunity);
    this.props.fetchCommunityChannels(this.props.selectedCommunity);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedCommunity !== this.props.selectedCommunity) {
      this.props.fetchCommunity(this.props.selectedCommunity);
      this.props.fetchCommunityChannels(this.props.selectedCommunity);
    } 
  }


  render() {

  const { community } = this.props;
  const { channels } = this.props;




  return (
    <div className="community-navigation">
        <div className="community-navigation-header">
          <h4>{community.name}<span><FontAwesomeIcon icon={faChevronDown} /></span></h4>
        </div>
        <div className="community-navigation-channel-list">
          {channels.map((c) => <button className="channel-btn" key={c.id}><span><FontAwesomeIcon icon={faCommentAltLines} /></span> {c.name}</button>)}
				</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  community: state.community.community,
  channels: state.community.channels
})

export default connect (
  mapStateToProps,
  { fetchCommunity, fetchCommunityChannels }
 ) (CommunityNavigation);
