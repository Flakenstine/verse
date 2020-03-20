const electron = window.require('electron');
const Store = electron.remote.require('./storage/store.js');
const userAuthStore = new Store({ configName: 'auth' });

function getAuthStore() {
    return userAuthStore;
}

module.exports.getAuthStore = getAuthStore;
