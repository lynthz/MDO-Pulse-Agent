const Cattr = require('@cattr/node');
const keychain = require('../utils/keychain');

const api = new Cattr();

// Set default base URL for MDO Pulse server
api.setBaseUrl('https://cattr.mdoprime.com.br', true).catch(err => {
  // Log error but don't fail initialization; user can set hostname manually on login
  console.warn('Could not set default API URL:', err.message);
});

api.tokenProvider = {

  get: keychain.getSavedToken,
  set: keychain.saveToken,

};

api.credentialsProvider = {

  get: keychain.getSavedCredentials,
  set: keychain.saveCredentials,

};

module.exports = api;
