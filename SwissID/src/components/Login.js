import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typhography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import { FormControl } from "@material-ui/core";

const muiStyles = theme => ({
  root: {
    display: "flex"
  },
  textField: {
    display: "flex"
  },
  submit: {
    color: "ffffff",
    height: 60,
    marginTop: theme.spacing.unit,
    backgroundColor: "ee00000"
  },
  newaccount: {
    boxShadow: "none",
    height: 60,
    "&:hover": {
      boxShadow: "true"
    }
  }
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      language: "en"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 my-4">
            <div className="text-center mb-3">
              <Link to="." className="top-bar">
                Start
              </Link>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <Link to="#" className="top-bar">
                <strong>Next</strong>
              </Link>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <Link to="/config" className="top-bar">
                Config
              </Link>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <Link to="/dev" className="top-bar">
                Dev
              </Link>
            </div>
            <div className="row login">
              <div className="col-md-6">
                <span className="swissID">SwissID</span>
              </div>
              <div className="col-md-6 lang">
                <button
                  className="lang-select"
                  onClick={() => this.setState({ language: "de" })}
                >
                  de
                </button>
                <button
                  className="lang-select"
                  onClick={() => this.setState({ language: "fr" })}
                >
                  fr&nbsp;&nbsp;
                </button>
                <button
                  className="lang-select"
                  onClick={() => this.setState({ language: "it" })}
                >
                  it&nbsp;&nbsp;
                </button>
                <button
                  className="lang-select"
                  onClick={() => this.setState({ language: "en" })}
                >
                  en
                </button>
              </div>
            </div>
            <hr />
            <h2>Login with SwissID for</h2>
            <h5 className="my-1">Post CH Ltd</h5>
            <form>
              <FormControl fullWidth required>
                <TextField
                  id="email"
                  type="email"
                  label="E-mail address"
                  name="email"
                  className={classes.textField}
                  value={this.state.email}
                  onChange={this.handleChange}
                  margin="normal"
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={this.handleSubmit}
                >
                  Next
                </Button>
              </FormControl>
            </form>
            <hr />
            <Button
              fullWidth
              variant="contained"
              color="default"
              className={classes.newaccount}
            >
              Create New SwissID Account
            </Button>
          </div>
          <div className="col-md-6 login-comment">
            <h3>Comments for the implementation</h3>
            <ol>
              <li>
                <a href="https://www.swissid.ch/en/">
                  SwissID&nbsp;
                </a>
                 is a single-sign-on (SSO) solution based on the 
                <a href="https://openid.net/connect/">
                  &nbsp;OpenID connect &nbsp;
                </a>
                protocol, similar to Google OpenID and Facebook OpenID
              </li>
              <li>
                XYZ needs to be a so called 'Relying Party' to SwissID
              </li>
              <li>
                SwissID is quite new. Business connections are needed to obtain credentials to their test environment.
              </li>
              <li>
                Maybe <strong>HTTPS</strong> is mandatory for SwissID. Probably you cannot use SwissID with a non-HTTPS web application.
              </li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(muiStyles)(Login);
