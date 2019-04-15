import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 0
    };
  }
  render() {
    return (
      <div className="container-fluid text-center navbar-top">
        <Link to="/home" className="link-color">
          Home
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/new" className="link-color">
          New
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/transfer_in" className="link-color">
          TxIN
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/transfer_out" className="link-color">
          TxOut
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/activities" className="link-color">
          Activities
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="#" className="link-color">
          Logout
        </Link>
      </div>
    );
    }
  }
  
  export default Navbar;