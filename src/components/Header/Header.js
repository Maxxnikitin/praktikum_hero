import React from "react";
import "./Header.css";

function Header(props) {

  return (
    <header className="header">
      <a href='https://teddyfood.com/ru/' target='_blank' rel='noreferrer' className='header__logo'>TF</a>
      <p className='header__user-name'>user@teddyfood.ru</p>
    </header>
  );
}
export default Header;
