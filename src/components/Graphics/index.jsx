import React, { Component } from 'react';
import './style.scss';

export class Graphics extends Component {
  average(array) {
    const sum = array.reduce((acc, value) => acc + value);
    const rounded = Math.round((sum / array.length + Number.EPSILON) * 100) / 100;
    if (rounded < 1) return rounded * 100 + ' %';
    return rounded;
  }

  render() {
    const { data } = this.props;

    return (
      <div>
        <div className="graphicFace">
          <div className="graphicIntro">
            <h1>Look at the facts....</h1>
            <p>
              You are not alone if you have experienced or have been subjected to inequality in the
              work place. Underneath are attached studies that are all up to date from those like
              you - who speak out about their experiences to help others in the future & raise
              awareness across the nation.
            </p>
            {/* {data.map(entry => (
              <p>{this.average(entry)}</p>
            ))} */}
            <img className="graph" src="/ratio.png" />
            <p>Dummy text</p>
            <img className="graph" src="/variables.png" />
          </div>
        </div>

        {/* {data.map(entry => (
          <p>{this.average(entry)}</p>
        ))} */}
      </div>
    );
  }
}

export default Graphics;
