import React, { Component } from 'react';
import '../css/simple-grid.css'

export default class Readout extends Component {
  render() {
    return (
      <div className="col-3 result-box">
        <h3 className="center">Brian is feeling pretty {this.props.label} today!</h3>
      </div>
    );
  }
}
