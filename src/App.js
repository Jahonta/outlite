import React, { useState } from 'react';
import './styles/styles.scss';

import Nav from './nav'
import Aside from './aside';
import Cardmode from './cardmode';
import Textmode from './textmode';


const App = () => {
  const [mode, setMode] = useState('card');

  return (
    <div className="page">
      <Aside />
      <main className="main">
        <Nav />
      {mode === 'card' &&
      <Cardmode />
      }
      {mode === 'text' &&
      <Textmode />
    }
      </main>
      
    </div>
  )
}

export default App;
