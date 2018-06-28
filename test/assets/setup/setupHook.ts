require('ts-node/register');

const {setup} = require('./testEnvironment');

module.exports = async () => {
  await setup();
  return null;
};
