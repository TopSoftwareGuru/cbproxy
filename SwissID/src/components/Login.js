import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typhography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import "./Login.css";
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
          <div className="col-md-6 login">
            <div className="row">
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
        </div>
      </div>
    );
  }
}

export default withStyles(muiStyles)(Login);
