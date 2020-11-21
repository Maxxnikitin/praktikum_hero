import React from 'react';
import './SearchInput.css';

function SearchInput(props) {
  return (
    <input
      className='search-input'
      id='search-input'
      type='text'
      name='keywords'
      placeholder='Введите данные'
      onChange={props.onChange}
      required
    />
  );
}

export default SearchInput;
