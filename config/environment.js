/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'library-app',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',

    firebase: {
      apiKey: 'AIzaSyAExEupw47UXbRoYQ6BvKvyPcEyQl9JhTg',
      authDomain: 'libraryapp-27e9d.firebaseapp.com',
      databaseURL: 'https://libraryapp-27e9d.firebaseio.com',
      storageBucket: 'libraryapp-27e9d.appspot.com',
      messagingSenderId: '195393521984'
    },

    // if using ember-cli-content-security-policy
    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-eval' apis.google.com",
      'frame-src': "'self' https://*.firebaseapp.com",
      'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
    },

    EmberENV: {


      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };
  //Comentar e descomentar caso queira ver o que acontece por debaixo dos panos (under the hook)
  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV['ember-faker'] = {
      enabled: true
    };
<<<<<<< HEAD
=======
  }

  if (environment === 'production') {

>>>>>>> 6cbb7515bb79725aeebc21807251e8d7a622bf4c
  }

  return ENV;
};
