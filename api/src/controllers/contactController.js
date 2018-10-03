const express = require('express');
const router = express.Router();

//MONGO
const { getAllContacts, getSingleContact, createContact } = require('../repositories/mongo/contactRepository');

//MYSQL
//7const { getAllContacts, createContact } = require('../repositories/mysql/contactRep');




//GETS ALL CONTACTS
router.get('/', (req, res) => {
  getAllContacts().then((c) => res.send(c));
});

//GETS SINGLE CONTACT WITH SPECIFIED ID
router.get('/:id', (req, res) => {
  getSingleContact(req.params.id).then((c) => res.send(c));
});

//CREATES NEW CONTACT
router.post('/', (req, res) => {
  createContact(req).then((c) => res.send(c));
})

module.exports = router;