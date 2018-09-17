import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';
import './Contact.css';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVerified: false
    };
  }

  recaptchaLoaded = () => {
    console.log("Captcha has loaded successfully");
  }

  handleSubmit = () => {
    if(this.state.isVerified) {
      alert("Message has successfully been sent!");
      //handle rest of submit
    } else {
      alert("Please verify you are human!");
    }
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

        <form onSubmit={this.handleSubmit}>

          <div className="topRow">

            <div className="leftColumn">
              <label for="feedbackType" >Feedback Type</label>
              <select name="feedbackType" className="feedbackType">
                <option>Inquiry</option>  
                <option>Compliment</option>
                <option>Suggestion</option>
                <option>Complaint</option>
              </select>

              <label for="fname">First Name</label>
              <input className="fname" name="fname" type="text" />

              <label for="email">Email Address</label>
              <input className="email" name="email" type="email" />
            </div>

            <div className="rightColumn">
              <label for="subject">Subject</label>
              <input className="subject" name="subject" />

              <label for="lname">Last Name</label>
              <input className="lname" name="lname" type="text" />

              <label for="phone">Phone Number</label>
              <input className="phone" name="phone" type="phone" placeholder="optional" />     
            </div>

          </div>

          <div className="bottomRow">
            <label for="comments" />
            <textarea className="comments" name="comments" placeholder="Comment / Question"></textarea>

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

            <button type="submit">Send</button>   
          </div>

        </form>
      </div>
    );
  }
}

export default Form;
