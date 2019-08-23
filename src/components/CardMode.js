import React from 'react';
import Accordion from './Accordion';
import CardInspector from './CardInspector';

const CardMode = (props) => {

  return (
    <>   
      <nav className="SwitchModeLink">
        Перейти в текстовый режим
        </nav>
      <main className="CardMode">
        <Accordion 
          cards={props.cards}
          active={props.active}
          clickHandler={props.clickHandler}
          dropHandler={props.dropHandler}
        />
        <CardInspector 
          active={props.active}
          clickHandler={props.clickHandler}
          submitHandler={props.submitHandler}
        />      
      </main>
    </>
  )
}

export default CardMode;