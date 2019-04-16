import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

class NavbarTop extends Component {
  constructor(props) {
    super(props);
    this.state = { 

    }
  }
  render() { 
    return ( 
      <div className="container text-center mb-3 navbar-top">
        <Link to="/" className="link-color">
          <FormattedMessage
            id="navtop.start"
            defaultMessage="Start"
          />
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="#" className="link-color">
          <strong>
            <FormattedMessage
              id="navtop.next"
              defaultMessage="Next"
            />
          </strong>
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
      </div>
     );
  }
}
 
export default NavbarTop;