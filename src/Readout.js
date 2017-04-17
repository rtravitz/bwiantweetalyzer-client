import React, { Component } from 'react';

const SENTIMENTS = {"pos":"positive", "neg":"negative", "neutral":"neutral"}
const REACTIONS = {"pos":"brianface.png", "neg":"brianangry.png", "neutral":"brianneutral.png"}

export default class Readout extends Component {
  get percentage () {
    return Math.round(parseFloat(this.props.probability[this.props.label]) * 100)
  }

  render() {
    return (
      <div>
        <div className="col-md-6 col-md-offset-3 well results-box">
          <button className="btn btn-lg btn-info" onClick={this.props.onGoAgain}>Go Again!</button>
          <img src={REACTIONS[this.props.label]} alt="brian head" className="reaction-head" />
          <h3 className="results-text center">Based on his tweets, Brian is feeling {SENTIMENTS[this.props.label]} recently! The tweets are {this.percentage}% {SENTIMENTS[this.props.label]}.</h3>
          {this.props.tweets.map((tweet, idx) => (<p className="results-tweet" key={idx}>{tweet.text}</p>))}
        </div>
      </div>
    );
  }
}
