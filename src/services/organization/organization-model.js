'use strict';

// tokenized link to login

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrganizationSchema = new Schema({
  name: { type: String, required: true },
  // type: [
  //   company, non profit, college, other
  // ]
  members: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
  created_at: { type: Date, 'default': Date.now },
  updated_at: { type: Date, 'default': Date.now }
});

OrganizationSchema.pre('save', function(next) {
  this.updated_at = new Date();
  next();
});

const OrganizationModel = mongoose.model('Organization', OrganizationSchema);

module.exports = OrganizationModel;
