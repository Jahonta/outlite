import React from 'react';
import { Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';


const CardMode = () => {
  return (
    <div className="page">
      <Header />    
      <nav className="SwitchModeLink">
        <Link to="/textmode">Switch to the text mode</Link>
        </nav>
      <main className="CardMode">
        <div className="Accordion">
          Accordion

        </div>
        <div className="SingleCard">
          SingleCard
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default CardMode;