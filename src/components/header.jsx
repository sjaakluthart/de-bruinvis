import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import logo from '../assets/images/logo.svg';
import { languageSet } from '../actions';

function Header(props) {
  return (
    <header>
      <img src={logo} alt="logo" />
      <section>
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
