const mongoose = require('mongoose');

const TattooSchema = new mongoose.Schema({
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
    img: {
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