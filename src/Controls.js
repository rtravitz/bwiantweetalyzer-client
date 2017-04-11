import React, { Component } from 'react';

export default class Controls extends Component {
  render() {
    return (
      <div>
        <form>
          <label>How many tweets?</label>
          <input type="text" />
          <label htmlFor="rts">
            Include RTs?
            <input id="rts" type="checkbox" />
          </label>
          <button id="ctrls-submit" className="btnBlend">Analyze</button>
        </form>
      </div>
    );
  }
}
