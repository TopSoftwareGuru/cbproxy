import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './pages/Landing';
import Config from './pages/Config';
import Home from './pages/Home';
import CreateAccount from './pages/CreateAccount';
import TransferIn from './pages/TransferIn';
import TransferOut from './pages/TransferOut';
import Activities from './pages/Activities';
import UserProfile from './pages/UserProfile';
import Withdraw from './pages/Withdraw';


class App extends Component {
  render() { 
    return ( 
      <Router>
        <Switch>
          <Route path="/" exact component={ Landing } />
          <Route path="/config" exact component={ Config } />
          <Route path="/home" exact component={ Home } />
          <Route path="/new" exact component={ CreateAccount } />
          <Route path="/transfer_in" exact component={ TransferIn } />
          <Route path="/transfer_out" exact component={ TransferOut } />
          <Route path="/activities" exact component={ Activities } />
          <Route path="/profile" exact component={ UserProfile } />
          <Route path="/withdraw" exact component={ Withdraw } />
        </Switch>
      </Router>
     );
  }
}
 
export default App;