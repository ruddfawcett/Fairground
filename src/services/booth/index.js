'use strict';

const service = require('feathers-mongoose');
const booth = require('./booth-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: booth,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/booths', service(options));

  // Get our initialize service to that we can bind hooks
  const boothService = app.service('/booths');

  // Set up our before hooks
  boothService.before(hooks.before);

  // Set up our after hooks
  boothService.after(hooks.after);
};
