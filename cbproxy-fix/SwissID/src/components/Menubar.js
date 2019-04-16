import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Menubar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      mode: this.props.mode,
     }
  };

  render() { 
    return ( 
      <div className="text-center my-4">
        <Link to="/">
          Start
        </Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/">
          <strong>Next</strong>
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/config">
          Config
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="#">
          RFQ style
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="#">
          Crypto Dev
        </Link>
      </div>
     );
  }
}
 
export default Menubar;