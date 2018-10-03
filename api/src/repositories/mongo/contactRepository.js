require('../../mongoose');
const {Contact} = require('../../models/mongo/contact');

function getAllContacts() {
  
  return Contact.find().then(contacts => {
    return contacts;
  }).catch(err => alert(`STATUS 400: ${err}`));
}

function getSingleContact(id) {
  
  return Contact.findById(id).then(contact => {
    if(contact) {
      return tattoo;
    } else {
      return alert("STATUS 404: UNABLE TO FIND ID");
    }
  }).catch(err => alert(`STATUS 400: ${err}`));
}

function createContact(req) {
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

    return contact.save().then(contact => {
      return contact
    }).catch( err => alert(`STATUS 400: ${err}`));  
}


module.exports = {
    getAllContacts,
    getSingleContact,
    createContact
};