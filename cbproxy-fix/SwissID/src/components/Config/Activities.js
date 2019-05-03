import React, { Component } from 'react';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';

import Navbar from '../Navbar';

class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: null,
      logonoff: true,
      chfreceived: true,
      chfsent: true,
    }
    this.handleChange = this.handleChange.bind(this);
    this.getStyledCurrency = this.getStyledCurrency.bind(this);
  } 

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.userEntity !== this.props.userEntity ||
      nextState.activities !== this.state.activities
    )
  }
  componentDidUpdate(prevProps) {
    if (prevProps.userEntity !== this.props.userEntity) {
      const { activities } = this.props.userEntity[0];
      this.setState({ activities });
    }
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.checked
    });
    console.log([event.target.name], event.target.checked)
  }
  getStyledCurrency(event, value) {
    let fixedVal = parseFloat(value).toFixed(2);
    return fixedVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  render() { 
    const { activities } = this.props.userEntity[0];
    const { logonoff, chfsent, chfreceived } = this.state;
    console.log(chfreceived);
    return ( 
      <div className="container">
        <div className="row">
          <div className="col-md-6 my-4">
            <Navbar />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 my-3 mb-3">
            <h3>Activities</h3>
            <h4>Data Export</h4>
            <div>
              <p>You can always export you data in either
                <a href="#" className="link-color">&nbsp;Microsoft&nbsp;Excel(.xlsx)&nbsp;</a>
                format,&nbsp;or in&nbsp;
                <a href="#" className="link-color">PDF/A format.</a>
              </p>
            </div>
            <h3>Recent Activities</h3>
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={this.state.logonoff}
                  name="logonoff"
                  onChange={this.handleChange}
                />
                Logon/Logoff&nbsp;
              </label>
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="chfreceived"
                  checked={this.state.chfreceived}
                  onChange={this.handleChange}
                />
                CHF Received&nbsp;
              </label>
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={this.state.chfsent}
                  name="chfsent"
                  onChange={this.handleChange}
                />
                CHF Sent&nbsp;
              </label>
            </div>
            <div>
              <table className="table table-gray table-activities">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Content</th>
                    <th scope="col">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    activities.map((item, key) => {
                      return (
                        <tr key={key}>
                          <th scope="row">{ key+1 }</th>
                          <td>
                            { item.event === "TI" && chfreceived && `Inbound credit transfer received: 
                              ${parseFloat(item.amount).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} CHF`
                            }
                            { item.event === "TO" && `Outbound Debtor transfer sent: 
                              ${parseFloat(item.amount).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} CHF`
                            }
                            { item.event === "LOGON" && `Logon from ${item.ip}` }
                            { item.event === "LOGOUT" && `Logout` }
                            { item.event === "ACCOUNT" && `Account created` }
                          </td>
                          <td>
                            { moment(item.time).format("MMM Do YYYY, h:mm:ss a") }
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

Activities.propTypes = {
  userEntity: PropTypes.array,
  userInfo: PropTypes.object,
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    return (
      [
        { collection: 'users', doc: props.userInfo.email },
      ]
    )
  })
)(Activities);