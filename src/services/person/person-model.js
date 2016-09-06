'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
  name: {
    first: { type: String, required: true },
    last: { type: String, required: true }
  },
  title: { type: String, required: true },
  email: { type: String, lowercase: true, trim: true, required: true, unique: true, dropDups: true },
  phone: { type: String, unique: true, required: true, dropDups: true },
  primary_contact: { type: Boolean, required: true, default: false },
  created_at: { type: Date, 'default': Date.now },
  updated_at: { type: Date, 'default': Date.now }
});

PersonSchema.pre('save', function(next) {
  this.updated_at = new Date();
  next();
});

const PersonModel = mongoose.model('Person', PersonSchema);

module.exports = PersonModel;
