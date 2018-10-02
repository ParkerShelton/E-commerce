const express = require('express');
const router = express.Router();

const {Tattoo} = require('../models/tattoo');

//GETS ALL TATTOOS
router.get('/', (req, res) => {
  Tattoo.find().then(tattoos => {
    res.send(tattoos);
  }).catch(err => res.status(400).send(err));
});

//GETS TATTOO WITH SPECIFIED ID
router.get('/:id', (req, res) => {
  const id = req.params.id; 

  Tattoo.findById(id).then(tattoo => {
    if(tattoo) {
      res.send(tattoo);
    } else {
      res.status(404).send('Unable to find id');
    }
  }).catch(err => res.status(400).send(err));
});

//CREATES NEW TATTOO
router.post('/', (req, res) => {
  const {id, price, category, name} = req.body;

    let tattoo = new Tattoo ( {
      _id: id,
      price,
      category,
      name
    });
    tattoo.save().then(tattoo => {
      res.send(tattoo);
    }).catch( err => {
      res.status(400).send(err.message)
    });
})

//DELETES TATTOO WITH SPECIFIED ID
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Tattoo.findByIdAndDelete(id).then(tattoo => {
    if (tattoo) {
      res.setHeader('Content-Type', 'application/json');
      return res.send(tattoo);
    } else {
      return res.status(404).send('Unable to find id');
    }
  }).catch(err => res.status(400).send(err));
});

//UPDATES TATTOO WITH SPECIFIED ID
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const {price, category, name} = req.body;

    Tattoo.findById(id).then(tattoo => {  //Tattoo.findById(id).then(tattoo => {
        if (!tattoo) {
            return res.status(404).send('Unable to find id');
        }
        if (price) {
            tattoo.price = price;
        }
        if (category) {
            tattoo.category = category;
        }        
        if (name) {
            tattoo.name = name;
        }        
        tattoo.save().then(updatedTattoo => res.send(updatedTattoo));
        console.log(tattoo);
    }).catch(err => res.status(400).send(err));
});

module.exports = router;