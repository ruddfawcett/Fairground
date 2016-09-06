'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoothSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  organization: { type: Schema.Types.ObjectId, ref: 'Organization' },
  owners: [{ type: Schema.Types.ObjectId, ref: 'Person' }],
  created_at: { type: Date, 'default': Date.now },
  updated_at: { type: Date, 'default': Date.now }
});

BoothSchema.pre('save', function(next) {
  this.updated_at = new Date();
  next();
});

const BoothModel = mongoose.model('Booth', BoothSchema);

module.exports = BoothModel;
