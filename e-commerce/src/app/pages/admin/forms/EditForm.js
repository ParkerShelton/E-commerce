import React, { Component } from 'react'; 
import '../Admin.css';


class EditForm extends Component {

  render() {

    return (
      <form className="EditForm">
        <h2>Edit Product:  </h2>

        <div className="container">
          <label htmlFor="id">What is the product id you want to edit? </label>
          <input name="id" onChange={(e) => this.props.handleChange(e, "id")}/>    
        </div>
          <button className="find" type="button" onClick={() => {this.props.handleFindProduct()}} >Find Product</button>               

        <div className="container">
          <label htmlFor="price">Price:  </label>
          <input value={this.props.formData.price} name="price" onChange={(e) => this.props.handleChange(e, "price")}/>          
        </div>

        <div className="container">
          <label htmlFor="category">Category: </label>
          <input value={this.props.formData.category} name="category" onChange={(e) => this.props.handleChange(e, "category")}/>          
        </div>

        <div className="container">
          <label htmlFor="name">Name: </label>
          <input value={this.props.formData.name} name="name" onChange={(e) => this.props.handleChange(e, "name")}/>          
        </div>        
        
        <div className="container">
          <button onClick={() => {this.props.handleEditSubmit()}} type="button">Edit Product</button>         
        </div>     
      </form>
    );
  }
}

export default EditForm;