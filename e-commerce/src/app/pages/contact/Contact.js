import React, { Component } from 'react';
import FAQ from './FAQ';
import Form from './Form';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <div className="hero">
          <div>
            <h2>Contact Us</h2>
          </div>
          <p>Have a question? You're in the right place.</p>
        </div>

        <FAQ />
        <Form addContactToState={this.props.addContactToState} contacts={this.props.contacts} />
      </div>
    );
  }
}

export default Contact;
