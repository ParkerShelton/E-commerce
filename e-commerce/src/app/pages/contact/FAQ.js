import React, { Component } from 'react';
import faqIcon from '../../img/contact/faqIcon.png';
import './Contact.css';

class FAQ extends Component {

  render() {
    return (
      <div className="FAQ">

        <div className="topRow">
          <img alt="FAQ Icon" src={faqIcon}/>
        </div>

        <ul className="faq">
          <li>
            <p className="q">Do you do custom tattoo designs?</p>
            <p className="a">We do, depending on the design you want it may cost a little extra but just email us and we will contact you with details.</p>
          </li>

          <li>
            <p className="q">Do you sell designs for henna and removable tattoos?</p>
            <p className="a">Not at the moment, but very soon every design we sell will be avaliable as standard tattoos, henna tattoos, and removable tattoos.</p>
          </li>

          <li>
            <p className="q">Would you consider taking design entries?</p>
            <p className="a">No, all designs are created by our team so there aren't any ownership problems</p>
          </li>

          <li>
            <p className="q">Will you ever sell other tattoo products along with designs?</p>
            <p className="a">Yes, eventually we will sell everything needed to take care of your tattoo, apply your henna tattoos, and removable tattoos.</p>
          </li>
        </ul>

      </div>
    );
  }
}

export default FAQ;
