import React, { Component } from 'react';
import Controls from './Controls';
import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      probability: {
      "neg": 0.1786235755728226,
      "neutral": 0.6485293472899425,
      "pos": 0.8213764244271774
      },
      label: "neutral",
      loading: false
    }

    this.clickAnalyze = this.clickAnalyze.bind(this)
  }

  get BrianFace() {
    var classtype;
    this.state.loading ? classtype = "brianheader-loading" : classtype = "brianheader"
    return (<img src="brianface.png" id="brianheader" alt="brian head" className={classtype} />)
  }

  clickAnalyze(event) {
    event.preventDefault()
    this.setState({loading: !this.state.loading})
  }

  render() {
    return (
      <div className="App container">
        <div className="header-text-block col-md-4 col-md-offset-4">
          <h1 className="header text-center">Bwiantweetalyzer</h1>
        </div>
        <div className="row">
          <div className="header-img-block col-md-4 col-md-offset-4">
            {this.BrianFace}
          </div>
        </div>
        <Controls onClickAnalyze={this.clickAnalyze}/>
      </div>
    );
  }
}

export default App;
