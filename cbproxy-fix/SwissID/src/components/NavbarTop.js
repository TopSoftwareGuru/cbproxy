import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarTop extends Component {
  constructor(props) {
    super(props);
    this.state = { 

    }
  }
  render() { 
    return ( 
      <div className="container text-center mb-3 navbar-top">
        <Link to="/" className="link-color">
          Start
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="#" className="link-color">
          <strong>Next</strong>
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/config" className="link-color">
          Config
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/profile" className="link-color">
          Profile
        </Link>
      </div>
     );
  }
}
 
export default NavbarTop;