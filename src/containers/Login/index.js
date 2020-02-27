import React, { useState } from 'react';
import LoginForm from '../../components/loginform/loginform.component'
import RegistrationFormComponent from '../../components/RegistrationForm/RegistrationForm.component';

import './styles.scss';

const LoginComponent = (props) => {
    const [loginHidden, setLoginHidden] = useState(false);

    const toggleLogin = () => setLoginHidden(!loginHidden)

    if (!props.visible) return '';
    return (
        <div className="loginContainer">
            <div className="bg-image"></div>
            <div className="mainArea">
                {loginHidden ? <RegistrationFormComponent toggleLogin={toggleLogin} /> : <LoginForm logUserIn={props.logUserIn} toggleLogin={toggleLogin} />}
            </div>
        </div>
    );
}

export default LoginComponent;
