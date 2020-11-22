import React from "react";
import "./ResultCard.css";

function ResultCard(props) {
  const [cardButtonMouseEnter, setCardButtonMouseEnter] = React.useState(false);

  const tooltipClassList = `${
    cardButtonMouseEnter
      ? "card__tooltip card__tooltip_active"
      : "card__tooltip "
  }`;

  function handleCardButtonMouseEnter() {
    setCardButtonMouseEnter(true);
  }

  function handleCardButtonMouseLeave() {
    setCardButtonMouseEnter(false);
  }

  return (
    <article className="card">
      <a
        className="card__link"
        href={props.link}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={handleCardButtonMouseEnter}
        onMouseLeave={handleCardButtonMouseLeave}
      >
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
        <div className={tooltipClassList}>{props.tooltip}</div>
      </a>
    </article>
  );
}

export default ResultCard;
