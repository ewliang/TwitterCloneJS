'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    bio: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('User', UserSchema);
