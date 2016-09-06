'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  name: {
    first: { type: String, required: true },
    last: { type: String, required: true }
  },
  email: { type: String, lowercase: true, trim: true, required: true, unique: true, dropDups: true },
  password: { type: String, required: true },
  created_at: { type: Date, 'default': Date.now },
  updated_at: { type: Date, 'default': Date.now }
});

AdminSchema.pre('save', function(next) {
  this.updated_at = new Date();
  next();
});

const AdminModel = mongoose.model('Admin', AdminSchema);

module.exports = AdminModel;
