const express = require('express');
const bodyParser = require('body-parser');
require('./public/mongoose');

const {Tattoo} = require('./src/models/tattoo');

const app = express();
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
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
app.post('/admin', (req, res) => {

  //you have to make sure the tattoo doesnt exist already, mongoose handles that
  const {_id, price, category, img, name} = req.body;

    let tattoo = new Tattoo ( {
      _id,
      price,
      category,
      img,
      name
    });
    tattoo.save().then(tattoo => {
      res.send(tattoo);
    }).catch( err => res.status(400).send(err.message));
})



//DELETES TATTOO WITH SPECIFIED ID
app.delete('/tattoos/:id', (req, res) => {
  const id = req.params.id;

  Tattoo.findByIdAndDelete(id).then(tattoo => {
    if (tattoo) {
      return res.send(tattoo);
    } else {
      return res.status(404).send('Unable to find id');
    }
  }).catch(err => res.status(400).send(err));
});


//UPDATES TATTOO WITH SPECIFIED ID
app.put('/tattoos/:id', (req, res) => {
  const id = req.params.id;
  const {_id, price, category, img, name} = req.body;

    Tattoo.findById(id).then(tattoo => {
        if (!tattoo) {
            return res.status(404).send('Unable to find id');
        }
        if(_id) {
            tattoo.set({
                _id
            })
        }
        if (price) {
            tattoo.set({
                price
            })
        }
        if (category) {
            tattoo.set({
                category
            })
        }        
        if (img) {
            tattoo.set({
                img
            })
        }        
        if (name) {
            tattoo.set({
                name
            })
        }        
        tattoo.save().then(updatedTattoo => res.send(updatedTattoo));
    }).catch(err => res.status(400).send(err));
});



// set the server to listen on port variable
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});











// app.get('/getData', (req, res, next) => {
//   let result = [];

//   mongo.connect(url, (err, db) => {
//     assert.equal(null, err);
//     let cursor = db.collection('tattoos').find();

//     cursor.forEach((doc, err) => {
//       assert.equal(null, err);
//       result.push(doc);
//     }, () => {
//       db.close();
//       res.send(result);
//     });

//   });
// });



// app.post('/insertData', (req, res, next) => {
//   let tattoo = {
//     price: req.body.price,
//     category: req.body.category,
//     img: req.body.img,
//     name: req.body.name
//   };

//   mongo.connect(url, (err, db) => {
//     assert.equal(null, err);
//     db.collection('tattoos').insertOne(tattoo, (err, result) => {
//       assert.equal(null, err);
//       console.log("Inserted tattoo!");
//       db.close();
//     });
//   });

//   res.redirect('/');
// });

// app.post('/updateData', (req, res, next) => {
  
// });

// app.post('/deleteData', (req, res, next) => {
  
// });