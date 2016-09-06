'use strict';

const service = require('feathers-mongoose');
const admin = require('./admin-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: admin,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/admins', service(options));

  // Get our initialize service to that we can bind hooks
  const adminService = app.service('/admins');

  // Set up our before hooks
  adminService.before(hooks.before);

  // Set up our after hooks
  adminService.after(hooks.after);
};
