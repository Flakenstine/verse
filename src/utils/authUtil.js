const Store = require('../storage/store.js').default;
const userAuthStore = new Store({ configName: 'auth' });

function getAuthStore() {
    return userAuthStore;
}

module.exports.getAuthStore = getAuthStore;
