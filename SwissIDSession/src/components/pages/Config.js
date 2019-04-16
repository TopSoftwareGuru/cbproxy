import React, { Component } from 'react';


import NavbarTop from '../component/NavbarTop';
import Navbar from '../component/Navbar';
import CHReceive from '../component/CHReceive';

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
              <h3>Application Reference Data</h3>
              <div className="form-group">
                <label>
                  <strong>Set&nbsp;Set user interface mode::</strong>
                </label>
                <select className="form-control">
                  <option value="demomode">demo mode</option>
                  <option value="normalmode">normal mode</option>
                </select>
                <label>
                  <strong>Select content for right-pane::</strong>
                </label>
                <select className="form-control">
                  <option value="dev_notes">dev_notes</option>
                  <option value="bank_view">bank_view</option>
                </select>
              </div>
              <div className="form-group">
                <h3>Our New Fintech or Bank</h3>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                    >
                      Company Name
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
                      &nbsp;&nbsp;DNS Domain&nbsp;&nbsp;&nbsp;
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
                      IID (Institute IDdentification):
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
                      SNB Giro Account:
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
                      Explaination
                  </a>
                </p>
                <div className="input-group mb-3">
                  
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                    >
                      SNB Giro Account initial balane:
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
                      IBAN prefix for its customer accounts:
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    value="CH 33 44955"
                    onChange={this.handleChange}
                  />
                  <label>
                    CH = ISO Country Code Switzerland, 33 = IBAN Check Digits, 44955 = Bank Identifier
                  </label>
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                    >
                      IBAN account number range:
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    value="100000000;9999999999"
                    onChange={this.handleChange}
                  />
                  <label>
                  CH = ISO Country Code Switzerland, 33 = IBAN Check Digits, 44955 = Bank Identifier
                  </label>
                </div>
                
                <h3>Memberships & Access</h3>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                    >
                      SEPA Member:
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
                      SIC Member:
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
                      euroSIC Member:
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
                      esisuisse Member
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    value="True"
                    onChange={this.handleChange}
                  />
                </div>
                <h5>Sanctions Blacklist</h5>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                    >
                      Blacklisted people:
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
            <h5>Key Performance Indicators (KPIs) and other financial figures</h5>
          </div>
        </div>
      </div>
     );
  }
}
 
export default Config;