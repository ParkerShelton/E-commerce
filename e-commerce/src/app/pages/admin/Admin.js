import React, { Component } from 'react'; 
import './Admin.css';


class Admin extends Component {

  render() {

    return (
      <div className="Admin">
        <div className="prompt">
          <label htmlFor="select">What would you like to do?</label>
          <select name="select">
            <option>Add Product</option>
            <option>Remove Product</option>
            <option>Edit Product</option>
          </select>
        </div>


        <form action="localhost:5000/admin" method="post">
          <label htmlFor="_id">Id</label>
          <input name="_id"/>

          <label htmlFor="price">Price</label>
          <input name="price"/>          

          <label htmlFor="category">Category</label>
          <input name="category"/>          

          <label htmlFor="img">Image</label>
          <input name="img"/>

          <label htmlFor="name">Name</label>
          <input name="name"/> 

          <button type="submit">Add Product</button>         
        </form>
      </div>
    );
  }
}

export default Admin;
