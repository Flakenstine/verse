import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faSquareFull, faTimes } from '@fortawesome/pro-light-svg-icons';
import '../../styles/_theme.scss';
const electron = window.require('electron');

class WindowsTitleBar extends React.Component {

    controlButtonsClose = () => {
        electron.remote.getCurrentWindow().close();
    }

    controlButtonsMinimize = () => {
        electron.remote.getCurrentWindow().minimize();
    }

    controlButtonsMinMax = () => {
        const currentWindow = electron.remote.getCurrentWindow();
        if (currentWindow.isMaximized()) {
            currentWindow.unmaximize();
        } else {
            currentWindow.maximize();
        }
    }

    render() {
        if (window.navigator.platform === 'Win32') {
            return (
                <div className="row">
                    <div className="windowsTitlebar">
                        <div className="windowControls">
                        <button className="controlButton" onClick={this.controlButtonsMinimize}><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></button>
                        <button className="controlButton" onClick={this.controlButtonsMinMax}><FontAwesomeIcon style={{fontSize: `11px`, marginBottom: `1px`}} icon={faSquareFull}></FontAwesomeIcon></button>
                        <button className="controlButton" onClick={this.controlButtonsClose}><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></button>
                        </div>
                    </div>
                </div>
            );
        } else {
            return <div className="draggableTop" />
        }
    }
}

export default WindowsTitleBar
