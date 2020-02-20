import React from 'react'

import './loginform.component.scss'
import '../../styles/_theme.scss'

import verseLogo from '../../images/verse-logo-gold.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/pro-solid-svg-icons'
import { Label } from 'react-bootstrap'

const electron = window.require('electron');
const Store = electron.remote.require('./storage/store.js');
const userAuthStore = new Store({ configName: 'auth' });

class LoginForm extends React.Component {

    render() {

        return (
            <div className="loginArea">
                <div className="bg-image"></div>
                <div className="login--wrapper">
                    <div className="card">
                        <div className="card-header">
                            <img className="verseLogo" src={verseLogo}></img>
                            <p>Sign in or create an account</p>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="emailArea">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" className="email"></input>
                                </div>

                                <div className="passwordArea">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" className="password"></input>
                                </div>
                                <p className="forgotp">Forgotten Password?</p>

                                <input type="submit" value="Login" />
                                <p className="createAccount">Need an account?<a> Click here!</a></p>
                            </form>
                        </div>
                    </div>{/* CLOSE CARD */}
                </div>
            </div>
        )
    }
}

export default LoginForm
