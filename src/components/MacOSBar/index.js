import React from 'react';

import '../../styles/_theme.scss';
import './styles.scss'
const electron = window.require('electron');

class MacOSBar extends React.Component {

    macButtonsMinimize = () => {
        electron.remote.getCurrentWindow().minimize()
    }

    macButtonsMaximize = () => {
        const currentWindow = electron.remote.getCurrentWindow();
        currentWindow.setFullScreen(!currentWindow.isFullScreen());
    }

    macButtonsClose = () => {
        electron.remote.app.hide();
    }

    render() {
        if (!this.props.visible) return '';

        if (window.navigator.platform === "MacIntel") {
            return (
                <div>
                    <div className="macButtons">
                        <div className="traffic-lights">
                            <button className="traffic-light traffic-light-close" id="close" onClick={this.macButtonsClose}></button>
                            <button className="traffic-light traffic-light-minimize" id="minimize" onClick={this.macButtonsMinimize}></button>
                            <button className="traffic-light traffic-light-maximize" id="maximize" onClick={this.macButtonsMaximize}></button>
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default MacOSBar
