import Axios from 'axios';

const API_VERSION = 'v1';
const API_URL = 'https://api.verseapp.co/' + API_VERSION + '/';

const verifyCredentials = (authToken, userId, callback) => {
    Axios.post(API_URL + 'users/verify', { userId }, {
        headers: getAuthHeaders(authToken)
    }).then((response) => {
        callback(false, response);
    }, (error) => {
        callback(true, error);
    });
}

const handleLogin = (email, password, callback) => {
    Axios.post(API_URL + 'users/login', {
        email,
        password
    }).then((response) => {
        callback(false, response);
    }, (error) => {
        callback(true, error);
    });
}

const getAuthHeaders = (authToken) => {
    return {
        "Authorization": `Bearer ${authToken}`
    }
}

export { verifyCredentials, handleLogin, getAuthHeaders };

export const apiURL = API_URL;
