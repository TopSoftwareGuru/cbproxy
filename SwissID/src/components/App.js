import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./Landing";
import Login from "./Login";
import Dev from "./Dev";
import Crypto from "./Crypto";
import Config from './Config/Config';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/login" exact component={Login} />
          <Route path="/dev" exact component={Dev} />
          <Route path="/crypto" exact component={ Crypto } />
          <Route path="/config" exact component={Config} />
        </Switch>
      </Router>
    );
  }
}

export default App;
