const mongoose = require('mongoose'), Schema = mongoose.Schema;

const TattooSchema = new Schema({
    _id: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    name: {
        type: String,
        required: true
    }
});


const Tattoo = mongoose.model('Tattoo', TattooSchema);

module.exports = {
    Tattoo
};