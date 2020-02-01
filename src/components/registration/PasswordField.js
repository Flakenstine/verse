import React, { Component } from 'react';

class PasswordField extends Component {

    constructor(props) {
        super (props);

        const { minStrength = 3, thresholdLength = 7 } = props;

        this.minStrength = typeof minStrength === 'number'
            ? Math.max( Math.min(minStrength, 4), 0)
                : 3;

        this.thresholdLength = typeof thresholdLength === 'number'
            ? Math.max(thresholdLength, 7)
                : 7;

        this.state = { password: '', strength: 0};
    }

    stateChanged = (state) => {
        
    }
}

export default PasswordField;
