import React, { Component } from "react";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { FormattedMessage } from "react-intl";

import NavbarTop from '../NavbarTop';
import Navbar from '../Navbar';
import { transIn } from '../store/actions/transferActions';
import QRBill from '../../assets/image/qrbill.png';

/**
 * @see https://medium.com/a-beginners-guide-for-webpack-2/handling-images-e1a2a2c28f8d
 * Image Import
 */
class TransferIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      addinfo: null,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.transIn(this.state);
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
            <h3>
              <FormattedMessage
                id="transin.title"
                defaultMessage="Send from Bank ABC To Bank XYZ"
              />
            </h3>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="transin.amount"
                    defaultMessage="Amount [CHF]"
                  />
                </label>
                <input
                  type="number"
                  className="form-control"
                  pattern='[0-9]{0, 5}'
                  name="amount"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="transin.additional.info"
                    defaultMessage="Additional Info (max. 140 characters):"
                  />
                </label>
                <textarea
                  className="form-control"
                  rows="2"
                  name="addinfo"
                  onChange={this.handleChange}
                >
                </textarea>
              </div>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="transin.transfer.from"
                    defaultMessage="Transfer from this bank account"
                  />
                </label>
                <input
                  type="text"
                  className="form-control"
                  value="Bank ABC&nbsp;|&nbsp;IBAN = CH54 7823 2329 2323 099"
                  onChange={this.handleChange}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="transin.transfer.to"
                    defaultMessage="Transfer to this bank account"
                  />
                </label>
                <input
                  type="text"
                  className="form-control"
                  value="Bank XYZ&nbsp;|&nbsp;IBAN  = CH99 2222 4415 5036 7150 5"
                  onChange={ this.handleChange }
                  readOnly
                />
              </div>
              <div className="form-group mb-5">
                <label>
                  <FormattedMessage
                    id="transin.transfer.funds"
                    defaultMessage="Transfer funds"
                  />
                </label>
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
              <div>
                <p>
                  <FormattedMessage
                    id="transin.qr.code"
                    defaultMessage="Scan this QR Code with your bank\'s mobile app"
                  />
                </p>
                <strong>
                  <a href="#" className="link-color">
                    <FormattedMessage
                      id="transin.user.interface"
                      defaultMessage="I\'ve used Bank ABC\'s user interface to do this"
                    />
                  </a>
                </strong>
              </div>
              <button
                  type="submit"
                  className="btn btn-default transin-submit my-4"
                >
                <FormattedMessage
                  id="transout.done"
                  defaultMessage="Done"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    transOutInfo: state.firestore.ordered.users,
    userInfo: state.user.userInfo,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    transIn: (transferInInfo) => dispatch(transIn(transferInInfo)),
  }
}
/**
 * @see https://stackoverflow.com/questions/53656082/react-redux-firebase-error-using-firestoreconnect-typeerror-undefined-is-not-a
 * firestoreConnect is not compatible with react-redux 6.0.1
 * 
 */
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => {
    return (
      [
        { collection: 'users', doc: props.userInfo.email }
      ]
    )
  })
)(TransferIn);
