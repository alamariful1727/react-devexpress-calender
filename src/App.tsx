import React from 'react';
import Calendar from './calendar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Calendar}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
