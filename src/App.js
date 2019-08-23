import React from 'react';
import TextMode from "./components/TextMode";
import Header from './components/Header';
import Footer from './components/Footer';
import CardMode from './components/CardMode';

const App = () => {
  // Data and Hooks
  const emptyCard = { 
  id: 0,
  title: "Новая карточка",
  excerpt: null,
  content: null,
  status: false,
}
  const data = localStorage.getItem('cards') || [emptyCard];

  return (
    <div className="page">
      <Header />
      <CardMode />
      <Footer />
    </div>
  )
  
}

export default App;
