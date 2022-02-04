'use strict'

const mongoose = require('mongoose');

const inviteeSchema = new mongoose.Schema({
  firstName: {type: String, require: true},
  lastName: {type: String, require: true},
  sOfirstName: {type: String, default: null, require: false},
  sOlastName: {type: String, default: null, require: false},
  couple: { type: Boolean, require: true},
  plusOne: { type: Boolean, require: true },
  plusOneFirstName: {type: String, default: null, require: false},
  plusOneLastName: {type: String, default: null, require: false},
  rsvpCode: { type: String, require: true},
  rsvp: {type: Boolean, require: true},
  rsvpSend: {type: Boolean, default: false, require: false },
  email: {type: String, require: false}
});

const inviteeModel = mongoose.model('invitee', inviteeSchema );
module.exports = inviteeModel;