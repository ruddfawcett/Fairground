'use strict';
const school = require('./school');
const organization = require('./organization');
const booth = require('./booth');
const volunteer = require('./volunteer');
const tag = require('./tag');
const person = require('./person');
const fair = require('./fair');
const admin = require('./admin');
const authentication = require('./authentication');
const user = require('./user');
const mongoose = require('mongoose');
module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(user);
  app.configure(admin);
  app.configure(fair);
  app.configure(person);
  app.configure(tag);
  app.configure(volunteer);
  app.configure(booth);
  app.configure(organization);
  app.configure(school);
};
