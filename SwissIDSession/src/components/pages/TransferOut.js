import React, { Component } from 'react';

import Navbar from '../component/Navbar';
import NavbarTop from '../component/NavbarTop';

class TransferOut extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      amount: 2000,
      add_info: "",
      abc_acc: "CH99 2222 4415 5036 7150 5",
      xyz_acc: "CH54 7823 2329 2323 099", 
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  };

  handleSubmit(event) {
    event.preventDefault();
    this.props.transOut(this.state);
    this.props.history.push("/withdraw");
  };

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
          <div className="col-md-6 transfer-out my-4">
            <h3>Send from Bank XYZ To Bank ABC</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Amount [CHF]</label>
                <input
                  type="number"
                  className="form-control"
                  pattern='[0-9]{0, 5}'
                  name="amount"
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
                <button
                  type="submit"
                  className="btn btn-default transout-submit"
                >
                  Submit Transfer
                </button>
              </strong>
            </form>
          </div>
        </div>
      </div>
     );
  }
}
 
export default TransferOut;