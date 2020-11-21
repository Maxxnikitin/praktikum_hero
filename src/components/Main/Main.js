import React from "react";
import "./Main.css";
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';

function Main(props) {

  return (
    <main className="main">
      <SearchForm />
      <Preloader />
    </main>
  );
}

export default Main;
