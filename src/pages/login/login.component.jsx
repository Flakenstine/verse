import React, { useState } from 'react';
import LoginForm from '../../components/loginform/loginform.component'
import RegistrationFormComponent from '../../components/RegistrationForm/RegistrationForm.component';

import './login.style.scss'

const LoginComponent = (props) => {
    const [loginHidden, setLoginHidden] = useState(false);

    const hideLogin = () => setLoginHidden(true)
    const showLogin = () => setLoginHidden(false)
    if (!props.visible) return '';
    return (
        <div className="loginContainer">
            <div className="bg-image"></div>
            <div className="mainArea">
                {loginHidden ? <RegistrationFormComponent /> : <LoginForm logUserIn={props.logUserIn} />}

                <div className="accountPresent">
                    {loginHidden ?
                        <button className="btn btn-link" type="button" onClick={showLogin}>Already have an account?</button> :
                        <button className="btn btn-link" type="button" onClick={hideLogin}>Create an account </button>
                    }
                </div>

            </div>


        </div>
    );

}

export default LoginComponent;
