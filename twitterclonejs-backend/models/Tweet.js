'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TweetSchema = new Schema(
  {
    content: {
      type: String,
      unique: true
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Tweet', TweetSchema);
