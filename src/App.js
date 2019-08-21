import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TextMode from "./TextMode";
import CardMode from './CardMode';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={CardMode} exact/>
        <Route path="/cardmode" component={CardMode} exact/>
        <Route path="/textmode" component={TextMode} exact/>
      </Switch>
    </Router>
  )
  
}

export default App;
