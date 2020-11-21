import React from "react";
import "./ResultCard.css";

function ResultCard(props) {

  return (
    <article className="card">
      <a className="card__link" href={props.link} target="_blank" rel="noreferrer">
        <img
          className='card__img'
          src={props.src}
          alt="изображение продукции приюта."
        />
        <div className="card__container">
          <h3 className="card__title">{props.title}</h3>
          <p className="card__text">{props.textCount}
            <span className='card__text-count'>{props.textCountMoney}</span>
          </p>
          <p className="card__text">{props.textTurnover}
            <span className='card__text-count'>{props.textTurnoverMoney}</span>
          </p>
          <p className="card__text">{props.textPredict}
            <span className='card__text-count'>{props.textPredictMoney}</span>
          </p>
        </div>
      </a>
    </article>
  );
}

export default ResultCard;
