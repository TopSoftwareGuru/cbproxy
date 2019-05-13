import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import { LoadingModal } from '../alerts/LoadingModal';
import { saveVerifyInfo } from '../store/actions/accountActions';
import { setUserAccountInfo } from '../store/actions/accountActions';
import { activityLogon } from '../store/actions/actions';


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
  // shouldComponentUpdate(nextProps, nextState) {
  //   return (
  //     nextProps.account.accessToken !== this.props.account.accessToken ||
  //     nextProps.account_status !== this.props.account.account_status ||
  //     nextProps.account.bic !== this.props.account.bic ||
  //     nextProps.account.currency !== this.props.account.currency ||
  //     nextProps.account.funding_account !== this.props.account.funding_account ||
  //     nextProps.account.iban_funding_account !== this.props.account.iban_funding_account ||
  //     nextProps.account.product_cost !== this.props.account.product_cost ||
  //     nextProps.account.balance !== this.props.account.balance ||
  //     nextProps.account.name !== this.props.account.name
  //   )
  // }
  // componentDidUpdate(prevProps) {
  //   if (prevProps.account.accessToken) this.props.history.push("/home");
  // }
  handleSubmit(event) {
    event.preventDefault();
    const { abc_account, iban_funding_account, funding_account } = this.state;
    const { email, name } = this.props.account;
    
    fetch(`https://swisssign.herokuapp.com/api/createaccount`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        abc_account,
        iban_funding_account,
        funding_account,
        email,
        name
      })
    }).then(res => res.json())
      .then(result => {
      const {
        accessToken,
        abc_account,
        account_status,
        bic,
        currency,
        funding_account,
        iban_funding_account,
        iban,
        product_cost,
        name,
        balance,
        time_created
      } = result;
      if (accessToken !== undefined) this.props.setUserAccountInfo(
        {
          accessToken,
          abc_account,
          account_status,
          bic,
          currency,
          funding_account,
          iban_funding_account,
          iban,
          product_cost,
          name,
          balance,
          time_created
        }
      );
      this.props.history.push("/home");
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
    account: state.user,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserAccountInfo: (userAccountInfo) => dispatch(setUserAccountInfo(userAccountInfo)),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateXYZAccount);