import React from 'react';
import CardListCard from './CardListCard';

const Accordion = ({cards, active, handler}) => {
  return (
    <div className="Accordion">
      <ul className="CardList">
        {
          cards.map((card) => {
            return (
              <CardListCard 
            card={card} 
            key={card.id} 
            active={active === card.id}
            onClick={handler}
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