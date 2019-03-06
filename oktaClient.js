const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-866123.okta.com',
  token: '000TV-YkgI1rv9x-KPgEcQwM1aZ-vIzgxaKr3kd1AJ'
});

module.exports = client;