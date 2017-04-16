import React, { Component } from 'react';

export default class Readout extends Component {
  render() {
    return (
      <div className="col-md-3 col-sm-12 result-box">
        <h3 className="center">Brian is feeling pretty {this.props.label} today!</h3>
      </div>
    );
  }
}
