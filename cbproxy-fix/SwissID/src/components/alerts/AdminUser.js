import React, { Component } from 'react';

class AdminUser extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="alert alert-warning alert-dismissible fade show my-4" role="alert">
        Logged on as <strong>admin User</strong>&nbsp;proceed with caution.
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
     );
  }
}
 
export default AdminUser;