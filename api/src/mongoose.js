const mongoose = require('mongoose');

mongoose.Promise = global.Promise; //says we want to use promises instead of callbacks

mongoose.connect('mongodb://localhost:27017/artink', { 
    useCreateIndex: true,
    useNewUrlParser: true 
  });


module.exports = {
  mongoose
}