'use strict'

const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  caption: {type: String, require: true},
  photoUrl: {type: String, require: false},
  tags: {type: String, require: false},
})

const photoModel = mongoose.model('photo', photoSchema );
module.exports = photoModel;