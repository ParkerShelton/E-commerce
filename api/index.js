import data from './products.json';

// The dependencies
const express = require('express');
const app = express();

// from top level path (localhost:5000) this response will be sent
// url: http://localhost:5000/
app.get('/', (request, response) => { 
      
    response.json([
      {
        "id": 0,
        "bandName": "Metallica",
        "albumName": "Master of Puppets",
        "genre": "Metal"
      }
    ])}
);


// set the server to listen on port 5000
app.listen(5000, () => console.log("Listening on port 5000"));