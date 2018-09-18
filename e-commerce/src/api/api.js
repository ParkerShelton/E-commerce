import data from './products.json';
// const url = "http://localhost:5000/";

export function getProducts() {

  return(data.products);

  // return fetch(url)
  // .then(function(response) {
  //   return response.json();
  // });
}

function editProducts() {
  //this will allow an admin to view/add/remove/edit the products
}

function editAdmin() {
  //this will allow an admin to view/add/remove/edit other current admins
}

function contacts() {
  //this will allow an admin to view and remove all contacts sent in from contact form
}