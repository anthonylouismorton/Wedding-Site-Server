'use strict';
const express = require('express');
const router = express.Router();
const Invitee = require('../model/invitee');

router.post('/invitee', async (req, res) => {
  try{
    const invitee = req.body;
    const newInvitee = await Invitee.create({
      firstName: invitee.firstName,
      lastName: invitee.lastName,
      sOfirstName: invitee.sOfirstName,
      sOlastName: invitee.sOlastName,
      couple: invitee.couple,
      plusOne: invitee.plusOne,
      plusOneFirstName: invitee.plusOneFirstName,
      plusOneLastName: invitee.plusOneLastName,
      rsvpCode: invitee.rsvpCode,
      rsvp: invitee.rsvp
    });

    res.status(201).send(newInvitee);
  }
  catch(err){
    res.status(500).send('error creating invitee');
  }
});

router.get('/invitee', async (req, res) => {
  try{
    const invitees = await Invitee.find({});

    res.status(200).send(invitees);
  }
  catch(err){
    res.status(400).send(err);
  }
})


router.put('/invitee', async (req, res) => {
  const rsvpCode = req.body.rsvpCode;
  try{
    const updateInvitee = await Invitee.findOne({"rsvpCode": rsvpCode});
    if(!updateInvitee) {
      res.status(400).send('invalid RSVP Code')
    }

    const updatedInvitee = await Invitee.findByIdAndUpdate(updateInvitee._id, req.body);
    res.status(201).send(updatedInvitee);
  }
  catch(err){
    res.status(500).send('error creating invitee');
  }
});

router.delete('/invitee/:rsvpCode', async (req, res) => {
  console.log(req.params.rsvpCode)
  const invitee = await Invitee.findOne({"rsvpCode": req.params.rsvpCode});
  const id = invitee._id
  console.log(id)
  try{
    if(invitee.rsvpCode) {
      await Invitee.findByIdAndDelete(id);
      res.status(204).send('invitee removed');
    }
    else{
      res.status(404).send(`RSVP code ${invitee.rsvpCode} is invalid`);
    }
  }
  catch(err){
    res.status(500).send('error deleting invitee');
  }
});

module.exports = router;