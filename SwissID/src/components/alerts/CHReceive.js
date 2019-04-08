import React, { Component } from 'react';

class CHReceive extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { description } = this.props;
    return ( 
      <div className="alert alert-success alert-dismissible fade show my-4 success-alert" role="alert">
        <strong>
          Success!
          </strong>
        &nbsp;{description}
        <button type="button" className="close" data-dismiss="alert">
          <span>&times;</span>
        </button>
      </div>
     );
  }
}
 
export default CHReceive;