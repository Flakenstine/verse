import React, { Component } from 'react';

import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/pro-light-svg-icons';
import { faCommentAltLines } from '@fortawesome/pro-light-svg-icons'
import { fetchCommunity } from '../../actions/community';


import PropTypes from 'prop-types';

import './styles.scss';

class CommunityNavigation extends Component {

  static propTypes = {
    fetchCommunity: PropTypes.func.isRequired,
    community: PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.props.fetchCommunity(this.props.selectedCommunity);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedCommunity !== this.props.selectedCommunity) {
      this.props.fetchCommunity(this.props.selectedCommunity);
    } 
  }


  render() {

  const { community } = this.props;




  return (
    <div className="community-navigation">
        <div className="community-navigation-header">
          <h4>{community.name}<span><FontAwesomeIcon icon={faChevronDown} /></span></h4>
        </div>
        <div className="community-navigation-chlist">
          <ul>
            {/* {channels.map((c) => <li>{c.name}</li>)} */}
            <li><a href=""><span><FontAwesomeIcon icon={faCommentAltLines} /></span> General Chat 1</a></li>
						<li><a href=""><span><FontAwesomeIcon icon={faCommentAltLines} /></span> General Chat 2</a></li>
						<li><a href=""><span><FontAwesomeIcon icon={faCommentAltLines} /></span> General Chat 3</a></li>
						<li><a href=""><span><FontAwesomeIcon icon={faCommentAltLines} /></span> General Chat 4</a></li>
					</ul>
				</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  community: state.community.community
})

export default connect (
  mapStateToProps,
  { fetchCommunity }
 ) (CommunityNavigation);
