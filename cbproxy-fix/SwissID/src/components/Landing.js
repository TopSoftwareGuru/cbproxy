import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { GoogleLogin } from 'react-google-login';
import { FormattedMessage } from "react-intl";

import { activityLogon } from './store/actions/actions';
import { internationalization } from './store/actions/intlActions';
import { setUserInfo } from './store/actions/actions';


class Landing extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
    this.handleGoogleLoginFailure = this.handleGoogleLoginFailure.bind(this);
    this.handleLocaleSetAsEn = this.handleLocaleSetAsEn.bind(this);
    this.handleLocaleSetAsDe = this.handleLocaleSetAsDe.bind(this);
    this.state = {
      code: null,
      locale: "en",
    }
  };
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.userInfo.isAuthenticated !== this.props.userInfo.isAuthenticated ||
      nextProps.locale !== this.props.locale
    )
  }
  componentDidUpdate(prevProps) {
    if (this.props.userInfo.isAuthenticated === true) {
      this.props.history.push("/home");
    };
    if (prevProps.locale === "en") {
      this.setState({ locale: this.props.locale });
    } else {
      this.setState({ locale: this.props.locale });
    }
  }
  componentWillMount() {
    const url = new URL(window.location.href);
    if (localStorage.getItem("locale") === "en") {
      this.props.internationalization("en");
    } else {
      this.props.internationalization("de"); 
    }
    const code = url.searchParams.get("code");
    if (code) {
      console.log(code);
      this.setState({ code });
      fetch("/api/accesstoken", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      }).then(result => {
        console.log("result", result);
      }).catch(err => {
        console.log("error", err);
      })
    };
  }

  handleLogin() {

  } 
  handleGoogleLogin(res) {
    const { email, name } = res.profileObj;
    const isAuthenticated = true;
    this.props.setUserInfo({ email, name, isAuthenticated });
    const { users } = this.props;
    let dup = false;
    users.forEach(item => {
      if (item.email === email) return (dup = true);
    });
    if (dup === true) {
      this.props.activityLogon();
    } else {
      this.props.history.push("/new");
    }
  }

  componentDidMount() {
    
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
    const { locale } = this.props;
    return (
      <div className="container">
        <div className="row my-5 landing">
          <div className="col-md-6">
            <div className="col-md-12 my-4">
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
                <div className="row">
                  <div className="col-md-6">
                    <button
                      type="button"
                      className="btn btn-default swissid-btn"
                    >
                      <a
                      href="https://login.int.swissid.ch/idp/oauth2/authorize?response_type=code&client_id=2d19f-1580c-8f5a2-954c8&scope=openid%20profile&redirect_uri=https%3A%2F%2Fswissid-c228f.firebaseapp.com%2F&nonce=n-0S6_WzA2Mj&state=Q4OrwqgbnR&acr_values=loa-1&ui_locales=de"
                      className="swissid-link"
                      >
                        <FormattedMessage
                          id="land.logon.swissID"
                          defaultMessage="Logon with SwissID"
                        />
                      </a>
                    </button>
                  </div>
                  <div className="col-md-6">
                    <GoogleLogin
                      clientId="1092212372305-nph9r306vn0dfv10h8ttcrclttgn8hjg.apps.googleusercontent.com"
                      render={
                        renderProps => (
                          <button
                            onClick={ renderProps.onClick }
                            disabled={ renderProps.disabled }
                            className="google-login"
                          >
                            <FormattedMessage
                              id="land.login.google"
                              defaultMessage="Login with Google"
                            />
                          </button>
                        )
                      }
                      onSuccess={ this.handleGoogleLogin }
                      onFailure={ this.handleGoogleLoginFailure }
                      cookiePolicy={ "single_host_origin" }
                      scope="profile openid email"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-1">
              <div className="col-md-12">
                <h4>
                  <FormattedMessage
                    id="land.whyxyzbank"
                    defaultMessage="Why?" />
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
              className={locale === "en" ? "btn btn-primary": "btn btn-default"}
              onClick={this.handleLocaleSetAsEn}
            >
              EN
            </button>
            <button
              className={locale === "de" ? "btn btn-primary": "btn btn-default"}
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
    users: state.firestore.ordered.users,
    userInfo: state.user,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    activityLogon:        (logonInfo) => dispatch(activityLogon(logonInfo)),
    internationalization: (locale)    => dispatch(internationalization(locale)),
    setUserInfo:          (userInfo)  => dispatch(setUserInfo(userInfo)),
  }
}
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'users' }
  ])
)(Landing);
