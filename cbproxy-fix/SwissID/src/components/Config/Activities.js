import React, { Component } from 'react';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';

import NavbarTop from '../NavbarTop';
import Navbar from '../Navbar';

class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: null,
    }
    this.handleChange = this.handleChange.bind(this);
  } 

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.users !== this.props.users ||
      nextState.activities !== this.state.activities
    )
  }

  componentDidUpdate(prevProps) {

    if (prevProps.users !== this.props.users) {
      const { activities } = this.props.users[0];
      this.setState({
        activities,
      });
    }
  }
  handleChange(event) {

  }
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
                  checked
                  onChange={this.handleChange}
                />
                Logon/Logoff&nbsp;
              </label>
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked
                  onChange={this.handleChange}
                />
                Transfers&nbsp;
              </label>
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked
                  onChange={this.handleChange}
                />
                Notifications&nbsp;
              </label>
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked
                  onChange={this.handleChange}
                />
                Problems&nbsp;
              </label>
            </div>
            <div>
              <ul className="list-group">
                {
                  this.state.activities && (
                    this.state.activities.map((item, index) => {
                      return (
                        <li className="list-group-item" key={ index }>
                          { moment.unix(item.logon_time.seconds).format("MMM Do YYYY h:mm:ss") }
                          &nbsp;
                          {
                            item.event
                          }
                          <a href="#" className="link-color">details</a>
                        </li>
                      )
                    })
                  )
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
     );
  }
}
 
const mapStateToProps = (state) => {
  return {
    users: state.firestore.ordered.users,
    userInfo: state.user.userInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

Activities.propTypes = {
  users: PropTypes.array,
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