import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';
import './Contact.css';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVerified: false,
      contact: {
        id: null,
        feedbackType: "inquiry",
        subject: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        comment: ""
      }
    };
  }

  recaptchaLoaded = () => {
    console.log("Captcha has loaded successfully");
  }

  handleSubmit = () => {
    if(this.state.isVerified) {
      let contact = this.state.contact;
      let newId = (this.props.contacts[this.props.contacts.length - 1]._id + 1);
      
      contact.id = newId;
      this.setState({contact});

      fetch('http://localhost:5000/contacts', {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state.contact)
      }).then((res) => {
        return res.json(); 
      }).then((resJSON) => {
        this.props.addContactToState(resJSON);
        console.log(this.props.contacts);
      });

    } else {
      alert("Please verify you are human!");
    }
  }

  handleChange = (e, name) => {
    let contact = this.state.contact;

    contact[name] = e.target.value;
    this.setState({contact});
  }

  verifyCallback = (response) => {
    if(response) {
      this.setState({isVerified: true});
    }
  }

  render() {
    return (
      <div className="Form">
        <h2>Leave a Message</h2>

        <form>

          <div className="topRow">

            <div className="leftColumn">
              <label htmlFor="feedbackType" >Feedback Type</label>
              <select onChange={(e) => this.handleChange(e, "feedbackType")} name="feedbackType" className="feedbackType">
                <option value="inquiry">Inquiry</option>  
                <option value="compliment">Compliment</option>
                <option value="suggestion">Suggestion</option>
                <option value="complaint">Complaint</option>
              </select>

              <label htmlFor="fname">First Name</label>
              <input onChange={(e) => this.handleChange(e, "firstName")} className="fname" name="fname" type="text" />

              <label htmlFor="email">Email Address</label>
              <input onChange={(e) => this.handleChange(e, "email")} className="email" name="email" type="email" />
            </div>

            <div className="rightColumn">
              <label htmlFor="subject">Subject</label>
              <input onChange={(e) => this.handleChange(e, "subject")} className="subject" name="subject" />

              <label htmlFor="lname">Last Name</label>
              <input onChange={(e) => this.handleChange(e, "lastName")} className="lname" name="lname" type="text" />

              <label htmlFor="phone">Phone Number</label>
              <input onChange={(e) => this.handleChange(e, "phone")} className="phone" name="phone" type="phone" placeholder="optional" />     
            </div>

          </div>

          <div className="bottomRow">
            <label htmlFor="comments" />
            <textarea onChange={(e) => this.handleChange(e, "comment")} className="comments" name="comments" placeholder="Comment / Question"></textarea>

            <div className="newsletter">
              <input type="checkbox" />
              <p>Yes, I am at least 18 years of age and sign me up for the exclusive newsletter.</p>
            </div>

            <div className="captcha">
              <Recaptcha
                sitekey="6Lc7knAUAAAAAB9AX4LvTtY529exktQVTrcMICaO"
                render="explicit"
                onloadCallback={this.recaptchaLoaded}
                verifyCallback={this.verifyCallback}
                // theme="dark"
              />             
            </div>

            <button onClick={this.handleSubmit} type="button">Send</button>
          </div>

        </form>
      </div>
    );
  }
}

export default Form;
