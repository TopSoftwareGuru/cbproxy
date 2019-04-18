import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Modal from 'react-modal';
import Navbar from '../Navbar';
import NavbarTop from '../NavbarTop';
import { activityLogon } from '../store/actions/actions';
import { transferOut } from '../store/actions/transferActions';

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
// Modal.setAppElement("button");
class TransferOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 2000,
      add_info: "",
      abc_acc: "CH99 2222 4415 5036 7150 5",
      xyz_acc: "CH54 7823 2329 2323 099", 
      transfer_funds: "as soon as possible",
      modalIsOpen: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
  };
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
      add_info,
      abc_acc,
      xyz_acc,
      transfer_funds,
    } = this.state;
    const logon_time = new Date();
    
    if (amount >= 4000) { 
      this.setState({ modalIsOpen: true });
    } else {
      this.props.transferOut({
        amount,
        add_info,
        transfer_funds,
        creditor_account: "CH99 2222 4415 5036 7150 5",
        creditor_agent_bic: "Bank abc",
        currency: "CHF",
        debtor_account: "Bank xyz",
        endtoend_id: "",
        msg_id: "",
        msg_type: "pain.001.01",
        time_created: logon_time,
      });
  
      this.props.activityLogon({
        event: " -- inbound credit transfer received (pacs.008)",
        logon_time,
      })
      this.props.history.push("/withdraw");
    }
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
                  id="transfermodal"
                >
                  Submit Transfer
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
                  <h2 ref={subtitle => this.subtitle = subtitle}>Warning</h2>
                </div>
                <div className="text-center my-4">
                  TransferOut is larger than Balance
                </div>
                <div className="text-right">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={ this.closeModal }
                  >
                    Done
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
    transOutInfo: state.firestore.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    transferOut: (transoutInfo) => dispatch(transferOut(transoutInfo)),
    activityLogon: (logonInfo) => dispatch(activityLogon(logonInfo)),
  }
}
 
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'TransferOut' }
  ])
) (TransferOut);