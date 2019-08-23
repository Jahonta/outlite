import React from 'react';
import CardListCard from './CardListCard';

const Accordion = (props) => {
  return (
    <div className="Accordion">
      <ul className="CardList">
        {
          props.cards.map((card, i) => {
            return (
              <CardListCard
            num = {i}
            card={card} 
            key={card.id} 
            active={props.active.id === card.id}
            onClick={props.clickHandler}
          />
            )
          
          }
          )
        }
      </ul>
  </div>
  )
  
}

export default Accordion;