import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { activityLogout } from './store/actions/actions';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 0
    };
    this.handleLogout = this.handleLogout.bind(this);
  }
  componentWillMount() {
    const { account_status } = this.props.userEntity[0];
    account_status === "active" ?
      this.setState({ mode: 1 })
      :
      this.setState({ mode: 0 })
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.userEntity[0] !== this.props.userEntity[0] ||
      nextState.mode !== this.state.mode
    )
  }
  componentDidUpdate(prevProps) {
    if (prevProps.userEntity[0].account_status === "active") {
      this.setState({ mode: 1 });
    } else {
      this.setState({ mode: 0 });
    }
  }
  handleLogout() {
    localStorage.removeItem("accessToken");
    this.props.activityLogout();
  }
  render() {
    const { mode } = this.state;
    return (
      <div className="container-fluid text-center navbar-top">
        <Link to="/home" className="link-color">
          <button
            type="button"
            className="btn btn-default"
          >
          <FormattedMessage
            id="navtop.home"
            defaultMessage="Home"
          />
          </button>
        </Link>
        |
        <Link to="/new" className="link-color">
          { mode === 0 && 
            <button
              type="button"
              className="btn btn-default"
            >  
              <FormattedMessage
                id="navtop.new"
                defaultMessage="New"
              />
            </button>
          }
          
        </Link>
        |
        <Link to="/transfer_in" className="link-color">
          { mode === 1 && 
            <button
              type="button"
              className="btn btn-default"
            >
              TxIN
            </button>
          }
        </Link>
        |
        <Link to="/transfer_out" className="link-color">
          { mode === 1 &&
            <button
              type="button"
              className="btn btn-default"
            >
              TxOut
            </button>
          }
        </Link>
        |
        <Link to="/activities" className="link-color">
          <button
            type="button"
            className="btn btn-default"
          >
            <FormattedMessage
              id="navtop.activities"
              defaultMessage="activities"
            />
          </button>
        </Link>
        |
        <Link to="/config" className="link-color">
          <button
            type="button"
            className="btn btn-default"
          >
            <FormattedMessage
              id="navtop.config"
              defaultMessage="Config"
            />
          </button>
        </Link>
        |
        <Link to="/profile" className="link-color">
          <button
            type="button"
            className="btn btn-default"
          >
            <FormattedMessage
              id="navtop.profile"
              defaultMessage="Profile"
            />
          </button>
        </Link>
        |
        <Link
          to="/"
          className="link-color"
        >
          <button
            type="button"
            className="btn btn-default"
            onClick={this.handleLogout}
          >
            <FormattedMessage
              id="navtop.logout"
              defaultMessage="Logout"
            />
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    activityLogout: () => dispatch(activityLogout()),
  }
}
const mapStateToProps = state => {
  return {
    userEntity: state.firestore.ordered.users,
    userInfo: state.user,
  }
}
Navbar.propTypes = {
    activityLogout: PropTypes.func.isRequired,
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
)(Navbar);
