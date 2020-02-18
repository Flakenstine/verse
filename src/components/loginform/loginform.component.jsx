import React from 'react'

import './loginform.component.scss'
import '../../styles/_theme.scss'

import verseLogo from '../../images/verse-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/pro-solid-svg-icons'
import { Label } from 'react-bootstrap'

const electron = window.require('electron');
const Store = electron.remote.require('./storage/store.js');
const userAuthStore = new Store({ configName: 'auth' });

class LoginForm extends React.Component {

    render() {

        return (
            <div className="login">
                <div className="user-login">
                    <div className="row bs-reset">
                        <div className="col-md-6 login-container bs-reset">
                            <img className="login-logo login-logo-alt" src={verseLogo} />
                            <div className="login-content">
                                {/* TEXT CAN GO HERE IF NEEDED */}
                                <form action="FORM-ACTION" className="login-form">
                                    <div className="row">
                                        <div className="user-input col-xs-6">
                                            <input className="form-control form-group" type="email" placeholder="Email Address" required />
                                        </div>
                                        <div className="user-input left-padding col-xs-6">
                                            <input className="form-control form-group" type="password" placeholder="Password" required />
                                        </div>
                                    </div>
                                    <div className="forget-remember row">
                                        <div className="col-sm-4">
                                            <label className="rememberme mt-checkbox mt-checkbox-outline">
                                                <input type="checkbox" /> Remember Me
                                                <span></span>
                                            </label>
                                        </div>
                                        <div className="col-sm-8 text-right">
                                            <div className="forgot-password">
                                                <a href="#" className="forgot-password">Forgot Password?</a>
                                            </div>
                                            <button type="submit" class="btn btn-primary">Sign in</button>
                                        </div>
                                    </div>
                                    <br/>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 bs-reset">
                            <div className="login-bg"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm
