require('ts-node/register');

const {teardown} = require('./testEnvironment');

module.exports = async () => {
  await teardown();
  return null;
};
