const express = require('express');
const router = express.Router();

const {Tattoo} = require('../models/mongo/tattoo');

//MONGO
const { getAllTattoos, getSingleTattoo, createTattoo, deleteTattoo, updateTattoo } = require('../repositories/mongo/tattooRepository');




//GETS ALL TATTOOS
router.get('/', (req, res) => {
  getAllTattoos().then((c) => res.send(c));
});

//GETS SINGLE TATTOO WITH SPECIFIED ID
router.get('/:id', (req, res) => {
  getSingleTattoo(req.params.id).then((c) => res.send(c));
});

//CREATES NEW TATTOO
router.post('/', (req, res) => {
  createTattoo(req).then((c) => res.send(c));
})

//DELETES TATTOO WITH SPECIFIED ID
router.delete('/:id', (req, res) => {
  deleteTattoo(req.params.id).then((c) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(c)
  });
});

//UPDATES TATTOO WITH SPECIFIED ID
router.put('/:id', (req, res) => {
  updateTattoo(eq.params.id, req).then((c) => res.send(c));
});

module.exports = router;