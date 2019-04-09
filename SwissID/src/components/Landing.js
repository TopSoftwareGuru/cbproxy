import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="row my-4">
          <div className="col-sm-6">
            <div className="text-center">
              <a href="#" className="top-bar">
                Start
              </a>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <a href="#" className="top-bar">
                <strong>Next</strong>
              </a>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <a href="#" className="top-bar">
                Dev
              </a>
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-6">
            <h4>Welcome to the minimalistic XYZ bank</h4>
          </div>
        </div>
        <div className="row mb-3 my-4">
          <div className="col-md-6">
            <Link to="/login" className="top-bar">
              Logon with SwissID
            </Link>
          </div>
        </div>
        <div className="row my-1">
          <div className="col-md-6">
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
    );
  }
}

export default Landing;
