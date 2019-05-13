import React, { Component } from 'react';

class DeactivateModal extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
    this.handleDeactivate = this.handleDeactivate.bind(this);
  }

  handleDeactivate() {
  
  }
  render() { 
    if(!this.props.show) {
      return null;
    }
    const { deMode } = this.props;
    return ( 
      <div className="backdrop">
        <div className="text-center modal-style">
        <div className="col-md-12">
            <div className="row">
              <div className="col-md-2 delete-title">
                Warning
              </div>
            </div>
            <div className="row">
              <span className="delete-warning">
                {this.props.children}
                &nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            </div>
            <div className="row btn-row text-center">
              <button
                type="button"
                className="btn btn-primary btn-delete"
                onClick={ this.props.onClose }
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-warning btn-cancel"
                onClick={ deMode === true ? this.props.deActive : this.props.onClose }>
                I&nbsp;understand
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default DeactivateModal;