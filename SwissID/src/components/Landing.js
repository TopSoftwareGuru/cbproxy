import React, { Component } from "react";
import { Link } from "react-router-dom";
import auth0 from 'auth0-js';


class Landing extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
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
                <h4>Welcome to the minimalistic XYZ bank</h4>
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
          {/* <div className="col-md-6 landing-comment">
            <h3>Comments for the implementation</h3>
            <ol>
              <li>
                The landing page will be a normal landing page website with rather static information.
              </li>
              <li>
                The Swiss Post Website uses such a SwissID Logon.
              </li>
              <li>
                It would be nice if there was an easy editiable simple (bootstrap based?) web page so that I could change its content without having to re-compile some code or so. Nevertheless it should also somehow be part of the initial application.
              </li>
            </ol>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Landing;
