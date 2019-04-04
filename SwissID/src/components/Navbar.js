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
      <div className="container-fluid">
        <Link to="/home">
          Home
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/new">
          New
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="#">
          Profile
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="#">
          TxIN
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="#">
          TxOut
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="#">
          Activities
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="#">
          Logout
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
      </div>
    );
    }
  }
  
  export default Navbar;
