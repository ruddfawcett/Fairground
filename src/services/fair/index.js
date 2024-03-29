'use strict';

const service = require('feathers-mongoose');
const fair = require('./fair-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: fair,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/fairs', service(options));

  // Get our initialize service to that we can bind hooks
  const fairService = app.service('/fairs');

  // Set up our before hooks
  fairService.before(hooks.before);

  // Set up our after hooks
  fairService.after(hooks.after);
};
