import React from "react";
import "./Result.css";
import ResultCard from '../ResultCard/ResultCard';
import catDay from '../../images/result-card/cat-day.png'
import catWeek from '../../images/result-card/cat-week.png'
import catMonth from '../../images/result-card/cat-month.png'
import mok from '../../utils/mok';

function Result() {

  return (
    <section className="result">
      <h2 className='result__title'>Результат запроса</h2>
      <div className='result__container'>
        <ResultCard
          src={catDay}
          link='https://public.tableau.com/profile/dmitri1983#!/vizhome/TeddyFood_dashboard_example/Dashboard1?publish=yes'
          imgClass='card__img_size'
          title='Данные по продукту: КотоДень'
          textCount='Рекомендуемая цена набора: '
          textCountMoney={mok.catDayCount}
          textTurnover='Оборот за предыдущий месяц: '
          textTurnoverMoney={mok.catDayTurnover}
          textPredict='Прогнозируемый оборот: '
          textPredictMoney={mok.catDayPredict}
          tooltip='Кликните для получения более подробной информации'
        />
        <ResultCard
          src={catWeek}
          link='https://public.tableau.com/profile/dmitri1983#!/vizhome/TeddyFood_dashboard_example/Dashboard1?publish=yes'
          title='Данные по продукту: КотоНеделя'
          textCount='Рекомендуемая цена набора: '
          textCountMoney={mok.catWeekCount}
          textTurnover='Оборот за предыдущий месяц: '
          textTurnoverMoney={mok.catWeekTurnover}
          textPredict='Прогнозируемый оборот: '
          textPredictMoney={mok.catWeekPredict}
          tooltip='Кликните для получения более подробной информации'
        />
        <ResultCard
          src={catMonth}
          link='https://public.tableau.com/profile/dmitri1983#!/vizhome/TeddyFood_dashboard_example/Dashboard1?publish=yes'
          title='Данные по продукту: КотоМесяц'
          textCount='Рекомендуемая цена набора: '
          textCountMoney={mok.catMonthCount}
          textTurnover='Оборот за предыдущий месяц: '
          textTurnoverMoney={mok.catMonthTurnover}
          textPredict='Прогнозируемый оборот: '
          textPredictMoney={mok.catMonthPredict}
          tooltip='Кликните для получения более подробной информации'
        />
      </div>
    </section>
  );
}

export default Result;
