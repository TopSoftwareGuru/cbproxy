import React, { Component } from 'react';

class CHReceive extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="alert alert-success alert-dismissible fade show my-4" role="alert">
        <strong>
          Success!
          </strong>
        &nbsp;Transfer CHF +7'800.00 from your ABC account CH received.
        <button type="button" className="close" data-dismiss="alert">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
     );
  }
}
 
export default CHReceive;