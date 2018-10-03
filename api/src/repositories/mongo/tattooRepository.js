require('../../mongoose');
const {Tattoo} = require('../../models/mongo/tattoo');

function getAllTattoos() {

  return Tattoo.find().then(tattoos => {
    return tattoos;
  }).catch(err => alert(`STATUS 400: ${err}`));
}

function getSingleTattoo(id) {

  return Tattoo.findById(id).then(tattoo => {
    if(tattoo) {
      return tattoo;
    } else {
      return alert("STATUS 404: UNABLE TO FIND ID");
    }
  }).catch(err => alert(`STATUS 400: ${err}`));  
}

function createTattoo(req) {
  const {id, price, category, name} = req.body;

    let tattoo = new Tattoo ( {
      _id: id,
      price,
      category,
      name
    });

    return tattoo.save().then(tattoo => {
      return tattoo;
    }).catch( err => alert(`STATUS 400: ${err}`));
}

function deleteTattoo(id) {
  
  return Tattoo.findByIdAndDelete(id).then(tattoo => {
    if (tattoo) {
      return tattoo;
    } else {
      return alert("STATUS 404: UNABLE TO FIND ID");
    }
  }).catch(err => alert(`STATUS 400: ${err}`));
}

function updateTattoo(id, req) {
  const {price, category, name} = req.body;

    Tattoo.findById(id).then(tattoo => {  //Tattoo.findById(id).then(tattoo => {
        if (!tattoo) {
            return alert("STATUS 404: UNABLE TO FIND ID");
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
        return tattoo.save().then(updatedTattoo => updatedTattoo);
    }).catch(err => alert(`STATUS 400: ${err}`));
}

module.exports = {
    getAllTattoos,
    getSingleTattoo,
    createTattoo,
    deleteTattoo,
    updateTattoo
};

