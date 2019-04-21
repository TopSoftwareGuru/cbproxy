import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Navbar from '../Navbar';
import NavbarTop from '../NavbarTop';
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
          <div className="col-md-6 text-center my-4">
            <NavbarTop />
            <Navbar />
            <CHReceive
              description={
                <FormattedMessage
                  id="alert.transfer.from"
                  defaultMessage="Transfer CHF +7\'800.00 from your ABC account CH received."
                />
              }
              mode={0}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 my-4">
            <h4>
              <FormattedMessage
                id="home.balance"
                defaultMessage="Your Balance at Bank XYZ:"
              />
            </h4>
            <h3>CHF 7'800.00</h3>
            <Link to="#" className="link-color">
              <FormattedMessage
                id="home.transfer.history"
                defaultMessage="Transfer History"
              />
            </Link>
            &nbsp;|&nbsp;&nbsp;
            <Link to="#" className="link-color">
              <FormattedMessage
                id="home.balance.history"
                defaultMessage="Balance History"
              />
            </Link>
            &nbsp;|&nbsp;&nbsp;
            <Link to="#" className="link-color">
              <FormattedMessage
                id="home.fees"
                defaultMessage="Fees"
              />
            </Link>
          </div>
        </div>
      </div>
     );
  }
}
 
export default Home;