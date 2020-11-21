import React from 'react';
import './Preloader.css';

function Preloader() {
  return (
    <section className='preloader'>
      <i className='preloader__circle'></i>
      <p className='preloader__text'>Подождите, ваш запрос обрабатыается...</p>
    </section>
  );
}

export default Preloader;
