import React, { Component } from "react";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import NavbarTop from '../NavbarTop';
import Navbar from '../Navbar';
import QRBill from '../../assets/image/qrbill.png';


/**
 * @see https://medium.com/a-beginners-guide-for-webpack-2/handling-images-e1a2a2c28f8d
 * Image Import
 */
class TransferIn extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleChange = this.handleChange.bind(this);
  };

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
          <div className="col-md-6 transfer-in my-4">
            <h3>Send from Bank ABC To Bank XYZ</h3>
            <form>
              <div className="form-group">
                <label>Amount [CHF]</label>
                <input
                  type="number"
                  className="form-control"
                  value="2000"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Additional Info (max. 140 characters):</label>
                <textarea
                  className="form-control"
                  rows="2"
                  onChange={this.handleChange}
                >
                </textarea>
              </div>
              <div className="form-group">
                <label>Transfer from this bank account;</label>
                <input
                  type="text"
                  className="form-control"
                  value="Bank ABC&nbsp;|&nbsp;IBAN = CH54 7823 2329 2323 099"
                  onChange={this.handleChange}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Transfer to this bank account</label>
                <input
                  type="text"
                  className="form-control"
                  value="Bank XYZ&nbsp;|&nbsp;IBAN  = CH99 2222 4415 5036 7150 5"
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
                  onChange={ this.handleChange }
                  readOnly
                />
              </div>
              <div className="media mb-2">
                <div className="media-left">
                  <img
                    src={ QRBill }
                    alt="QRBill"
                    className="qrbill"
                  />
                </div>
              </div>
              <p>Scan this QR Code with your bank's mobile app</p>
              <strong>
                <a href="#" className="link-color">
                  I've used Bank ABC's user interface to do this
                </a>
              </strong>
            </form>
          </div>
          {/* <div className="col-md-6">
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
          </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    transOutInfo: state.firestore.ordered.TransferOut,
  }
};

/**
 * @see https://stackoverflow.com/questions/53656082/react-redux-firebase-error-using-firestoreconnect-typeerror-undefined-is-not-a
 * firestoreConnect is not compatible with react-redux 6.0.1
 * 
 */
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'TransferOut' }
  ])
)(TransferIn);
