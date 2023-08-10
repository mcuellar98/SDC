import React from 'react';
//import logo from '../../../dist/assets/img/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src='/assets/img/logo.png' alt="Company Logo" />
      </div>
      <nav className="main-navigation">
        <ul>
          <li><a href="/">WOMEN</a></li>
          <li><a href="/">MEN</a></li>
          <li><a href="/">BEAUTY</a></li>
          <li><a href="/">HOME</a></li>
        </ul>
      </nav>

      <nav className="user-navigation">
        <ul>
          <li><a href="/">LOG IN</a></li>
          <li><a href="/">HELP</a></li>
          <li><a href="/">FAVORITES</a></li>
          <li><a href="/">SHOPPING BAG</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;