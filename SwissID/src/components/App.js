import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./Landing";
import Login from "./Login";
import Dev from "./Dev";
import Crypto from "./Crypto";
import Config from './Config/Config';
import Home from './Config/Home';
import CreateXYZAccount from './Config/CreateXYZAccount';
import TransferIn from './Config/TransferIn';
import TransferOut from './Config/TransferOut';
import Activities from "./Config/Activities";
import UserProfile from './Config/UserProfile';

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
          <Route path="/transfer_in" exact component={ TransferIn } />
          <Route path="/transfer_out" exact component={ TransferOut } />
          <Route path="/activities" exact component={ Activities } />
          <Route path="/profile" exact component={ UserProfile } />
        </Switch>
      </Router>
    );
  }
}

export default App;
