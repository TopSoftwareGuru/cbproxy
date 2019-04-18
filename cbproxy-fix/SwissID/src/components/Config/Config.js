import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../Navbar';
import AdminUser from '../alerts/AdminUser';
import NavbarTop from '../NavbarTop';
import CHReceive from '../alerts/CHReceive';
import { FormattedMessage } from 'react-intl';

class Config extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {

  }
  render() { 
    return ( 
      <div className="container">
        <div className="row">
          <div className="col-md-6 config-leftpane my-4">
            <NavbarTop />
            <Navbar />
            <CHReceive mode={1} description={`Logged on as admin user proceed with caution.`} />
            <form className="App-reference">
              <h3>
                <FormattedMessage
                  id="config.topic"
                  defaultMessage="Application Reference Data"
                />
              </h3>
              <div className="form-group">
                <label>
                  <strong>
                    <FormattedMessage
                      id="config.user.mode"
                      defaultMessage="Set user interface mode"
                    />  
                  </strong>
                </label>
                <select className="form-control">
                  <option value="demomode">demo mode</option>
                  <option value="normalmode">normal mode</option>
                </select>
                <label>
                  <strong>
                    <FormattedMessage
                      id="config.content.rightpane"
                      defaultMessage="Select content for right-pane"
                    />
                  </strong>
                </label>
                <select className="form-control">
                  <option value="dev_notes">dev_notes</option>
                  <option value="bank_view">bank_view</option>
                </select>
              </div>
              <div className="form-group">
                <h3>
                  <FormattedMessage
                    id="config.fintech"
                    defaultMessage="Our New Fintech or Bank"
                  />
                </h3>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                    >
                      <FormattedMessage
                        id="config.company.name"
                        defaultMessage="company name"
                      />
                    </span>
                  </div>
                    <input
                      type="text"
                      className="form-control"
                      value="Bank XYZ"
                      onChange={this.handleChange}
                    />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                    >
                      &nbsp;&nbsp;
                        <FormattedMessage
                          id="config.dnsdomain"
                          defaultMessage="DNS Domain"
                        />
                      &nbsp;&nbsp;&nbsp;
                    </span>
                  </div>
                    <input
                      type="text"
                      className="form-control"
                      value="BankXYZ.ccom"
                      onChange={this.handleChange}
                    />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                    >
                      <FormattedMessage
                        id="config.IID"
                        defaultMessage="IID (Institute IDdentification):"
                      />
                    </span>
                  </div>
                    <input
                      type="text"
                      className="form-control"
                      value="44955"
                      onChange={this.handleChange}
                    />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                    >
                      SWIFT BIC:
                    </span>
                  </div>
                    <input
                      type="text"
                      className="form-control"
                      value="SPROCh54955"
                      onChange={this.handleChange}
                    />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                    >
                      SIC ID:
                    </span>
                  </div>
                    <input
                      type="text"
                      className="form-control"
                      value="449553"
                      onChange={this.handleChange}
                    />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                    >
                      <FormattedMessage
                        id="config.snb.giro.account"
                        defaultMessage="SNB Giro Account"
                      />
                    </span>
                  </div>
                    <input
                      type="text"
                      className="form-control"
                      value="89911.00027"
                      onChange={this.handleChange}
                    />
                </div>
                <p>
                  <a href="https://www.xe.com/ibancalculator/sample/?ibancountry=switzerland" className="link-color">
                    <FormattedMessage
                      id="config.explaination"
                      defaultMessage="Explaination"
                    />
                  </a>
                </p>
                <div className="input-group mb-3">
                  
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                    >
                      <FormattedMessage
                        id="config.snb.inital"
                        defaultMessage="SNB Giro Account initial balane:"
                      />
                    </span>
                  </div>
                    <input
                      type="text"
                      className="form-control"
                      value="CHF 20'000'000.00"
                      onChange={this.handleChange}
                    />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                    >
                      <FormattedMessage
                        id="config.iban.prefix.accounts"
                        defaultMessage="IBAN prefix for its customer accounts:"
                      />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    value="CH 33 44955"
                    onChange={this.handleChange}
                  />
                  <label>
                    <FormattedMessage
                      id="config.desc1"
                      defaultMessage="CH = ISO Country Code Switzerland, 33 = IBAN Check Digits, 44955 = Bank Identifier"
                    />
                  </label>
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                    >
                      <FormattedMessage
                        id="config.iban.number.range"
                        defaultMessage="IBAN account number range:"
                      />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    value="100000000;9999999999"
                    onChange={this.handleChange}
                  />
                  <label>
                    <FormattedMessage
                      id="config.desc1"
                      defaultMessage="CH = ISO Country Code Switzerland, 33 = IBAN Check Digits, 44955 = Bank Identifier"
                    />
                  </label>
                </div>
                
                <h3>
                  <FormattedMessage
                    id="config.memberships"
                    defaultMessage="Memberships & Access"
                  />
                </h3>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                    >
                      SEPA
                      <FormattedMessage
                        id="config.member"
                        defaultMessage="member"
                      />:
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    value="False"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                    >
                      SIC
                      <FormattedMessage
                        id="config.member"
                        defaultMessage="member"
                      />:
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    value="True"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                    >
                      euroSIC 
                      <FormattedMessage
                        id="config.member"
                        defaultMessage="member"
                      />:
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    value="False"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                    >
                      SWIFT InterAct member:
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    value="True"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                    >
                      esisuisse
                      <FormattedMessage
                        id="config.member"
                        defaultMessage="member"
                      />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    value="True"
                    onChange={this.handleChange}
                  />
                </div>
                <h5>
                  <FormattedMessage
                    id="config.sanctions.blacklist"
                    defaultMessage="Sanctions Blacklist"
                  />
                </h5>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                    >
                      <FormattedMessage
                        id="config.blacklist.people"
                        defaultMessage="Blacklisted people:"
                      />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    value="Joe Doe, SilkRoad Store Inc., ACME Ltd."
                    onChange={this.handleChange}
                  />
                  <input
                    type="text"
                    className="form-control"
                    value="<SwissID-171>, <SwissID-234>,"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
     );
  }
}
 
export default Config;