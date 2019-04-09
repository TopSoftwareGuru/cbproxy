import React, { Component } from 'react';
import NavbarTop from '../NavbarTop';
import Navbar from '../Navbar';
import CHReceive from '../alerts/CHReceive';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSubmit(event) {

  }
  render() { 
    return ( 
      <div className="container">
        <div className="row my-4">
          <div className="col-md-6">
            <NavbarTop />
            <Navbar />
            <CHReceive
              description="XYZ Account with IBAN CH99 2222 4415 5036 7150 5 created."
              mode={0}
            />
            <strong>
              <a href="#">Transfer CHF to your new XYZ account</a>
            </strong>
          </div>
        </div>
        <div className="row profile">
          <div className="col-md-6 account-details">
            <h3>Account Details</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>CHF Account at XYZ</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="IBAN CH99 2222 4415 5036 7150 5"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Account Status</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="waiting for verification | active | suspended | retired"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>XYZ Product:</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="XYZ basic account"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Whitelisted bank account for in/out transfers</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="my ABC bank account | CH33 0078 1015 5036 7150 3"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="Joe F. Doe"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>OpenID</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="<openID URL>"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>eID Level</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="LOT2 (VSB3)"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="Himmelstürli 7, 8002 Züich, Switzerland"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Language given by SwissID</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="German"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Choose a language for this user interface:</label>
                <select className="form-control">
                  <option>German</option>
                  <option>English</option>
                  <option>French</option>
                </select>
              </div>
              <div className="form-group">
                <label>Gender</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="male"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Age</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="37"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Nationality</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="Swiss"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>EMail Address</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="joe.doe@gmail.com"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Mobile Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="+41 79 907 07 08"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Whitelisted bank account for in/out transfers</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="my ABC bank account | CH33 0078 1015 5036 7150 3"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Send transfer notification</label>
                <div>
                  <label className="checkbox-inline">
                    <input
                      type="checkbox"
                      onChange={this.handleChange}
                      checked
                    />
                    send E-Mail (no fees apply)
                  </label>
                  <label className="checkbox-inline">
                    <input
                      type="checkbox"
                      onChange={this.handleChange}
                      checked
                    />
                    send SMS (fee 0.20 CHF per SMS)
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <button
                  type="button"
                  className="btn-default account-cancel"
                >
                  Cancel
                </button>
                  &nbsp;&nbsp;
                <button
                  type="submit"
                  className="btn-default account-save-changes"
                >
                  Save Changes
                </button>
              </div>
            </form>
            <p className="close-account">Want to suspend or terminate this account?&nbsp;
              <a href="#">
                Click here
              </a>
              &nbsp;
              (not implemented yet)
            </p>
          </div>
        </div>
      </div>
     );
  }
}
 
export default UserProfile;