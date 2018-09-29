const express = require('express');
const bodyParser = require('body-parser');
require('./public/mongoose');

const {Tattoo} = require('./src/models/tattoo');

const app = express();
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const port = 5000;



app.get('/', (req, res, next) => {
  res.send("Hello from root!");
});

//GETS ALL TATTOOS
app.get('/tattoos', (req, res) => {
  Tattoo.find().then(tattoos => {
    res.send(tattoos);
  }).catch(err => res.status(400).send(err));
});

//GETS TATTOO WITH SPECIFIED ID
app.get('/tattoos/:id', (req, res) => {
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
app.post('/tattoos', (req, res) => {

  //you have to make sure the tattoo doesnt exist already, mongoose handles that
  const {id, price, category, name} = req.body;

  console.log(req.body);

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
app.delete('/tattoos/:id', (req, res) => {
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
app.put('/tattoos/:id', (req, res) => {
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



// set the server to listen on port variable
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});