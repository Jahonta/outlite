import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CardMode from './components/CardMode';
import TextMode from './components/TextMode';
import SwitchMode from './components/SwitchMode';

const App = () => {
  // Data and Hooks
  const emptyCard = { 
  id: 0,
  title: "Новая карточка",
  excerpt: "",
  content: "",
  status: false,
};
  const data = JSON.parse(localStorage.getItem('cards')) || [emptyCard];
  const [cards, setCards] = useState(data);
  const [active, setActive] = useState(0);
  const [mode, setMode] = useState(0);

  useEffect(() => {
    putIntoStorage(cards);
  },
  [cards]);

  // Methods
  const putIntoStorage = (cards) => {
    const payload = JSON.stringify(cards);
    localStorage.setItem('cards', payload);
  };

  const getCard = (id, array = cards) => {
    const i = array.findIndex(card => card.id === id);
    if (i !== - 1) return array[i];
    return false;
};

  const getEmptyID = () => {
  for (let i = 1; i < cards.length; i += 1) {
    const j = cards.findIndex(card => card.id === i);
    if (j === -1) {
      return i;
    }
  }
  return cards.length;
};

const updateCards = (obj) => {
  let new_cards = [...cards];
  const i = new_cards.findIndex(card => card.id === obj.id);
  if (i !== -1) {
    new_cards[i] = {...obj};
    
  } else {
    new_cards.push(obj);
  }  
  setActive(obj.id);
  setCards(new_cards);
};

const toggleMode = () => {
  mode === 0 ? setMode(1) : setMode(0);
};

// Handlers

const handleSubmit = (obj) => {
  if (obj.id === 0) {
  obj.id = getEmptyID();
};
  updateCards(obj);
}

const handleStatusChange = (id) => {
  if (id === 0) return;
  const card = getCard(id);
  const temp = {...card};
  temp.status = !temp.status;
  updateCards(temp);
}

const handleClick = (id, action) => {
  switch (action) {
    case 'check':
      handleStatusChange(id);
      break;
    case 'card':
      setActive(id);
      break;    
    case 'delete':
      if (id !== 0) {
        const new_cards = cards.filter(card => card.id !== id);
        setCards(new_cards);
      }
      break;
    case 'create':
      handleSubmit();
      break;
    default:
      break;
  }
}

const handleDrop = (new_cards) => {
  setCards(new_cards);
}

// Render
  return (
    <div className="page">
      <Header />
      <SwitchMode mode={mode} toggleMode={toggleMode}/>
      {mode === 0 ? 
      <CardMode 
        cards={cards}
        active={getCard(active)}
        clickHandler={handleClick}
        dropHandler={handleDrop}
        submitHandler={handleSubmit}
        /> :
        <TextMode 
          cards={cards}
          active={getCard(active)}
          clickHandler={handleClick}
          toCardMode={toggleMode}
        />
    
    }
      
      <Footer />
    </div>
  )
  
}

export default App;
