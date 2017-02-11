import React from 'react';
import logo from '../assets/images/logo.svg';

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <h1>De Bruinvis</h1>
      <h2>Vakantiehuisje</h2>
    </header>
  );
}

export default Header;
