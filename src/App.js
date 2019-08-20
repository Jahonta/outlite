import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CardMode from './CardMode';
import SwitchModeLink from './SwitchModeLink'

const App = () => {
  return (
    <div className="container page">
      <Header />
      <SwitchModeLink />
      <CardMode />
      <Footer />
    </div>
  )
  
}

export default App;
