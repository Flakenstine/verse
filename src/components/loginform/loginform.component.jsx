import React from 'react'

import './loginform.component.scss'
import '../../styles/_theme.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/pro-solid-svg-icons'
import { Label } from 'react-bootstrap'

const electron = window.require('electron');
const Store = electron.remote.require('./storage/store.js');
const userAuthStore = new Store({ configName: 'auth' });

class LoginForm extends React.Component {

    render() {

        return (
            <div className="container">
                <div className="side-left">
                    <div className="row side-row">
                        <div className="about">
                            <h2>Verse App</h2>
                            <p>Connect to the better Discord powered by Palace Interactive</p>
                        </div>
                    </div>
                </div>

                <div className="side-right">
                    <img src="" alt="" className="logo" />

                    <h2>Log into Verse</h2>

                    <div className="form-row">
                        <label>Email</label>
                        <input type="email" placeholder="yourname@verse.com" className="form-control form-control-sm"></input>
                    </div>

                    <div className="form-row">
                        <label>Password</label>
                        <input type="password" placeholder="Password" className="form-control form-control-sm"></input>
                    </div>

                    <div className="form-row row remember">
                        <div className="col-7 left no-padding">
                            <input type="checkbox" />Remember me
                            </div>

                        <div className="col-5">
                            <span><a href="">Forget Password?</a></span>
                        </div>
                    </div>

                    <div className="form-row login-button">
                        <button className="btn btn-sm btn-success">Login</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm
