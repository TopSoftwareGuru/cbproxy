import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl';

class Menubar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      mode: this.props.mode,
     }
  };

  render() { 
    return ( 
      <div className="text-center my-4">
        <Link to="/">
          <FormattedMessage
            id="navtop.start"
            defaultMessage="Start"
          />
        </Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/">
          <strong>
            <FormattedMessage
              id="navtop.next"
              defaultMessage="Next"
            />
          </strong>
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/config">
          <FormattedMessage
            id="navtop.config"
            defaultMessage="Config"
          />
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="#">
          RFQ style
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="#">
          Crypto Dev
        </Link>
      </div>
     );
  }
}
 
export default Menubar;