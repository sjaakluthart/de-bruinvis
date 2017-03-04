import React from 'react';
import Mailto from 'react-mailto';
import phone from '../assets/images/phone.svg';
import mail from '../assets/images/mail.svg';
import location from '../assets/images/location.svg';
import I18n from './i18n';

function Contact() {
  return (
    <article className="contact">
      <h1><I18n text="contact" /></h1>
      <section>
        <div><img src={phone} alt="phone" /><a href="tel:+31 6 47 25 07 01">+31 6 47 25 07 01</a></div>
        <div><img src={mail} alt="mail" /><Mailto email="dj.bruin@gmail.com" obfuscate>dj.bruin@gmail.com</Mailto></div>
        <div><img src={location} alt="location" /><p>De Ruyterstraat 104<br /> 1792 AN Oudeschild<br /> Texel</p></div>
      </section>
    </article>
  );
}

export default Contact;
