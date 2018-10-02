const express = require('express');
const bodyParser = require('body-parser');
require('./mongoose');

const tattooController = require('./controllers/tattooController');
const contactController = require('./controllers/contactController');

const port = 5000;
const app = express();
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/tattoos', tattooController);
app.use('/contacts', contactController);

app.get('/', (req, res, next) => {
  res.send("Hello from root!");
});


// set the server to listen on port variable
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});