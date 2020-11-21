import React from "react";
import "./Main.css";
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import Result from '../Result/Result';

function Main(props) {
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <main className="main">
      <SearchForm />
      {isLoading && <Preloader />}
      {!isLoading && <Result />}
    </main>
  );
}

export default Main;
