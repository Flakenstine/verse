import React, { Component } from 'react';
import './fullspinner.component.scss';

class FullSpinner extends Component {

	render() {
        if (!this.props.visible) return '';

		return (
            <div className="center">
                <img src="./palace-logo.png" />
                <div id="loading-wrapper">
                    <div id="loading-content"></div>
                </div>
            </div>
		)
	}
}

export default FullSpinner