import React from 'react';
import './Footer.css';
import Logo from '../../images/footer/dogcat.svg';

function Footer() {
  return (
    <footer className='footer'>
      <img className='footer__logo' src={Logo} alt='логотип.' />
      <p className='footer__copyright'>&copy; Команда Oreh_mukitkarp</p>
    </footer>
  );
}

export default Footer;
