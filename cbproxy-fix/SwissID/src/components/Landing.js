import React, { Component } from "react";
import { Link } from "react-router-dom";
import auth0 from 'auth0-js';
import { GoogleLogin } from 'react-google-login';
import { FormattedMessage } from "react-intl";

import { activityLogon } from './store/actions/actions';
import { internationalization } from './store/actions/intlActions';
import { connect } from "react-redux";


class Landing extends Component {
  constructor(props) {
    super(props);
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
    this.handleGoogleLoginFailure = this.handleGoogleLoginFailure.bind(this);
    this.handleLocaleSetAsEn = this.handleLocaleSetAsEn.bind(this);
    this.handleLocaleSetAsDe = this.handleLocaleSetAsDe.bind(this);
  }

  handleLogin() {
    const webAuth = new auth0.WebAuth({
      domain: 'dev-ul1d4kde.auth0.com',
      clientID: 'PZ7AdJ1vLuVhqqtJ6Jy2wSosor75rPeA',
      redirectUri: 'https://swissid-c228f.firebaseapp.com',
      responseType: 'code',
      scope: 'openid email profil phone',
    });
    webAuth.authorize();
  } 
  handleGoogleLogin(res) {
    this.props.activityLogon({
      logon_time: new Date(),
      event: "--logon from 123.123.123.123",
    });
    this.props.history.push("/new");
  }
  handleGoogleLoginFailure(res) {

  }

  handleLocaleSetAsEn() {
    this.props.internationalization("en");
  }

  handleLocaleSetAsDe() {
    this.props.internationalization("de");
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="col-md-12 my-4">
              <div className="text-center">
                <Link to="/" className="top-bar">
                  Start
                </Link>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <Link to="/openid_connect" className="top-bar">
                  <strong>Next</strong>
                </Link>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-md-12">
                <h4>
                  <FormattedMessage 
                    id="land.topic"
                    default="Welcome to the minimalistic XYZ bank"
                  />
                </h4>
              </div>
            </div>
            <div className="row mb-3 my-4">
              <div className="col-md-12">
                {/* <Link to="/openid_connect" className="top-bar">
                  Logon with SwissID
                </Link> */}
                {/* <a
                  href="https://dev-ul1d4kde.auth0.com/authorize/?response_type=code&scope=openid%20profile&client_id=pXbXo_0BPEjWEoExpCZ5Wv82MwViCijy&connection=SwissID&redirect_uri=https://manage.auth0.com/tester/callback?connection=SwissID"
                  className="link-color"
                >
                  Logon with SwissID
                </a> */}
                <button
                  type="button"
                  onClick={this.handleLogin}
                >
                Logon with SwissID
                </button>
                <GoogleLogin
                  clientId="1092212372305-nph9r306vn0dfv10h8ttcrclttgn8hjg.apps.googleusercontent.com"
                  buttonText="Login with Google"
                  onSuccess={ this.handleGoogleLogin }
                  onFailure={ this.handleGoogleLoginFailure }
                  cookiePolicy={ "single_host_origin" }
                  scope="profile openid email"
                />
              </div>
            </div>
            <div className="row my-1">
              <div className="col-md-12">
                <h4>
                  <FormattedMessage
                    id="land.whyxyzbank"
                    defaultMessage="Why XYZ bank"
                  />
                </h4>
                <p>
                  <FormattedMessage
                    id="land.desc1"
                    defaultMessage="Here marketing material will be added."
                  />
                </p>
                <p>
                  <FormattedMessage
                    id="land.desc2"
                    defaultMessage="Diff vs traditional banks (UBS, CS, KBs, Raiffeisen, ...)"
                  />
                </p>
                <p>
                  <FormattedMessage
                    id="land.desc3"
                    defaultMessage="Diff vs challenger banks (N26, Revolut, Neon, Oyoba, MtPelerin, ...)"
                  />
                </p>
                <h4>
                  <FormattedMessage
                    id="land.prod.offer"
                    defaultMessage="Product Offerings"
                  />
                </h4>
                <p>
                  <FormattedMessage
                    id="land.prod.basic"
                    defaultMessage="Product Basic for individuals."
                  />
                </p>
                <p>
                  <FormattedMessage
                    id="land.prod.company"
                    defaultMessage="Product Pro for companies."
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <button
              className="btn btn-primary"
              onClick={this.handleLocaleSetAsEn}
            >
              EN
            </button>
            <button
              className="btn btn-default"
              onClick={this.handleLocaleSetAsDe}
            >
              DE
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    locale: state.intl.locale,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    activityLogon: (logonInfo) => dispatch(
      activityLogon(logonInfo)
    ),
    internationalization: (locale) => dispatch(
      internationalization(locale)
    ),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
