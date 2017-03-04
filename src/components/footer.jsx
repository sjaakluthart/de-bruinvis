import React from 'react';
import I18n from './i18n';

function Footer() {
  return (
    <footer>
      <section>
        <div>
          <h1>De Bruinvis</h1>
          <div>
            <p>Texel</p>
            <p>Oudeschild</p>
            <p><I18n text="home" /></p>
            <p><I18n text="fish" /></p>
            <p><I18n text="authentic" /></p>
            <p><I18n text="attractively" /></p>
            <p><I18n text="children" /></p>
            <p><I18n text="calm" /></p>
            <p><I18n text="cozy" /></p>
            <p><I18n text="space" /></p>
          </div>
        </div>
        <div>
          <h1><I18n text="location" /></h1>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2399.250997657936!2d4.8404923154201835!3d53.033826205775206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47cf3133342f8c91%3A0x2abc45229ed5efd6!2sDe+Ruyterstraat+104%2C+1792+AN+Oudeschild!5e0!3m2!1sen!2snl!4v1487423914950" width="100%" height="350" frameBorder="0" style={{ border: 0 }} allowFullScreen />
        </div>
      </section>
    </footer>
  );
}

export default Footer;
