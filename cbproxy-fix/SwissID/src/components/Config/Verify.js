import React, { Component } from 'react';

class Verify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verifyCode: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    
  }
  render() { 
    return ( 
      <div className="container">
        <div className="row my-5">
          <div className="col-md-6">
            <form className="form-inline" onSubmit={this.handleSubmit}>
              <div className="form-group mb-2">
                <label
                  className="sr-only"
                > 
                  Verification Code
                </label>
                <input
                  type="text"
                  readOnly
                  className="form-control-plaintext"
                  defaultValue="Verification Code"
                />
              </div>
              <div className="form-group mx-sm-3 mb-2">
                <input
                  type="text"
                  className="form-control"
                  name="verifyCode"
                  onChange={this.handleChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary mb-2"
              >
                Verify
              </button>
            </form>
          </div>
        </div>
      </div>
     );
  }
}
 
export default Verify;