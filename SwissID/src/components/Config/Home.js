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
              <Link to="."  className="link-color">
                Start
              </Link>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <Link to="#"  className="link-color">
                <strong>Next</strong>
              </Link>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <Link to="/config"  className="link-color">
                Config
              </Link>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <Link to="/dev"  className="link-color">
                Dev
              </Link>
            </div>
            <Navbar />
            <CHReceive
              description="Transfer CHF +7'800.00 from your ABC account CH received."
              mode={0}
            />
            <h4>Your Balance at Bank XYZ:</h4>
            <h3>CHF 7'800.00</h3>
            <Link to="#" className="link-color">
              Transfer History
            </Link>
            &nbsp;|&nbsp;&nbsp;
            <Link to="#" className="link-color">
              Balance History
            </Link>
            &nbsp;|&nbsp;&nbsp;
            <Link to="#" className="link-color">
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