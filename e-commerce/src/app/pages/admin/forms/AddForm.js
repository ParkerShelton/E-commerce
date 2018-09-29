import React, { Component } from 'react'; 
import '../Admin.css';


class AddForm extends Component {

  render() {

    return (
      <form className="AddForm">
        <h2>Add Product:  </h2>
        <div className="container">
          <label htmlFor="price">Price</label>
          <input name="price" onChange={(e) => this.props.handleChange(e, "price")}/>          
        </div>

        <div className="container">
          <label htmlFor="category">Category</label>
          <input name="category" onChange={(e) => this.props.handleChange(e, "category")}/>          
        </div>

        <div className="container">
          <label htmlFor="name">Name</label>
          <input name="name" onChange={(e) => this.props.handleChange(e, "name")}/> 
        </div>

        <div className="container">
          <button onClick={() => {this.props.handleAddSubmit()}} type="button">Add Product</button>         
        </div>     
      </form>
    );
  }
}

export default AddForm;