import React, { Component } from 'react'; 
import './Products.css';


class Product extends Component {

  render() {

    return (
      <li className="Product" onClick={() => this.props.selectProduct(this.props.product)}>
        <div className="productContain">
          <img alt="Product" src={require(`${this.props.product.img}`)} />
        </div>
      </li>
    );
  }
}

export default Product;
