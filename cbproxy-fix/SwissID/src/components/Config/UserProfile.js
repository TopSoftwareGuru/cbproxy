import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { deactivateAccount } from '../store/actions/accountActions';
import Navbar from '../Navbar';
import CHReceive from '../alerts/CHReceive';
import CustomModal from '../alerts/CustomModal';
import DeactivateModal from '../alerts/DeactivateModal';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isDeactOpen: false,
      deactiveBtn: false,
      deMode: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSuspend = this.handleSuspend.bind(this);
    this.handleDeactivate = this.handleDeactivate.bind(this);
    this.handleDeactivateClose = this.handleDeactivateClose.bind(this);
    this.handleDeactivateModal = this.handleDeactivateModal.bind(this);
  }
  componentWillMount() {
    const { account_status, balance } = this.props.userInfo;
    account_status === "inactive" ?
      this.setState({ deactiveBtn: true })
      :
      this.setState({ deactiveBtn: false });
    balance === 0 ?
      this.setState({ deMode: true })
      :
      this.setState({ deMode: false });
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.userInfo.account_status !== this.props.userInfo.account_status ||
      nextState.account_status !== this.state.account_status ||
      nextState.isOpen !== this.state.isOpen ||
      nextState.isDeactOpen !== this.state.isDeactOpen ||
      nextState.deactiveBtn !== this.state.deactiveBtn
    )
  }
  componentDidUpdate(prevProps) {
    if (this.props.userInfo.account_status === "inactive") {
      this.setState({ deactiveBtn: true });
    }
  }
  handleSuspend() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  handleDeactivateClose() {
    this.setState({ isDeactOpen: !this.state.isDeactOpen });
  }
  handleDeactivate() {
    this.setState({
      isDeactOpen: !this.state.isDeactOpen,
      deactiveBtn: true,
    });
    this.props.deactivateAccount();
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  };
  handleDeactivateModal() {
    this.setState({ isDeactOpen: !this.state.isDeactOpen });
  }
  handleSubmit(event) {

  }
  render() { 
    return ( 
      <div className="container">
        <div className="row my-4">
          <div className="col-md-6">
            <Navbar />
            <CHReceive
              description={
                <FormattedMessage
                  id="alert.profile.created"
                  defaultMessage="XYZ Account with IBAN CH99 2222 4415 5036 7150 5 created."
                />
              }
              mode={0}
            />
          </div>
        </div>
        <div className="row profile">
          <div className="col-md-6 account-details">
            <h3>
              <FormattedMessage
                id="profile.account.details"
                defaultMessage="Account Details"
              />
            </h3>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="profile.chf.account"
                    defaultMessage="CHF Account at XYZ"
                  />
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="IBAN CH99 2222 4415 5036 7150 5"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="profile.account.status"
                    defaultMessage="Account Status"
                  />
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="waiting for verification | active | suspended | retired"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="profile.xyz.product"
                    defaultMessage="XYZ Product:"
                  />
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="XYZ basic account"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="profile.whitelisted.bank"
                    defaultMessage="Whitelisted bank account for in/out transfers"
                  />
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="my ABC bank account | CH33 0078 1015 5036 7150 3"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="profile.name"
                    defaultMessage="Name"
                  />
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="Joe F. Doe"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>OpenID</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="<openID URL>"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>eID Level</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="LOT2 (VSB3)"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="profile.address"
                    defaultMessage="Address"
                  />
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="Himmelstürli 7, 8002 Züich, Switzerland"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="profile.language"
                    defaultMessage="Language given by SwissID"
                  />
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="German"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="profile.choose.lang"
                    defaultMessage="Choose a language for this user interface:"
                  />
                </label>
                <select className="form-control">
                  <option>German</option>
                  <option>English</option>
                  <option>French</option>
                </select>
              </div>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="profile.gender"
                    defaultMessage="Gender"
                  />
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="male"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="profile.age"
                    defaultMessage="Age"
                  />
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="37"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="profile.nation"
                    defaultMessage="Nationality"
                  />
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="Swiss"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="profile.email"
                    defaultMessage="Email Address"
                  />
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="joe.doe@gmail.com"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="profile.mobile.number"
                    defaultMessage="Mobile Phone Number"
                  />
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="+41 79 907 07 08"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="profile.whitelisted.bank"
                    defaultMessage="Whitelisted bank account for in/out transfers"
                  />
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="my ABC bank account | CH33 0078 1015 5036 7150 3"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>
                  <FormattedMessage
                    id="profile.transfer.notification"
                    defaultMessage="Send transfer notification"
                  />
                </label>
                <div>
                  <label className="checkbox-inline">
                    <input
                      type="checkbox"
                      onChange={this.handleChange}
                      checked
                    />
                    <FormattedMessage
                      id="profile.send.email"
                      defaultMessage="send E-Mail (no fees apply)"
                    />
                  </label>
                  <label className="checkbox-inline">
                    <input
                      type="checkbox"
                      onChange={this.handleChange}
                      checked
                    />
                    <FormattedMessage
                      id="profile.send.sms"
                      defaultMessage="send SMS (fee 0.20 CHF per SMS)"
                    />
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <button
                  type="button"
                  className="btn-default account-cancel"
                  onClick={this.handleSuspend}
                >
                  <FormattedMessage
                    id="profile.suspend"
                    defaultMessage="Suspend"
                  />
                </button>
                  &nbsp;&nbsp;
                  { this.state.deactiveBtn ? (
                    <button
                      type="button"
                      className="btn-default account-save-changes"
                      disabled
                    >
                      <FormattedMessage
                        id="profile.deactivate"
                        defaultMessage="De-activate Account"
                      />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn-default account-save-changes"
                      onClick={ this.handleDeactivateModal }
                    >
                      <FormattedMessage
                        id="profile.deactivate"
                        defaultMessage="De-activate Account"
                      />
                    </button>
                    )
                  }
              </div>
              <CustomModal
                show={ this.state.isOpen }
                onClose={ this.handleSuspend }
              >
                Not implemented yet
              </CustomModal>
              <DeactivateModal
                show={ this.state.isDeactOpen }
                deActive={ this.handleDeactivate }
                onClose={ this.handleDeactivateClose }
                deMode={this.state.deMode}
              >
                {
                  this.state.deMode === true ?
                    "Proceed with caution. If you de-activate your account, it is not possible to re-activate it later on. You will have to create a new account."
                    :
                    "Sorry, Your balance is not 0.00"
                }
                 
              </DeactivateModal>
            </form>
            <p className="close-account">
              <FormattedMessage
                id="profile.terminate"
                defaultMessage="Want to suspend or terminate this account?"
              />
            &nbsp;
              <a href="#"  className="link-color">
                <FormattedMessage
                  id="profile.click"
                  defaultMessage="Click here"
                />
              </a>
              &nbsp;
              <FormattedMessage
                id="profile.not.implement"
                defaultMessage="(not implemented yet)"
              />
            </p>
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
}
const mapDispatchToProps = (dispatch) => {
  return {
    deactivateAccount: () => dispatch(deactivateAccount()),
  }
}
UserProfile.propTypes = {
  deactivateAccount: PropTypes.func.isRequired,
}
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);