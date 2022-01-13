'use strict'

const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  photoUrl: {type: String, require: true},
  caption: {type: String, require: false},
  tags: {type: String, require: false},
})

const photoModel = mongoose.model('photo', photoSchema );
module.exports = photoModel;