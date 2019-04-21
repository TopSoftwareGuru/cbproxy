import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Landing from "./Landing";
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
import Verify from './Config/Verify';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: "en",
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.locale !== this.props.locale ||
      nextState.locale !== this.state.locale 
    )
  };
  componentDidUpdate(prevProps) {
    if (prevProps.locale !== this.props.locale) {
      const { locale } = this.props;
      this.setState({ locale });
    }
  };
  componentWillMount() {
    if (localStorage.getItem("locale")) {
      this.setState({
        locale: localStorage.getItem("locale"),
      });
    }
  };
  render() {
    const { locale } = this.state;
    return (
      <IntlProvider
        locale={locale} messages={messages[locale]}>
        <Router>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/crypto" exact component={ Crypto } />
            <Route path="/config" exact component={ Config } />
            <Route path="/home" exact component={ Home } />
            <Route path="/new" exact component={ CreateXYZAccount } />
            <Route path="/transfer_in" exact component={ TransferIn } />
            <Route path="/transfer_out" exact component={ TransferOut } />
            <Route path="/activities" exact component={ Activities } />
            <Route path="/profile" exact component={ UserProfile } />
            <Route path="/withdraw" exact component={ Withdraw } />
            <Route path="/verify" exact component={ Verify } />
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

App.propTypes = {
  locale: PropTypes.string,
}
export default connect(mapStateToProps)(App);
