import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

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
          <FormattedMessage
            id="navtop.home"
            defaultMessage="Home"
          />
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/new" className="link-color">
          <FormattedMessage
            id="navtop.new"
            defaultMessage="New"
          />
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
          <FormattedMessage
            id="navtop.activities"
            defaultMessage="activities"
          />
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/" className="link-color" onClick={()=>localStorage.removeItem("accessToken")}>
          <FormattedMessage
            id="navtop.logout"
            defaultMessage="Logout"
          />
        </Link>
      </div>
    );
    }
  }
  
  export default Navbar;
