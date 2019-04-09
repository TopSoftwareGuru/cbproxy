import React, { Component } from 'react';
import NavbarTop from './NavbarTop';
import Navbar from './Navbar';
import CHReceive from '../components/alerts/CHReceive';

class Withdraw extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="container">
        <div className="row">
          <div className="col-md-6 my-4">
            <NavbarTop />
            <Navbar />
            <CHReceive mode={0} description="Transfer CHF -2'000 to ABC Account with IBAN CH33 0078 1015 5036 7150 3 initiated." />
          </div>
        </div>
        <div className="row">
          Your balance at XYZ
          <h3>CHF 5'8000</h3>
        </div>
      </div>
     );
  }
}
 
export default Withdraw;