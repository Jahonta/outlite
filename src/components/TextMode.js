import React from 'react';
import { Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';


const TextMode = () => {
  return (
    <div className="page">
      <Header />    
      <nav className="SwitchModeLink">
        <Link to="/cardmode">Switch to the card mode</Link>
        </nav>
      <main className="TextMode">
        TextMode
      </main>
      <Footer />
    </div>
  )
}

export default TextMode;