import React, { Component } from 'react';
import Controls from './Controls';
import Readout from './Readout';
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
      label: "neutral"
    }
  }
  render() {
    return (
      <div className="App">
        <div className="row">
          <div id="sidebar" className="col-3">
            <h3 className="header">Bwiantweetalyzer</h3>
            <Controls />
          </div>
          <Readout label={this.state.label} />
        </div>
      </div>
    );
  }
}

export default App;
