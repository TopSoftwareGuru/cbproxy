import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

import NavbarTop from '../NavbarTop';
import Navbar from '../Navbar';
import { createAccount } from '../store/actions/accountActions';
import { activityLogon } from '../store/actions/actions';

class CreateXYZAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alias: "my ABC account",
      iban_funding_account: "CH33 0078 1015 5036 7150 3",
      funding_account: "Bank ABC",
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const {
      alias,
      iban_funding_account,
      funding_account
    } = this.state;
    const {
      email,
      name
    } = this.props.user;
    
    const time_created = new Date();
    this.props.createAccount({
      bic: "XYZCH89",
      iban: "CH33 0078 1015 5036 7150 3",
      currency: "CHF",
      product_cost: "XYZ basic account | CHF 10 per month + additional fee per CHF stored",
      alias,
      iban_funding_account,
      funding_account,
      email,
      name,
      time_created,
    });
    this.props.activityLogon({
      event: ` -- Account IBAN ${iban_funding_account} created`,
      logon_time: time_created,
    });
    this.props.history.push("/activities");
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  render() { 
    return ( 
      <div className="container">
        <div className="row my-4">
          <div className="col-md-6">
            <NavbarTop />
            <Navbar />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 createxyz">
            <h3>
              <FormattedMessage
                id="new.topic"
                defaultMessage="Create CHF Account"
              />
            </h3>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>
                  <strong>
                    <FormattedMessage
                      id="new.bic"
                      defaultMessage="BIC (Bank Identifier Code)"
                    />
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
                    <FormattedMessage
                      id="new.currency"
                      defaultMessage="currency"
                    />
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
                    <FormattedMessage
                      id="new.product_cost"
                      defaultMessage="Product and Cost"
                    />
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
                    <FormattedMessage
                      id="new.alias"
                      defaultMessage="Alias"
                    />
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={ this.state.alias }
                  name="alias"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>
                  <strong>
                    <FormattedMessage
                      id="new.funding.account"
                      defaultMessage="You funding account at:"
                    />
                  </strong>
                </label>
                <select
                  className="form-control"
                  name="funding_account"
                  onChange={this.handleChange}
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
                    <FormattedMessage
                      id="new.iban.funding.account"
                      defaultMessage="IBAN of funding account [CHF] at other bank:"
                    />
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={ this.state.iban_funding_account
                  }
                  name="iban_funding_account"
                  onChange={this.handleChange}
                />
              </div>
              <button
                  type="submit"
                  className="btn btn-default createxyz-submit my-4"
                >
                <FormattedMessage
                  id="new.createxyzaccount"
                  defaultMessage="create xyz account"
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
    user: state.user.userInfo,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createAccount: (accountInfo) => dispatch(createAccount(accountInfo)),
    activityLogon: (logonInfo) => dispatch(activityLogon(logonInfo)),
  }
};

CreateXYZAccount.propTypes = {
  user: PropTypes.string,
  createAccount: PropTypes.func,
  activityLogon: PropTypes.func,
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateXYZAccount);