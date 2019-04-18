import React, { Component } from 'react';

class CHReceive extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      description: "",
      mode: 0,
      alertBrand: "",
      alertGap:0
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
    const succesClassName = "alert alert-success alert-dismissible fade-in show my-4 success-alert";
    const warningClassName = "alert alert-warning alert-dismissible fade-in show my-4 warning-alert";
    return ( 
      <div className={this.state.alertGap === 1 ? "my-5": ""}>
        <div
          className={this.state.mode === 0 ? succesClassName: warningClassName}
          role="alert"
        >
          <strong>
            {alertBrand}
            </strong>
          &nbsp;{description}
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            onClick={()=> {this.setState({alertGap: 1})}}
          >
            <span>&times;</span>
          </button>
        </div>
      </div>
     );
  }
}
 
export default CHReceive;