import React, { Component } from 'react';
import { Link } from '@material-ui/core';

class CreateXYZAccount extends Component {
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
          <div className="col-md-6 createxyz">
            <h3>Create CHF Account</h3>
            <form>
              <div className="form-group">
                <label>
                  <strong>
                    BIC (Bank Identifier Code)
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value="XYZCH89"
                  readOnly
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>
                  <strong>
                    IBAN
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value="CH33 0078 1015 5036 7150 3"
                  readOnly
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>
                  <strong>
                  Currency
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value="CHF"
                  readOnly
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>
                  <strong>
                    Product and cost
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value="XYZ basic account | CHF 10 per month + additional fee per CHF stored"
                  readOnly
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>
                  <strong>
                    Alias:
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value="my ABC account"
                  readOnly
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>
                  <strong>
                    Your funding account is at:
                  </strong>
                </label>
                <select
                  className="form-control"
                >
                  <option>Bank ABC</option>
                  <option>Credit Issues</option>
                  <option>Raiffeisenbank</option>
                  <option>Zúrcherkantonalbank</option>
                  <option>Post finance</option>
                </select>
              </div>
              <div className="form-group">
                <label>
                  <strong>
                    IBAN of funding account [CHF] at other bank:
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value="CH33 0078 1015 5036 7150 3"
                  readOnly
                  onChange={this.handleChange}
                />
              </div>
            </form>
            <Link to="#">
              Create XYZ account
            </Link>
          </div>
        </div>
      </div>
     );
  }
}
 
export default CreateXYZAccount;