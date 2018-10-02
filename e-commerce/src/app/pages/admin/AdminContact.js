import React, { Component } from 'react'; 
import './Admin.css';


class AdminContact extends Component {

  render() {

    return (
      <li className="AdminContact">
        <div className="topRow">
          <p className="id">Id: {this.props.contact._id}</p>
          <h3 className="subject">"{this.props.contact.subject}"</h3>
        </div>

        <div className="bottomRow">
          <div className="column">
            <p className="fname">First Name: {this.props.contact.firstName}</p>
            <p className="lname">Last Name: {this.props.contact.lastName}</p>
            <p className="email">Email: {this.props.contact.email}</p>
            <p className="feedback">Feedback Type: {this.props.contact.feedbackType}</p>
            <p className="phone">Phone #: {this.props.contact.phone}</p>
          </div>

          <div className="column">
            <p className="comment">{this.props.contact.comment}</p>
          </div>

        </div>
      </li>
    );
  }
}

export default AdminContact;
