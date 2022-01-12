'use strict';
const express = require('express');
const router = express.Router();
const Invitee = require('../model/invitee');
const Photo = require('../model/photo');

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
      rsvpCode: invitee.rsvpCode
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
  const id = req.params.id;
  try{
    const updateInvitee = await Invitee.findOne({ _id: id });
    console.log(updateInvitee, "<-----------found you")
    if(!updateInvitee) {
      res.status(400).send('cannot update invitee')
    }

    const updatedInvitee = await Invitee.findByIdAndUpdate(id, req.body);

    res.status(201).send(updatedInvitee);
  }
  catch(err){
    res.status(500).send('error creating invitee');
  }
});

router.delete('/invitee/:id', async (req, res) => {
  const id = request.params.id;
  const rsvp = request.params.email;
  const invitee = await Invitee.findById(id);

  try{
    if(invitee.rsvpCode === rsvp) {
      await Invitee.findByIdAndDelete(id);
      res.status(400).send('invitee removed');
    }
    else{
      res.status(404).send(`RSVP code ${rsvp} is invalid`);
    }
  }
  catch(err){
    res.status(500).send('error deleting invitee');
  }
});

module.exports = router;