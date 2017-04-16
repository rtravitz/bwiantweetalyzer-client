import React, { Component } from 'react';

const SENTIMENTS = {"positive":"pos", "negative":"neg", "neutral":"neutral"}

export default class Readout extends Component {
  get percentage () {
    return Math.round(parseFloat(this.props.probability[SENTIMENTS[this.props.label]]) * 100)
  }

  render() {
    return (
      <div className="col-md-3 col-sm-12 result-box">
        <h3 className="center">Based on his tweets, Brian is feeling {this.props.label} recently! The tweets are {this.percentage}% {this.props.label}.</h3>
      </div>
    );
  }
}
