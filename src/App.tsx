import React from "react";
import Compliance from "./calendar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Compliance}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
