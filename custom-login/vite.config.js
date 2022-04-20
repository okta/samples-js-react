// "IMPORTANT: THIS FILE IS GENERATED, CHANGES SHOULD BE MADE WITHIN '@okta/generator'"

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import getEnvModule from './env'

getEnvModule().setEnvironmentVarsFromTestEnv(__dirname);

process.env.CLIENT_ID = process.env.SPA_CLIENT_ID || process.env.CLIENT_ID;
process.env.OKTA_TESTING_DISABLEHTTPSCHECK = process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;
process.env.USE_INTERACTION_CODE = process.env.USE_INTERACTION_CODE || false;

const env = {};

// List of environment variables made available to the app
[
  'ISSUER',
  'CLIENT_ID',
  'SPA_CLIENT_ID',
  'OKTA_TESTING_DISABLEHTTPSCHECK',
  'USE_INTERACTION_CODE',
].forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Environment variable ${key} must be set. See README.md`);
  }
  env[key] = process.env[key];
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': env
  },
  resolve: {
    alias: {
      '@okta/okta-auth-js': path.resolve(__dirname, 'node_modules/@okta/okta-auth-js/dist/okta-auth-js.umd.js'),
      'react-router-dom': path.resolve(__dirname, 'node_modules/react-router-dom')
    }
  },
  server: {
    port: process.env.PORT || 8080
  },
  build: {
    rollupOptions: {
      // always throw with build warnings
      onwarn (warning, warn) {
        warn('\nBuild warning happened, customize "onwarn" callback in vite.config.js to handle this error.');
        throw new Error(warning);
      }
    }
  }
})
