import React from 'react';
import './SearchInput.css';

function SearchInput(props) {
  return (
    <select
      className='search-input'
      id='search-input'
      type='text'
      name='keywords'
      placeholder='Введите название приюта'
      onChange={props.onChange}
      required
    >
    {props.children}
    </select>
  );
}

export default SearchInput;
