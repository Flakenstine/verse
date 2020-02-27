import React, { useState } from 'react';
import LoginFormComponent from '../../components/LoginForm';
import RegistrationForm from '../../components/RegistrationForm';

const LoginComponent = (props) => {
    const [ loginHidden, setLoginHidden ] = useState(false);

    const hideLogin = () => setLoginHidden(true)
    const showLogin = () => setLoginHidden(false)
    if (!props.visible) return '';
    return (
        <div className="loginContainer">
            <div style={{margin: "5px"}}>
                { loginHidden ? <RegistrationForm /> : <LoginFormComponent logUserIn={props.logUserIn} />}
                { loginHidden ? 
                    <button style={{textAlign: "center", margin: "0 auto", display: "flex", alignItems: "center"}} className="btn btn-link" type="button" onClick={showLogin}>Already have an account?</button> : 
                    <button style={{textAlign: "center", margin: "0 auto", display: "flex", alignItems: "center"}} className="btn btn-link" type="button" onClick={hideLogin}>Create an account </button> 
                }
            </div>
           
        </div>
    );

}

export default LoginComponent;
