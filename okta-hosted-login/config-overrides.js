/* global __dirname */
/* eslint-disable import/no-extraneous-dependencies */

// Support storing environment variables in a file named "testenv"
const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '..', 'testenv'),
});

const webpack = require('webpack');

const env = {};

// List of environment variables made available to the app
[
  'ISSUER',
  'CLIENT_ID',
].forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Environment variable ${key} must be set. See README.md`);
  }
  env[key] = JSON.stringify(process.env[key]);
});

module.exports = {
  /* eslint-disable no-param-reassign */
  webpack: (config) => {
    // Remove the 'ModuleScopePlugin' which keeps us from requiring outside the src/ dir
    config.resolve.plugins = [];

    // Define global vars from env vars (process.env has already been defined)
    config.plugins = config.plugins.concat([
      new webpack.DefinePlugin({
        'process.env': env,
      }),
    ]);
    return config;
  },
};
