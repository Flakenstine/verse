import React from 'react'

import './loginform.component.scss'
import '../../styles/_theme.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/pro-solid-svg-icons'

const electron = window.require('electron');
const Store = electron.remote.require('./storage/store.js');
const userAuthStore = new Store({ configName: 'auth' });

class LoginForm extends React.Component {

    handleLogin = () => {
        userAuthStore.set("authToken", "abcde");
        const app = electron.remote.app;
        app.relaunch();
        app.exit();
    };

    handleRegister = () => {
    };

    render() {

        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-10 login-box">
                            <div className="row">
                                <div className="col-lg-8 col-md-7 login-form">
                                    <h2>Sign In</h2>
                                    <form style={Object.assign({ margin: 'auto' })} onSubmit={e => { e.preventDefault(); this.handleLogin() }}>
                                        <div className="text-box-cont">
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1"><i><FontAwesomeIcon icon={faUsers} /></i></span>
                                                </div>
                                                <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1"></input>
                                            </div>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1"><i><FontAwesomeIcon icon={faUsers} /></i></span>
                                                </div>
                                                <input type="password" className="form-control" placeholder="Password"></input>
                                            </div>
                                            <div className="row">
                                                <p className="forget-p">Forgot Password?</p>
                                            </div>
                                            <div className="input-group center mb-3">
                                                <button className="btn btn-success btn-round">Sign In</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-lg-4 col-md-5 side-box">
                                    <div className="no-account">
                                        <h2 className="w-100">Don't have an Account?</h2>
                                        <p>Simply create your account by clicking the Signup Button</p>
                                        <a href="#">
                                            <button type="button" class="btn btn-outline-light">Sign Up</button>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-10 login-box">
                                <div className="row">
                                    <div className="col-lg-4 col-md-5 side-box">
                                        <div className="no-account">
                                            <h2 className="w-100">Already have an Account?</h2>
                                            <p>Simply login to your account by clicking the Login Button</p>
                                            <a href="#"><button type="button" className="btn btn-outline-light">Sign In</button></a>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-7 login-form">
                                        <h2>Create Account</h2>
                                        <form style={Object.assign({ margin: 'auto' })} onSubmit={e => { e.preventDefault(); this.handleRegister() }}>
                                            <div className="text-box-cont">
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon1"><i><FontAwesomeIcon icon={faUsers} /></i></span>
                                                    </div>
                                                    <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1"></input>
                                                </div>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon1"><i><FontAwesomeIcon icon={faUsers} /></i></span>
                                                    </div>
                                                    <input type="email" className="form-control" placeholder="Email Address" aria-describedby="basic-addon1"></input>
                                                </div>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon1"><i><FontAwesomeIcon icon={faUsers} /></i></span>
                                                    </div>
                                                    <input type="password" className="form-control" placeholder="Password" aria-describedby="basic-addon1"></input>
                                                </div>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon1"><i><FontAwesomeIcon icon={faUsers} /></i></span>
                                                    </div>
                                                    <input type="password" className="form-control" placeholder="Confirm Password" aria-describedby="basic-addon1"></input>
                                                </div>
                                                <div className="input-group center palacec mb-3">
                                                    <button className="btn btn-success btn-round">Sign In</button>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm
