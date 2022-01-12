'use strict'

const mongoose = require('mongoose');

const inviteeSchema = new mongoose.Schema({
  firstName: {type: String, require: true},
  lastName: {type: String, require: true},
  sOfirstName: {type: String, require: false},
  sOlastName: {type: String, require: false},
  couple: { type: Boolean, require: true},
  plusOne: { type: Boolean, require: true },
  plusOneFirstName: {type: Boolean, require: false},
  plusOneLastName: {type: Boolean, require: false},
  rsvpCode: { type: String, require: true},
  rsvp: {type: Boolean, require: true}
});

const inviteeModel = mongoose.model('invitee', inviteeSchema );
module.exports = inviteeModel;