import React, { Component } from 'react';
import './style.scss';

import renderGraphs from "./render-graphs"

export class Graphics extends Component {
  average(array) {
    const sum = array.reduce((acc, value) => acc + value);
    const rounded = Math.round((sum / array.length + Number.EPSILON) * 100) / 100;
    if (rounded < 1) return rounded * 100 + ' %';
    return rounded;
  }

  componentDidMount(){
    const docs_json_1 = document.getElementById('3641').textContent;
    const render_items_1 = [{"docid":"c671cd4a-3988-4c95-b037-29a9bd2df449","roots":{"3481":"65e27591-fd25-4f57-86b0-7a2976115cc7"}}];
    
    renderGraphs(docs_json_1,render_items_1)

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
            <div class="bk-root" id="65e27591-fd25-4f57-86b0-7a2976115cc7" data-root-id="3481"></div>
            {/* {data.map(entry => (
              <p>{this.average(entry)}</p>
            ))} */}
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
