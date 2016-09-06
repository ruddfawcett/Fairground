'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchoolSchema = new Schema({
  name: { type: String, required: true },
  // contact: { type: Schema.Types.ObjectId, ref: 'Person' },
  borough: { type: String, enum: [
    'MANHATTAN', 'BROOKLYN', 'BRONX', 'QUEENS', 'STATENISLAND'
  ]},
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
  data: {
    // request // for students
    // offer
    // confirmed
  },
  created_at: { type: Date, 'default': Date.now },
  updated_at: { type: Date, 'default': Date.now }
});

SchoolSchema.pre('save', function(next) {
  this.updated_at = new Date();
  next();
});

const SchoolModel = mongoose.model('School', SchoolSchema);

module.exports = SchoolModel;
