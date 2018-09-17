import React, { Component } from 'react';

import Product from './Product';
import Module from './Module';

import { getProducts } from '../../../api/api';
import './Products.css';

class Products extends Component {
  constructor(props) {
    super(props);

    let data = getProducts();

    this.state = {
      products: data,
      selectedProd: null,
      selectedCategory: "all",
      maxPrice: 100
    }
  }

// Telling the module which product clicked on
  selectProduct = (product) => {
    let selectedProd = this.state.selectedProd;
    selectedProd = product;

    this.setState({selectedProd});
  }

// Which category selected to filter
  handleCategory = (event) => {
    if(event.target.className === "category") {
      this.setState({selectedCategory: event.target.value});
      

    } else if(event.target.className === "price") {
      if(isNaN(event.target.value)) {
        event.target.value = "";
      }
      if(event.target.value > 100) {
        event.target.value = 100;
      } 
      this.setState({maxPrice: event.target.value});
    }
  }

// Rendering the products that fit the filter
  renderProducts = () => {
    let selectedCategory = this.state.selectedCategory;

    if(selectedCategory === "all") {
      let productList = this.state.products.filter(product => product.price <= this.state.maxPrice).map((product) => {      
        return <Product key={product.id} product={product} selectProduct={this.selectProduct} />
      });        
      return productList;

    } else {
      let filteredList = this.state.products.filter(product => product.price <= this.state.maxPrice).filter(product => product.category === this.state.selectedCategory).map((product) => {
        return <Product key={product.id} product={product} selectProduct={this.selectProduct} />
      });        
      return filteredList;      
    }
  }

// Renders module when product has been clicked
  renderModule = () => {
    if(this.state.selectedProd === null) {
      return null;

    } else {
      return(
        <Module product={this.state.selectedProd}/>
      );
    }
  }

  render() {

    return (
      <div className="Products">

        <div className="hero">
          <div>
            <h2>PRODUCTS</h2>
          </div>
          <p>Tattoos are forever, so make sure your love for them is too.</p>
        </div>      

        <form className="filter" onSubmit={this.handleSubmit}>
          <p>Category:</p>

          <select className="category" value={this.state.selectedCategory} onChange={(e) => this.handleCategory(e)}>
            <option value="all">All</option>
            <option value="traditional">Traditional</option>
            <option value="realistic">Realistic</option>
            <option value="tribal">Tribal</option>
            <option value="watercolor">Watercolor</option>
            <option value="blackwork">Blackwork</option>
          </select>

          <label htmlFor="price">Max Price</label>
          <input value={this.state.maxPrice} onChange={(e) => this.handleCategory(e)} name="price" className="price" />
        </form>        

        <div className="dividerLine"></div>

        <div className="productContainer">
          {/* {this.renderModule()} */}
          {console.log(this.state.maxPrice)}
          {console.log(this.state.selectedCategory)}
          <ul>
            {this.renderProducts()}
          </ul>
        </div>
        
      </div>
    );
  }
}

export default Products;
