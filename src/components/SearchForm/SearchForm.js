import React from 'react';
import './SearchForm.css';
import SearchInput from '../ui/SearchInput/SearchInput';
import SearchButton from '../ui/SearchButton/SearchButton';

function SearchForm(props) {
  function handleSearchInput(e) {
    props.setSearch(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    props.handleSearch();
  };

  return (
    <section className='search-form'>
      <h1 className='search-form__title'>Узнать метрики онлайн?</h1>
      <p className='search-form__text'>Заполните интересующие вас метрики и получите результат расчётов.</p>
      <form className='search-form__form' name='search-form' noValidate>
        <SearchInput onChange={handleSearchInput} />
        <span className='form__input-error form__input-error_place_search' id='search-error'></span>
        <SearchButton onClick={handleSubmit} />
      </form>
    </section>
  );
}

export default SearchForm;
