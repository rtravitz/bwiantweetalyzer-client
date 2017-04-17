import React, { Component } from 'react';
import Landing from './Landing';
import Readout from './Readout';
import '../css/App.css';
const rp = require('request-promise');
const API_BASE = "https://damp-temple-92591.herokuapp.com"

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
      results: false,
      tweets: [{text: "testing tweet"},{text: "testing tweet"},{text: "testing tweet"},{text: "testing tweet"}]
    }

    this.clickAnalyze = this.clickAnalyze.bind(this)
    this.clickGoAgain = this.clickGoAgain.bind(this)
  }

  async clickAnalyze(event) {
    event.preventDefault()
    this.setState({loading: !this.state.loading})
    const numTweets = document.getElementById('numTweets').value
    const includeRTs = document.getElementById('rts').checked
    const options = {
      uri: API_BASE + '/analyze',
      qs: {
        numTweets: numTweets,
        includeRTs: includeRTs
      },
      json: true
    }
    const response = await rp(options)
    console.log(response)
    this.setState({
      tweets: response.tweets,
      probability: response.sentiment.probability,
      label: response.sentiment.label,
      loading: !this.state.loading,
      results: true
    })
  }

  clickGoAgain() {
    this.setState({results: false})
  }

  get landingOrReadout() {
    if (this.state.results) {
      return <Readout tweets={this.state.tweets} probability={this.state.probability} label={this.state.label} onGoAgain={this.clickGoAgain} />
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
