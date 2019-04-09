import React, { Component } from 'react';
import Menubar from './Menubar';

class Dev extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 my-4">
            <Menubar />
            {/* <div className="col-md-6 offset-md-6 my-5">
              <h3>Comments for the implementation</h3>
              <div className="mb-4" />
              <h5>Roman ToDo</h5>
              <ul>
                <li>Activities--> add details pop-over</li>
                <li>Creates stats page</li>
                <li>
                  two pane mode: toggle between
                  <ol>
                    <li>one-pane / two-pane view</li>
                    <li>Bank XYZ customer view / Bank ABC customer view</li>
                    <li>Bank XYZ customer view / Bank XYZ bank view</li>
                    <li>Bank XYZ customer view / developer notes, principles, comments</li>
                  </ol>
                </li>
                <li>mock up of one two pane demo</li>
                <li>
                  Change wording of create account to "new account is almost ready"
                  and "link" funding account to finalise account setup"  
                </li>
                <li>
                  Add link to immediately files bug reports / improvement requests
                </li>
                <li>
                  Think about tx signing with Trezor
                </li>
                <li>
                  Think about SIX SDX tokenized CHF - what does it mean for Bank XYZ? Can it be used? Does it make Bank XYZ redundant?
                </li>
                <li>
                  Create Logo
                </li>
                <li>
                  Create and deploy / link Favicon
                </li>
              </ul>
              <h4>Some guiding Principles</h4>
              <ol>
                <li>
                  KISS: keep it simple and small. Simplicity is the ultimate sophistication. 
                </li>
                <li>
                  <a href="http://wiki.c2.com/?YouArentGonnaNeedIt">
                    YAGNI - you ain't gonna need it.
                  </a>
                   Always implement things when you actually need them, never when you just foresee that you need them. Even if you're totally, totally, totally sure that you'll need a feature later on, don't implement it now. Hint: sometimes I deviate from it myself. Please notify me about that.
                </li>
              </ol>
              <h4>User Interface Prototype</h4>
              <ol>
                <li>
                  Two to three pane view configurable for demo of GUI and its impact
                </li>
                <li>
                  For the user interfaces prototype three types of users are needed: Bank XYZ, customer, Bank ABC customer, admin
                </li>
                <li>
                  Multi-Language support EN, DE, FR
                </li>
                <li>
                  Indication in GUI: connected to ENG / UAT / PROD
                </li>
                <li>
                  Indication in GUI: Bank XYZ vs Bank ABC vs CB Bank. It should be easy to change those placeholder names later on with real names.
                </li>
                <li>
                  Simulation of RTGS, Bank XYZ, Bank ABC and CB Bank needed
                </li>
                <li>
                  for admin user: Kibana or Grafana inspired page for situation at different banks needed
                </li>
              </ol>
              <h4>Backend Simulator</h4>
              <ol>
                <li>
                  Have Configuration page or configuration file with the needed reference data for the involved parties
                </li>
                <li>
                  Event Sourcing with commands
                </li>
                <li>
                  Each transfer gets a hash value (similar as in Bitcoin) and gets hashed into a merkkle tree
                </li>
                <li>
                Simulation of RTGS, Bank XYZ, Bank ABC and CB Bank needed
                </li>
              </ol>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
 
export default Dev;