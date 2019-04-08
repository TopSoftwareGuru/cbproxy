import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../Navbar';
import CHReceive from '../alerts/CHReceive';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
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
            <Navbar />
            <CHReceive description="Transfer CHF +7'800.00 from your ABC account CH received."/>
            <h4>Your Balance at Bank XYZ:</h4>
            <h3>CHF 7'800.00</h3>
            <Link to="#">
              Transfer History
            </Link>
            &nbsp;|&nbsp;&nbsp;
            <Link to="#">
              Balance History
            </Link>
            &nbsp;|&nbsp;&nbsp;
            <Link to="#">
              Fees
            </Link>
            &nbsp;|&nbsp;&nbsp;
          </div>
        </div>
      </div>
     );
  }
}
 
export default Home;