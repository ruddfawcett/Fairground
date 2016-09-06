'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TagSchema = new Schema({
  name: { type: String, required: true },
  target: { ref: 'School', type: Schema.Types.ObjectId },
  created_at: { type: Date, 'default': Date.now },
  updated_at: { type: Date, 'default': Date.now }
});

TagSchema.pre('save', function(next) {
  this.updated_at = new Date();
  next();
});

const TagModel = mongoose.model('Tag', TagSchema);

module.exports = TagModel;
