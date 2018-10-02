const mongoose = require('mongoose'), Schema = mongoose.Schema;

const ContactSchema = new Schema({
    _id: {
      type: Number,
      required: true
    },
    feedbackType: {
      type: String,
      required: true
    },
    subject: {
      type: String,
      required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
    comment: {
        type: String,
        required: true
    },    
});

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = {
    Contact
};