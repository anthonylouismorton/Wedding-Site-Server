'use strict';
const express = require('express');
const router = express.Router();
const Photo = require('../model/photo');

router.post('/photo', async (req, res) => {
  try{
    const photo = req.body;
    const newphoto = await Photo.create({
      photoUrl: photo.photoUrl,
      caption: photo.caption,
      tags: photo.tags,
      category: photo.category
    });

    res.status(201).send(newphoto);
  }
  catch(err){
    res.status(500).send('error adding photo');
  }
});

router.get('/photo', async (req, res) => {
  try{
    const photos = await Photo.find({});
    res.status(200).send(photos);
  }
  catch(err){
    res.status(400).send(err);
  }
})

router.get('/photo/:id', async (req, res) => {
  const id = req.params.id;
  try{
    const photo = await Photo.findById(id);
    res.status(200).send(photo);
  }
  catch(err){
    res.status(400).send(err);
  }
})


router.put('/photo', async (req, res) => {
  try{
    const updatephoto = await Photo.findByIdAndUpdate(req.body._id, req.body);
    res.status(201).send(updatephoto);
  }
  catch(err){
    res.status(500).send('error updating photo');
  }
});

router.delete('/photo/:id', async (req, res) => {
  const id = req.params.id
  try{
    await Photo.findByIdAndDelete(id);
    res.status(204).send('photo removed');
  }
  catch(err){
    res.status(500).send('error deleting photo');
  }
});

module.exports = router;