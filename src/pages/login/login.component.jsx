import React, { useState } from 'react';
import LoginForm from '../../components/loginform/loginform.component'
import RegistrationFormComponent from '../../components/RegistrationForm/RegistrationForm.component';

import './login.style.scss'

const LoginComponent = (props) => {
    const [ loginHidden, setLoginHidden ] = useState(false);

    const hideLogin = () => setLoginHidden(true)
    const showLogin = () => setLoginHidden(false)
    if (!props.visible) return '';
    return (
        <div className="loginContainer">
            <div className="bg-image"></div>
            { loginHidden ? <RegistrationFormComponent /> : <LoginForm logUserIn={props.logUserIn} />}
            { loginHidden ? 
                <button style={{textAlign: "center", margin: "0 auto", display: "flex", alignItems: "center"}} className="btn btn-link" type="button" onClick={showLogin}>Already have an account?</button> : 
                <button style={{textAlign: "center", margin: "0 auto", display: "flex", alignItems: "center"}} className="btn btn-link" type="button" onClick={hideLogin}>Create an account </button> 
            }
        </div>
    );

}

export default LoginComponent;
