import React, { Component } from 'react'; 
import './Products.css';


class Product extends Component {

  render() {

    return (
      <li className="Product" onClick={() => this.props.selectProduct(this.props.product)}>
        <div className="productContain">
          {/* {console.log(this.props.img)} */}
          <img alt="Product" src={"/img/product/seaCompass.jpg"} />
        </div>
      </li>
    );
  }
}

export default Product;
