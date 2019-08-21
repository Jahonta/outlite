import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Accordion from './Accordion';
import CardInspector from './CardInspector';
import fakeCards from "../fakeCards";

const CardMode = () => {
    const initialState = {
    activeID: null,
    activeCard: {
      title: "some title",
      content: 'some content'
    }
  };

  const [state, setState] = useState(initialState);

  const handleClick = (e) => {
    const newActive = parseInt(e.target.closest('.CardList-item').id, 10);
    if (newActive === state.activeID) {
      setState(initialState);
    } else {
      console.log(state.activeCard);
      setState({
            activeID: newActive,
            activeCard: fakeCards.find(card => card.id === newActive)
          });
    }
    
  }
  return (
    <div className="page">
      <Header />    
      <nav className="SwitchModeLink">
        <Link to="/textmode">Switch to the text mode</Link>
        </nav>
      <main className="CardMode">
        <Accordion cards={fakeCards} active={state.activeID} handler={handleClick}/>
        <CardInspector card={state.activeCard}/>        
      </main>
      <Footer />
    </div>
  )
}

export default CardMode;