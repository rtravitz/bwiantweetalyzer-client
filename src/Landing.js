import React, { Component } from 'react';
import Controls from './Controls';

export default class Landing extends Component {
  get BrianFace() {
    var classtype;
    this.props.loading ? classtype = "brianheader-loading" : classtype = "brianheader"
    return (<img src="brianface.png" id="brianheader" alt="brian head" className={classtype} />)
  }

  render() {
    return (
      <div>
        <div className="header-text-block col-md-4 col-md-offset-4">
          <h1 className="header text-center">Bwiantweetalyzer</h1>
        </div>
        <div className="row">
          <div className="header-img-block col-md-4 col-md-offset-4">
            {this.BrianFace}
          </div>
        </div>
        <Controls onClickAnalyze={this.props.onClickAnalyze}/>
      </div>
    )
  }
}
