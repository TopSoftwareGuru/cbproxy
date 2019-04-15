import React, { Component } from 'react';
import NavbarTop from '../component/NavbarTop';
import Navbar from '../component/Navbar';

class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleChange = this.handleChange.bind(this);
  } 

  handleChange(event) {

  }
  render() { 
    return ( 
      <div className="container">
        <div className="row">
          <div className="col-md-6 my-4">
            <NavbarTop />
            <Navbar />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 my-3 mb-3">
            <h3>Activities</h3>
            <h4>Data Export</h4>
            <div>
              <p>You can always export you data in either
                <a href="#" className="link-color">&nbsp;Microsoft&nbsp;Excel(.xlsx)&nbsp;</a>
                format,&nbsp;or in&nbsp;
                <a href="#" className="link-color">PDF/A format.</a>
              </p>
            </div>
            <h3>Recent Activities</h3>
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked
                  onChange={this.handleChange}
                />
                Logon/Logoff&nbsp;
              </label>
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked
                  onChange={this.handleChange}
                />
                Transfers&nbsp;
              </label>
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked
                  onChange={this.handleChange}
                />
                Notifications&nbsp;
              </label>
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked
                  onChange={this.handleChange}
                />
                Problems&nbsp;
              </label>
            </div>
            <div>
              <ul className="list-group">
                <li className="list-group-item">
                  dd.mm.yyy hh:mm:ss -- Logon from 12.123.23.123&nbsp;
                  <a href="#" className="link-color">details</a>
                </li>
                <li className="list-group-item">
                  dd.mm.yyy hh:mm:ss -- Account IBAN CH99 2222 4415 5036 7150 5 created&nbsp;
                  <a href="#" className="link-color">details</a>
                </li>
                <li className="list-group-item">
                  dd.mm.yyy hh:mm:ss -- Inbound credit transfer received (pacs.008)&nbsp;
                  <a href="#" className="link-color">details</a>
                </li>
                <li className="list-group-item">
                  dd.mm.yyy hh:mm:ss -- Notification failed - EMail address rejected&nbsp;
                  <a href="#" className="link-color">details</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
     );
  }
}
 
export default Activities;