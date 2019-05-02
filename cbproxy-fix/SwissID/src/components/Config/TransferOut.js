import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import CurrencyFormat from 'react-currency-format';

import Navbar from '../Navbar';
import { activityLogon } from '../store/actions/actions';
import { transOut } from '../store/actions/transferActions';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
}
class TransferOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 2000,
      addinfo: "",
      abc_acc: null,
      xyz_acc: null, 
      transfer_funds: "as soon as possible",
      modalIsOpen: false,
      balance: null,
      iban: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
  };
  componentWillMount() {
    if (this.props.userEntity) {
      const { balance, abc_account, iban } = this.props.userEntity[0];
      this.setState({ abc_acc: abc_account, xyz_acc: iban, balance });
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.userEntity !== this.props.userEntity ||
      nextState.abc_acc !== this.state.abc_acc ||
      nextState.xyz_acc !== this.state.xyz_acc ||
      nextState.modalIsOpen !== this.state.modalIsOpen ||
      nextState.balance !== this.state.balance ||
      nextState.iban !== this.state.iban
    )
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userEntity !== this.props.userEntity) {
      const {
        balance,
        abc_account,
        iban,
        transferout,
      } = this.props.userEntity[0];
      this.setState({ abc_acc: abc_account, xyz_acc: iban, balance });
    }
  }
  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }
  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    const {
      amount,
      addinfo,
      abc_acc,
      xyz_acc,
      transfer_funds,
      balance,
    } = this.state;
    const logon_time = new Date();
    
    if (parseFloat(amount, 10.00) > balance) { 
      this.setState({ modalIsOpen: true });
    } else {
      const {
        amount,
        addinfo,
      } = this.state;
      this.props.transOut({ amount, addinfo, event: "TO" });
      this.props.history.push("/home");
    }
  };
  render() {
    const {
      abc_acc,
      xyz_acc,
    } = this.state;
    return ( 
      <div className="container">
        <div className="row">
          <div className="col-md-6 my-4">
            <Navbar />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 transfer-out my-4">
            <h3>
              <FormattedMessage
                id="transout.title"
                defaultMessage="Send from Bank XYZ To Bank ABC"
              />
            </h3>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="transout.amount"
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
                    id="transout.add.info"
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
                    id="transout.transfer.from"
                    defaultMessage="Transfer from this bank account:"
                  />
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={`Bank ABC | IBAN = ${abc_acc}`}
                  name="recbank_acc"
                  onChange={this.handleChange}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="transout.transfer.to"
                    defaultMessage="Transfer to this bank account"
                  />
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={`Bank XYZ | IBAN = ${xyz_acc}`}
                  name="toback_acc"
                  onChange={ this.handleChange }
                  readOnly
                />
              </div>
              <div className="form-group mb-5">
                <label>
                  <FormattedMessage
                    id="transout.transfer.funds"
                    defaultMessage="Transfer funds"
                  />
                </label>
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
                  id="transfermodal"
                >
                  <FormattedMessage 
                    id="transout.submit"
                    defaultMessage="Submit Transfer"
                  />
                </button>
              </strong>
              <Modal
                isOpen={ this.state.modalIsOpen }
                onRequestClose={ this.closeModal }
                onAfterOpen={ this.afterOpenModal }
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
              >
                <div>
                  <h2 ref={ subtitle => this.subtitle = subtitle }>
                    <FormattedMessage
                      id="transout.warning"
                      defaultMessage="Warning"
                    />
                  </h2>
                </div>
                <div className="text-center my-4">
                  <FormattedMessage
                    id="transout.modal"
                    defaultMessage="TransferOut is larger than Balance"
                  />
                </div>
                <div className="text-right">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={ this.closeModal }
                  >
                    <FormattedMessage
                      id="transout.done"
                      defaultMessage="Done"
                    />
                  </button>
                </div>
              </Modal>
            </form>
          </div>
        </div>
      </div>
     );
  }
};

const mapStateToProps = (state) => {
  return {
    userEntity: state.firestore.ordered.users,
    userInfo: state.user.userInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    transOut: (transInfo) => dispatch(transOut(transInfo)),
    activityLogon: (logonInfo) => dispatch(activityLogon(logonInfo)),
  }
}
 
TransferOut.propTypes = {
  userEntity: PropTypes.array,
  userInfo: PropTypes.object,
  transOut: PropTypes.func,
  activityLogon: PropTypes.func,
}
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => {
    return (
      [
        { collection: 'users', doc: props.userInfo.email }
      ]
    )
  })
)(TransferOut);