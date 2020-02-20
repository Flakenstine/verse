import Axios from 'axios';

const API_VERSION = 'v1';
const API_URL = 'https://api.verseapp.co/' + API_VERSION + '/';

function verifyCredentials(authToken, userId, callback) {
    Axios.post(API_URL + 'users/verify', { userId }, {
        headers: getAuthHeaders(authToken)
    }).then((response) => {
        callback(false, response);
    }, (error) => {
        callback(true, error);
    });
}

function getUsername(authToken, callback) {
    Axios.get(API_URL + 'users/me', {
        headers: getAuthHeaders(authToken)
    }).then((response) => {
        callback(false, response);
    }, (error) => {
        callback(true, error);
    });
}

const getAvatar = (authToken, callback) => {
    // temp for testing
    Axios.get('http://localhost:3200/users/me/avatar', {
        headers: getAuthHeaders(authToken)
    }).then((response) => {
        callback(false, response);
    }, (error) => {
        callback(true, error);
    });
}

function handleLogin(email, password, callback) {
    Axios.post(API_URL + 'users/login', {
        email,
        password
    }).then((response) => {
        callback(false, response);
    }).catch((error) => {
        callback(true, error);
    });
}

function getAuthHeaders(authToken) {
    return {
        "Authorization": `Bearer ${authToken}`
    };
}

export { verifyCredentials, getUsername, handleLogin, getAvatar };
