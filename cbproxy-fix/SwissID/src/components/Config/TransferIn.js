import React, { Component } from "react";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { FormattedMessage } from "react-intl";
import CurrencyFormat from 'react-currency-format';

import Navbar from '../Navbar';
import { transOut } from '../store/actions/transferActions';
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
      format_amount: null,
      addinfo: null,
      abc_acc: null,
      xyz_acc: null,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  componentWillMount() {
    if (this.props.userInfo) {
      const { balance, abc_account, iban } = this.props.userInfo;
      this.setState({
        abc_acc: abc_account,
        xyz_acc: iban,
        balance,
      });
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.userInfo !== this.props.userInfo ||
      nextState.abc_acc !== this.state.abc_acc ||
      nextState.xyz_acc !== this.state.xyz_acc
    )
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userInfo !== this.props.userInfo) {
      const { balance, abc_account, iban } = this.props.userInfo;
      this.setState({
        abc_acc: abc_account,
        xyz_acc: iban,
        balance,
      });
    }
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { amount, addinfo } = this.state;
    this.props.transOut({ amount, addinfo, event: "TI" });
    this.props.history.push("/home");
  }
  render() {
    const { abc_acc, xyz_acc } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 my-4">
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
                <CurrencyFormat
                  className="form-control"
                  thousandSeparator={ true }
                  name="amount"
                  step="0.01"
                  decimalScale={2}
                  onValueChange={ valObj => this.setState({amount: parseFloat(valObj.value)}) }
                  required
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
                  value={`Bank ABC | IBAN = ${abc_acc}`}
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
                  value={`Bank XYZ | IBAN = ${xyz_acc}`}
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
    userInfo: state.user,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    transOut: (transInfo) => dispatch(transOut(transInfo)),
  }
}
/**
 * @see https://stackoverflow.com/questions/53656082/react-redux-firebase-error-using-firestoreconnect-typeerror-undefined-is-not-a
 * firestoreConnect is not compatible with react-redux 6.0.1
 * 
 */
export default connect(mapStateToProps, mapDispatchToProps)(TransferIn);
