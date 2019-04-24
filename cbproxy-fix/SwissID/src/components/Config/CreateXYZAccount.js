import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

import NavbarTop from '../NavbarTop';
import Navbar from '../Navbar';
import Verity from './Verify';
import { LoadingModal } from '../alerts/LoadingModal';
import { saveVerifyInfo } from '../store/actions/accountActions';
import { activityLogon, setUserAccountInfo } from '../store/actions/actions';


class CreateXYZAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abc_account: "my ABC account",
      iban_funding_account: "CH33 0078 1015 5036 7150 3",
      funding_account: "Bank ABC",
      loadingmode: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const {
      abc_account,
      iban_funding_account,
      funding_account
    } = this.state;
    const {
      email,
      name
    } = this.props.user;
    
    const d = new Date();
    const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    const nd = new Date(utc + (3600000 * '+2'));
    const time_created = nd.toLocaleString();
    // this.props.activityLogon({
    //   event: ` -- Account IBAN ${iban_funding_account} created`,
    //   logon_time: time_created,
    // });
    // this.props.history.push("/activities");
    // this.props.history.push("/verify");
    this.setState({
      loadingmode: true,
    })
    fetch("https://swissid-c228f.firebaseapp.com/api/send", {
      method: "post",
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
      .then((result) => {
        const { messageId } = result;
        this.props.setUserAccountInfo({
          bic: "XYZCH89",
          iban: "CH33 0078 1015 5036 7150 3",
          currency: "CHF",
          product_cost: "XYZ basic account | CHF 10 per month + additional fee per CHF stored",
          abc_account,
          iban_funding_account,
          funding_account,
          email,
          name,
          time_created,
        });
        this.props.saveVerifyInfo({ messageId });
        this.setState({
          loadingmode: false,
        })
        this.props.history.push("/verify");
      })
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  render() { 
    return ( 
      <LoadingModal active={ this.state.loadingmode } children="Loading...">
      <div className="container">
        <div className="row my-4">
          <div className="col-md-6">
            {/* <NavbarTop />
            <Navbar /> */}
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
                    value={ this.state.abc_account }
                    name="abc_account"
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
      </LoadingModal>
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
    activityLogon: (logonInfo) => dispatch(activityLogon(logonInfo)),
    saveVerifyInfo: (verifyInfo) => dispatch(saveVerifyInfo(verifyInfo)),
    setUserAccountInfo: (userAccountInfo) => dispatch(setUserAccountInfo(userAccountInfo)),
    saveVerifyInfo: (messageId) => dispatch(saveVerifyInfo(messageId)),
  }
};

CreateXYZAccount.propTypes = {
  user: PropTypes.object,
  activityLogon: PropTypes.func,
  setUserAccountInfo: PropTypes.func,
  saveVerifyInfo: PropTypes.func,
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateXYZAccount);