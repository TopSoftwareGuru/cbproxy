import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./Landing";
import Login from "./Login";
import Dev from "./Dev";
import Crypto from "./Crypto";
import Config from './Config/Config';
import Home from './Config/Home';
import CreateXYZAccount from './Config/CreateXYZAccount';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/openid_connect" exact component={Login} />
          <Route path="/dev" exact component={Dev} />
          <Route path="/crypto" exact component={ Crypto } />
          <Route path="/config" exact component={ Config } />
          <Route path="/home" exact component={ Home } />
          <Route path="/new" exact component={ CreateXYZAccount } />
        </Switch>
      </Router>
    );
  }
}

export default App;
