import React from 'react';
import phone from '../assets/images/phone.svg';
import mail from '../assets/images/mail.svg';
import location from '../assets/images/location.svg';

function Contact() {
  return (
    <article className="contact">
      <h1>Contact</h1>
      <section>
        <div><img src={phone} alt="phone" /><a href="tel:+31 6 47 25 07 01">+31 6 47 25 07 01</a></div>
        <div><img src={mail} alt="mail" /><a href="mailo:dj.bruin@gmail.com">dj.bruin@gmail.com</a></div>
        <div><img src={location} alt="location" /><p>De Ruyterstraat 104<br /> 1792 AN Oudeschild<br /> Texel</p></div>
      </section>
    </article>
  );
}

export default Contact;
