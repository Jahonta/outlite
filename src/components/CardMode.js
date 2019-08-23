import React from 'react';
import Accordion from './Accordion';
import CardInspector from './CardInspector';

const CardMode = () => {
   
  return (
    <>   
      <nav className="SwitchModeLink">
        Switch to the text mode
        </nav>
      <main className="CardMode">
        <Accordion />
        <CardInspector />        
      </main>
    </>
  )
}

export default CardMode;