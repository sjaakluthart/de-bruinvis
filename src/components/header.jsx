import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import logo from '../assets/images/logo.svg';
import phone from '../assets/images/phone.svg';
import mail from '../assets/images/mail.svg';
import { languageSet } from '../actions';

function Header(props) {
  return (
    <header>
      <img src={logo} alt="logo" />
      <section>
        <a href="tel:+31 6 47 25 07 01"><img src={phone} alt="phone" /></a>
        <a href="mailo:dj.bruin@gmail.com"><img src={mail} alt="mail" /></a>
        <p onClick={() => props.languageSet('nl')}>NL</p>
        <p onClick={() => props.languageSet('de')}>DE</p>
      </section>
    </header>
  );
}

Header.propTypes = {
  languageSet: PropTypes.func.isRequired
};

export default connect(null, { languageSet })(Header);
