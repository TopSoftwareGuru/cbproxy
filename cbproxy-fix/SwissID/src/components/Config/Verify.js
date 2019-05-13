import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createAccount } from '../store/actions/accountActions';
class Verify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verifyCode: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    const { messageId } = this.props;
    const verifyCode = this.state.verifyCode.replace(/\s/g, '');

    fetch("/api/verify", {
      method: "post",
      body: JSON.stringify({ messageId, verifyCode }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(result => result.json())
      .then(res => {
        const { vst } = res;
        if (vst === "verified") {
          const { accountInfo } = this.props;
          this.props.createAccount(accountInfo);
          this.props.history.push("/home");
        };
      })
  }
  render() { 
    return ( 
      <div className="container">
        <div className="row my-5">
          <div className="col-md-6">
            <form className="form-inline" onSubmit={this.handleSubmit}>
              <div className="form-group mb-2">
                <label
                  className="sr-only"
                > 
                  Verification Code
                </label>
                <input
                  type="text"
                  readOnly
                  className="form-control-plaintext"
                  defaultValue="Verification Code"
                />
              </div>
              <div className="form-group mx-sm-3 mb-2">
                <input
                  type="text"
                  className="form-control"
                  name="verifyCode"
                  onChange={this.handleChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary mb-2"
              >
                Verify
              </button>
            </form>
          </div>
        </div>
      </div>
     );
  }
}
 
const mapDispatchToProps = (dispatch) => {
  return {
    createAccount: accountInfo => dispatch(createAccount(accountInfo)),
  }
}
const mapStateToProps = (state) => {
  return {
    messageId: state.user.messageId,
    accountInfo: state.user.accountInfo,
  }
};

Verify.propTypes = {
  createAccount: PropTypes.func,
  messageId: PropTypes.string,
  accountActions: PropTypes.object,
}
export default connect(mapStateToProps, mapDispatchToProps)(Verify);