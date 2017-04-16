import React, { Component } from 'react';

export default class Controls extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <form onSubmit={this.props.onClickAnalyze}>
            <div className="form-group">
              <label htmlFor="numTweets">How many tweets?</label>
              <input className="form-control" type="number" id="numTweets" />
            </div>
            <div>
              <label className="slider-label">Include RTs?</label>
              <label className="switch" htmlFor="rts">
                <input id="rts" type="checkbox" />
                <div className="slider round"></div>
              </label>
            </div>
            <button id="ctrls-submit" className="btn btn-info btn-block">Analyze</button>
          </form>
        </div>
      </div>
    );
  }
}
