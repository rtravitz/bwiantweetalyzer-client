import React, { Component } from 'react';
import Landing from './Landing';
import Readout from './Readout';
import '../css/App.css';
const rp = require('request-promise');

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
      loading: false,
      results: false
    }

    this.clickAnalyze = this.clickAnalyze.bind(this)
  }

  async clickAnalyze(event) {
    event.preventDefault()
    this.setState({loading: !this.state.loading})
    const response = await rp('http://localhost:8081/analyze')
    const analysis = JSON.parse(response) 
    console.log(analysis)
    this.setState({probability: analysis.probability, label: analysis.label, loading: !this.state.loading, results: true})
  }

  get landingOrReadout() {
    if (this.state.results) {
      return <Readout label={this.state.label} />
    } else {
      return <Landing loading={this.state.loading} onClickAnalyze={this.clickAnalyze} />
    }
  }

  render() {
    return (
      <div className="App container">
        {this.landingOrReadout}
      </div>
    );
  }
}

export default App;
