import React from 'react';

const CardListCard = ({card, active, onClick}) => {
  const classes = active ? 'CardList-cardContent isActive' : 'CardList-cardContent';
  return (
    <li className="CardList-item" id={card.id} onClick={onClick}>
      <button className="CardList-cardButton btn">
        <span className="CardList-cardTitle">{card.title}</span>
      </button>
      <div className={classes}>
        {card.content}
      </div>
    </li>
  )
}

export default CardListCard;