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
      <h2 className='result__title'>Результат вашего запроса</h2>
      <div className='result__container'>
        <ResultCard
          src={catDay}
          imgClass='card__img_size'
          title='Данные по продукту: КотоДень'
          textCount='Рекомендуемая стоимость набора: '
          textCountMoney={mok.catDayCount}
          textTurnover='Оборот за предыдущий месяц: '
          textTurnoverMoney={mok.catDayTurnover}
          textPredict='Прогнозируемый оборот: '
          textPredictMoney={mok.catDayPredict}
        />
        <ResultCard
          src={catWeek}
          title='Данные по продукту: КотоНеделя'
          textCount='Рекомендуемая стоимость набора: '
          textCountMoney={mok.catWeekCount}
          textTurnover='Оборотза предыдущий месяц: '
          textTurnoverMoney={mok.catWeekTurnover}
          textPredict='Прогнозируемый оборот: '
          textPredictMoney={mok.catWeekPredict}
        />
        <ResultCard
          src={catMonth}
          title='Данные по продукту: КотоМесяц'
          textCount='Рекомендуемая стоимость набора: '
          textCountMoney={mok.catMonthCount}
          textTurnover='Оборот за предыдущий месяц: '
          textTurnoverMoney={mok.catMonthTurnover}
          textPredict='Прогнозируемый оборот: '
          textPredictMoney={mok.catMonthPredict}
        />
      </div>
    </section>
  );
}

export default Result;
