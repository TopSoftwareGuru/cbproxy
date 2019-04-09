import React, { Component } from 'react';

class CHReceive extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      description: "",
      mode: 0,
      alertBrand: "",
     }
  };

  componentWillMount() {
    const { description, mode } = this.props;
    this.setState({
      description,
      mode,
    });

  }
  render() { 
    const { description, mode } = this.state;
    const alertBrand = mode === 0 ? "Success!" : "";
    return ( 
      <div className="alert alert-success alert-dismissible fade show my-4 success-alert" role="alert">
        <strong>
          {alertBrand}
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