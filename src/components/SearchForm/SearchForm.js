import React from 'react';
import './SearchForm.css';
import SearchInput from '../ui/SearchInput/SearchInput';
import SearchButton from '../ui/SearchButton/SearchButton';

function SearchForm(props) {
  /* function handleSearchInput(e) {
    props.setSearch(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    props.handleSearch();
  }; */

  return (
    <section className='search-form'>
      <h1 className='search-form__title'>Просмотр метрик</h1>
      <p className='search-form__text'>Введите название приюта и получите информацию о его обороте, а также рекомендацию по установлению стоимости</p>
      <form className='search-form__form' name='search-form' noValidate>
        <SearchInput /* onChange={handleSearchInput} */>
          <option selected value='выберите приют' disabled>Выберите приют</option>
          <option value='Добрые сердца'>Добрые сердца</option>
          <option value='Кот и Пёс'>Кот и Пёс</option>
          <option value='Кошачий приют "ДОМИК"'>Кошачий приют "ДОМИК"</option>
          <option value='Лёхин дом'>Лёхин дом</option>
          <option value='Люськин дом'>Люськин дом</option>
          <option value='Матроскин'>Матроскин</option>
          <option value='Приют для кошек "Потеряшка"'>Приют для кошек "Потеряшка"</option>
          <option value='Приют для кошек "ЯрКот"'>Приют для кошек "ЯрКот"</option>
          <option value='Самарский приют для животных "НадеждА"'>Самарский приют для животных "НадеждА"</option>
          <option value='Убежище'>Убежище</option>
          <option value='ФлагманВет'>ФлагманВет</option>
          <option value='Центральный приют Спб для бездомных кошек!'>Центральный приют Спб для бездомных кошек!</option>
        </SearchInput>
        <span className='form__input-error form__input-error_place_search' id='search-error'></span>
        <SearchButton /* onClick={handleSubmit} */ />
      </form>
    </section>
  );
}

export default SearchForm;
