import React from 'react';
import phone from '../assets/images/phone.svg';
import mail from '../assets/images/mail.svg';
import location from '../assets/images/location.svg';
import I18n from './i18n';

function Contact() {
  return (
    <article className="contact">
      <h1><I18n text="contact" /></h1>
      <section>
        <div><img src={phone} alt="phone" /><a href="tel:+31 6 29 05 11 37">+31 6 29 05 11 37</a></div>
        <div><img src={mail} alt="mail" /><a href="mailto:bruinvis@brambruin.nl">bruinvis@brambruin.nl</a></div>
        <div><img src={location} alt="location" /><p>De Ruyterstraat 104<br /> 1792 AN Oudeschild<br /> Texel</p></div>
      </section>
    </article>
  );
}

export default Contact;
