import React, { Component } from 'react';
import Navbar from '../Navbar';
import NavbarTop from '../NavbarTop';

class TransferOut extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
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
          <div className="col-md-6 transfer-in my-4">
            <h3>Send from Bank XYZ To Bank ABC</h3>
            <form>
              <div className="form-group">
                <label>Amount [CHF]</label>
                <input
                  type="number"
                  className="form-control"
                  value="2000"
                  name="amount_chf"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Additional Info (max. 140 characters):</label>
                <textarea
                  className="form-control"
                  rows="2"
                  name="add_info"
                  onChange={this.handleChange}
                >
                </textarea>
              </div>
              <div className="form-group">
                <label>Transfer from this bank account;</label>
                <input
                  type="text"
                  className="form-control"
                  value="Bank ABC | IBAN = CH99 2222 4415 5036 7150 5 "
                  name="recbank_acc"
                  onChange={this.handleChange}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Transfer to this bank account</label>
                <input
                  type="text"
                  className="form-control"
                  value="Bank XYZ | IBAN = CH54 7823 2329 2323 099"
                  name="toback_acc"
                  onChange={ this.handleChange }
                  readOnly
                />
              </div>
              <div className="form-group mb-5">
                <label>Transfer funds</label>
                <input
                  type="text"
                  className="form-control"
                  value="as soon as possible"
                  name="transfer_funds"
                  onChange={ this.handleChange }
                  readOnly
                />
              </div>
              <strong>
                <a href="#">
                  Submit Transfer
                </a>
              </strong>
            </form>
          </div>
          <div className="col-md-6">
            <h3>Comments for the implementation</h3>
            <ol>
              <li>
                AFAIK, It should finally result in a&nbsp;
                <a href="https://www.iso20022.org/sites/default/files/documents/messages/pain/schemas/pain.001.001.09.zip">
                  ISO pain.001.001.09
                </a>
                &nbsp;message
              </li>
            </ol>
          </div>
        </div>
      </div>
     );
  }
}
 
export default TransferOut;