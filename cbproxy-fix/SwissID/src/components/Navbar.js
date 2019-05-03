import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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

  handleLogout() {
    localStorage.removeItem("accessToken");
    this.props.activityLogout();
  }
  render() {
    return (
      <div className="container-fluid text-center navbar-top">
        <Link to="/home" className="link-color">
          <FormattedMessage
            id="navtop.home"
            defaultMessage="Home"
          />
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/new" className="link-color">
          <FormattedMessage
            id="navtop.new"
            defaultMessage="New"
          />
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/transfer_in" className="link-color">
          TxIN
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/transfer_out" className="link-color">
          TxOut
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/activities" className="link-color">
          <FormattedMessage
            id="navtop.activities"
            defaultMessage="activities"
          />
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/config" className="link-color">
          <FormattedMessage
            id="navtop.config"
            defaultMessage="Config"
          />
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/profile" className="link-color">
          <FormattedMessage
            id="navtop.profile"
            defaultMessage="Profile"
          />
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
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

Navbar.propTypes = {
    activityLogout: PropTypes.func.isRequired,
}
export default connect(null, mapDispatchToProps)(Navbar);
