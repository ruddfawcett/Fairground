'use strict';

const service = require('feathers-mongoose');
const volunteer = require('./volunteer-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: volunteer,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/volunteers', service(options));

  // Get our initialize service to that we can bind hooks
  const volunteerService = app.service('/volunteers');

  // Set up our before hooks
  volunteerService.before(hooks.before);

  // Set up our after hooks
  volunteerService.after(hooks.after);
};
