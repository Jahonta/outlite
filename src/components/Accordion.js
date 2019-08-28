import React from 'react';
import CardListCard from './CardListCard';
import NewCard from './NewCard';

const Accordion = (props) => {

  return (
    <div className="Accordion">
      <ul className="CardList">
        {
          props.cards.map((card, i) => {
            return card.id === 0 ? 
            <NewCard
              card={card} 
              key={card.id} 
              onClick={props.clickHandler} 
            /> :
            <CardListCard
            num={i}
            card={card} 
            key={card.id} 
            active={props.active.id === card.id}
            onClick={props.clickHandler}
          />
          }
          )
        }
      </ul>
  </div>
  )
  
}

export default Accordion;