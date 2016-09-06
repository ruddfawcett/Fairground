'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VolunteerSchema = new Schema({
  name: {
    first: { type: String, required: true },
    last: { type: String, required: true }
  },
  email: { type: String, lowercase: true, trim: true, required: true, unique: true, dropDups: true },
  phone: { type: String, unique: true, required: true, dropDups: true },
  created_at: { type: Date, 'default': Date.now },
  updated_at: { type: Date, 'default': Date.now }
});

VolunteerSchema.pre('save', function(next) {
  this.updated_at = new Date();
  next();
});

const VolunteerModel = mongoose.model('Volunteer', VolunteerSchema);

module.exports = VolunteerModel;
