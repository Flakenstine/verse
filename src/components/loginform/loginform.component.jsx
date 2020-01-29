/* eslint-disable react/forbid-prop-types */
import React from 'react'

import './loginform.component.scss'
import '../../styles/_theme.scss'

class LoginForm extends React.Component {

    handleLogin = () => {
        this.props.logUserIn();
    };

    handleRegister = () => {
    };

    render() {
        if (!this.props.visible) return '';

        if (window.navigator.platform === 'MacIntel') {
            window.require('electron').remote.getCurrentWindow().setWindowButtonVisibility(true);
        }

        return (
            <div className="row">
                <div className="col-4" />
                <div className="col-4">
                    <div>
                        <form style={Object.assign({margin:'auto'})} onSubmit={e => {e.preventDefault(); this.handleLogin()}}>
                            <h4>Login</h4>
                            <div>
                                <h5>Email</h5>
                                <div>
                                    <input name="" type="email" placeholder="" aria-label="Email" autoComplete="off" maxLength="999" spellCheck="false" />
                                </div>
                            </div>
                            <div>
                                <h5>Password</h5>
                                <div>
                                    <input name="" type="password" placeholder="" aria-label="Password" autoComplete="off" maxLength="999" spellCheck="false" />
                                </div>
                            </div>
                            <button type="submit">
                                <div>Login</div>
                            </button>
                        </form>

                        <form style={Object.assign({margin:'auto'})} onSubmit={e => {e.preventDefault(); this.handleRegister()}}>
                            <h4>Register</h4>
                            <div>
                                <h5>Email</h5>
                                <div>
                                    <input name="" type="email" placeholder="" aria-label="Email" autoComplete="off" maxLength="999" spellCheck="false" />
                                </div>
                            </div>
                            <div>
                                <h5>Password</h5>
                                <div>
                                    <input name="" type="password" placeholder="" aria-label="Password" autoComplete="off" maxLength="999" spellCheck="false" />
                                </div>
                            </div>
                            <div>
                                <h5>Confirm Password</h5>
                                <div>
                                    <input name="" type="password" placeholder="" aria-label="Confirm Password" autoComplete="off" maxLength="999" spellCheck="false" />
                                </div>
                            </div>
                            <button type="submit">
                                <div>Register</div>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-4" />
            </div>
        );
    }
}

export default LoginForm
