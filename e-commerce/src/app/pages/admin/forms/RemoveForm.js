import React, { Component } from 'react'; 
import '../Admin.css';


class RemoveForm extends Component {

  render() {

    return (
      <form className="RemoveForm">
        <h2>Remove Product:  </h2>
        <div className="container">
          <label htmlFor="id">What is the products id? </label>
          <input name="id" onChange={(e) => this.props.handleChange(e, "id")}/>          
        </div>

        
        <div className="container">
          <button onClick={() => this.props.handleRemoveSubmit()} type="button">Remove Product</button>         
        </div>     
      </form>
    );
  }
}

export default RemoveForm;