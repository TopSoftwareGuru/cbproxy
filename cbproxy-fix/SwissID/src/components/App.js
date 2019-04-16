import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import Landing from "./Landing";
import Login from "./Login";
import Crypto from "./Crypto";
import Config from './Config/Config';
import Home from './Config/Home';
import CreateXYZAccount from './Config/CreateXYZAccount';
import TransferIn from './Config/TransferIn';
import TransferOut from './Config/TransferOut';
import Activities from "./Config/Activities";
import UserProfile from './Config/UserProfile';
import Withdraw from './Withdraw';
import messages from './messages';

class App extends Component {
  render() {
    const { locale } = this.props;
    return (
      <IntlProvider
        locale={locale} messages={messages[locale]}>
        <Router>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/openid_connect" exact component={Login} />
            <Route path="/crypto" exact component={ Crypto } />
            <Route path="/config" exact component={ Config } />
            <Route path="/home" exact component={ Home } />
            <Route path="/new" exact component={ CreateXYZAccount } />
            <Route path="/transfer_in" exact component={ TransferIn } />
            <Route path="/transfer_out" exact component={ TransferOut } />
            <Route path="/activities" exact component={ Activities } />
            <Route path="/profile" exact component={ UserProfile } />
            <Route path="/withdraw" exact component={Withdraw} />
          </Switch>
        </Router>
      </IntlProvider>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    locale: state.intl.locale,
  }
}
export default connect(mapStateToProps)(App);
