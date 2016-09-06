'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FairSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  attendees: {
    schools: [{ type: Schema.Types.ObjectId, ref: 'School' }],
    volunteers: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
  },
  booths: [{ type: Schema.Types.ObjectId, ref: 'Booth' }],
  created_at: { type: Date, 'default': Date.now },
  updated_at: { type: Date, 'default': Date.now }
});

FairSchema.pre('save', function(next) {
  this.updated_at = new Date();
  next();
});

const FairModel = mongoose.model('Fair', FairSchema);

module.exports = FairModel;
