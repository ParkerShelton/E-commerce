import React, { Component } from 'react'; 
import AdminProduct from './AdminProduct';
import AdminContact from './AdminContact';
import AddForm from './forms/AddForm';
import RemoveForm from './forms/RemoveForm';
import EditForm from './forms/EditForm';
import './Admin.css';

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedForm: "add",
      formData: {
        id: null,
        price: "",
        category: "",
        name: ""
      }
    };
  }


  handleChange = (e, name) => {
    let formData = this.state.formData;

    formData[name] = e.target.value;
    this.setState({formData});
  }

  handleAddSubmit = () => {
    let formData = this.state.formData;
    let newId = (this.props.products[this.props.products.length - 1]._id + 1);

    formData.id = newId;
    this.setState({formData});

    fetch('http://localhost:5000/tattoos', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.formData)
    }).then((res) => {
      return res.json(); 
    }).then((resJSON) => {
      this.props.addProductToState(resJSON);
    });
  }

  handleRemoveSubmit = (e) => {
    let url = `http://localhost:5000/tattoos/${this.state.formData.id}`;

    fetch(url, {
      method: 'DELETE',
    }).then(res => {
      return res.json();
    }).then(resJSON => {
      this.props.removeProductFromState(resJSON);
    });
  }


  handleEditSubmit = (e) => {
    let url = `http://localhost:5000/tattoos/${this.state.formData.id}`;

    fetch(url, {
      method: 'PUT',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.formData)
    }).then(res => {
      return res.json();
    }).then((resJSON) => {
      this.props.updateProductInState(resJSON);
    });
  }


  handleFindProduct = () => {
    let url = `http://localhost:5000/tattoos/${this.state.formData.id}`;
    let formData = this.state.formData;

    fetch(url)
      .then((res) => {
        return res.json();

      }).then((resJSON) => {
        formData.price = resJSON.price;
        formData.category = resJSON.category;
        formData.name = resJSON.name;
        return formData;

      }).then(() => {
        this.setState({formData});
        console.log(this.state.formData);
      });
  }

  handleFormChange = (e) => {
    let selectedForm = this.state.selectedForm;
    selectedForm = e.target.value;

    this.setState({selectedForm});
    console.log(selectedForm);
  }

  renderAdminProducts = () => {
    if(this.props.products !== null) {
      let productList = this.props.products.map((product) => {      
        return <AdminProduct key={product._id} product={product} />
      });        
      return productList;
    
    } else {
      return null;
    }      
  }

  renderContacts = () => {
    if(this.props.contacts !== null) {
      let contactList = this.props.contacts.map((contact) => {
        return <AdminContact key={contact._id} contact={contact} />
      });
      return contactList;

    } else {
      return null;
    }
  }

  renderForm = () => {
    if(this.state.selectedForm === "add") {
      return <AddForm handleChange={this.handleChange} handleAddSubmit={this.handleAddSubmit} />

    } else if(this.state.selectedForm === "remove") {
      return <RemoveForm handleChange={this.handleChange} handleRemoveSubmit={this.handleRemoveSubmit} />

    } else if(this.state.selectedForm === "edit") {
      return <EditForm formData={this.state.formData} handleFindProduct={this.handleFindProduct} handleChange={this.handleChange} handleEditSubmit={this.handleEditSubmit} />
    }
  }


  render() {

    return (
      <div className="Admin">

        <div className="products">
          <h2 className="title">Products</h2>

          <div className="leftColumn">
            <div className="prompt">
              <div className="selectContainer">
                <label htmlFor="select">What would you like to do?</label>
                <select name="select" onChange={(e) => {this.handleFormChange(e)}} >
                  <option value="add">Add Product</option>
                  <option value="remove">Remove Product</option>
                  <option value="edit">Edit Product</option>
                </select>
              </div>
            </div>
            
            {this.renderForm()}
          </div>

          <div className="rightColumn">
            <div className="productList">
              {this.renderAdminProducts()}
            </div>
          </div>
        </div>

        <div className="contacts">
          <h2 className="title">Contacts</h2>

          <div className="contactList">
            {this.renderContacts()}
          </div>
        </div>

      </div>
    );
  }
}

export default Admin;
