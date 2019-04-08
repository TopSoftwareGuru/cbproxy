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
      <div className="container">
        <div className="text-center mb-3">
          <Link to="/" className="top-bar">
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
      </div>
     );
  }
}
 
export default NavbarTop;