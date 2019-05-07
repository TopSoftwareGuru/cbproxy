import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux'
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import Navbar from '../Navbar';
import CHReceive from '../alerts/CHReceive';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      balance: null,
      name: null,
      abc_account: null,
      xyz_account: null,
      account_status: null,
    }
  }
  componentWillMount() {
    if (this.props.userEntity) {
      const { balance, name, abc_account, iban } = this.props.userEntity[0];
      this.setState({ balance, name, abc_account, xyz_account: iban });
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.userEntity !== this.props.userEntity ||
      nextState.balance !== this.state.balance ||
      nextState.name !== this.state.name ||
      nextState.abc_account !== this.state.abc_account ||
      nextState.xyz_account !== this.state.xyz_account ||
      nextState.account_status !== this.state.account_status
    )
  }
  componentDidUpdate(prevProps) {
    if (prevProps.userEntity !== this.props.userEntity) {
      const {
        balance,
        name,
        abc_account,
        iban,
        account_status
      } = this.props.userEntity[0];
      this.setState({
        balance,
        name, abc_account,
        xyz_account: iban,
        account_status
      });
    }
  }
  render() { 
    const { balance, name, abc_account, xyz_account, account_status } = this.state;
    return ( 
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center my-4">
            <Navbar />
            {/* <CHReceive
              description={
                <FormattedMessage
                  id="alert.transfer.from"
                  defaultMessage="Transfer CHF +7\'800.00 from your ABC account CH received."
                />
              }
              mode={0}
            /> */}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 my-4">
            <h3>User Information</h3>
            <p>
              Bank&nbsp;ABC&nbsp;|&nbsp;IBAN&nbsp;{ abc_account }&nbsp;|&nbsp;IBAN&nbsp;{ xyz_account }
            </p>
            <p>name:&nbsp;{ name }</p>
            <h4>
              <FormattedMessage
                id="home.balance"
                defaultMessage="Your Balance at Bank XYZ:"
              />
            </h4>
            <h3>CHF { parseFloat(balance).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }</h3>
          </div>
        </div>
      </div>
     );
  }
}
 
const mapStateToProps = (state) => {
  return {
    userEntity: state.firestore.ordered.users,
    userInfo: state.user.userInfo,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    return (
      [
        { collection: 'users', doc: props.userInfo.email }
      ]
    )
  })
)(Home);