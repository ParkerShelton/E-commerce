import React, { Component } from 'react'; 
import './Admin.css';


class AdminProduct extends Component {

  render() {

    return (
      <li className="AdminProduct">
        <h2>{this.props.product.name}</h2>

        <div>
          <p className="id">Id: {this.props.product._id}</p>
          <p className="price">Price: ${this.props.product.price}</p>
          <p className="category">Category: {this.props.product.category}</p>
        </div>
      </li>
    );
  }
}

export default AdminProduct;
