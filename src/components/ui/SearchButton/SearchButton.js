import React from 'react';
import './SearchButton.css';

function SearchButton(props) {
  return (
    <button className='search-button' type='button' onClick={props.onClick}>Искать</button>
  );
}

export default SearchButton;
