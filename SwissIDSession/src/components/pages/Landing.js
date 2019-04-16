import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../store/actions/action';
// import auth0 from 'auth0-js';


class Landing extends Component {
  constructor(props) {
    super(props);
    this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
    this.handleGoogleLoginFailure = this.handleGoogleLoginFailure.bind(this);
  }

  handleGoogleLogin(res) {
    const { email, familyName, givenName, name } = res.profileObj;
    this.props.loginWatcher({
      email,
      familyName,
      givenName,
      name,
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    // return (
    //   nextProps.
    // )
  }
  handleGoogleLoginFailure(res) {

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
                <Link to="#" className="top-bar">
                  <strong>Next</strong>
                </Link>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-md-12">
                <h4>Welcome to the minimalistic XYZ bank</h4>
              </div>
            </div>
            <div className="row mb-3 my-4">
              <div className="col-md-12">
                {/* <a
                  href="https://login.int.swissid.ch/idp/oauth2/authorize?response_type=code&client_id=2d19f-1580c-8f5a2-954c8&scope=openid%20profile&redirect_uri=https%3A%2F%2Fswissid-c228f.firebaseapp.com%2F&nonce=n-0S6_WzA2Mj&state=Q4OrwqgbnR&acr_values=loa-1&ui_locales=en"
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
                <h4>Why XYZ bank</h4>
                <p>Here marketing material will be added.</p>
                <p>Diff vs traditional banks (UBS, CS, KBs, Raiffeisen, ...)</p>
                <p>
                  Diff vs challenger banks (N26, Revolut, Neon, Oyoba, MtPelerin,
                  ...)
                </p>
                <h4>Product Offerings</h4>
                <p>Product Basic for individuals.</p>
                <p>Product Pro for companies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);