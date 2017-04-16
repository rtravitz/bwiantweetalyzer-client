import React, { Component } from 'react';
import Landing from './Landing';
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


  clickAnalyze(event) {
    event.preventDefault()
    this.setState({loading: !this.state.loading})
  }

  render() {
    return (
      <div className="App container">
        <Landing loading={this.state.loading} onClickAnalyze={this.clickAnalyze}/>
      </div>
    );
  }
}

export default App;
