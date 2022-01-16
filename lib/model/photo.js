'use strict'

const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  photoUrl: {type: String, require: true},
  caption: {type: String, require: false},
  tags: {type: Array, require: false},
  category: {type: String, require: true}
})

const photoModel = mongoose.model('photo', photoSchema );
module.exports = photoModel;