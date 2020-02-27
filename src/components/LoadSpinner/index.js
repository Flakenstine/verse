import React, { Component } from 'react';
import './styles.scss';
import logo from '../../images/palace-logo.png';

class LoadSpinner extends Component {

	render() {
        if (!this.props.visible) return '';

		return (
            <div className="center">
                <img src={logo} alt="Palace Logo" />
                <div id="loading-wrapper">
                    <div id="loading-content"></div>
                </div>
            </div>
		)
	}
}

export default LoadSpinner
