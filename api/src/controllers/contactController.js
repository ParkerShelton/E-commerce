const express = require('express');
const router = express.Router();

const {Contact} = require('../models/contact');

//GETS ALL CONTACTS
router.get('/', (req, res) => {
  Contact.find().then(contacts => {
    res.send(contacts);
  }).catch(err => res.status(400).send(err));
});

//CREATES NEW TATTOO
router.post('/', (req, res) => {
  const {id, feedbackType, subject, firstName, lastName, email, phone, comment} = req.body;

    let contact = new Contact ( {
      _id: id,
      feedbackType: feedbackType,
      subject: subject,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      comment: comment
    });
    contact.save().then(contact => {
      res.send(contact);
    }).catch( err => {
      res.status(400).send(err.message)
    });
})

module.exports = router;