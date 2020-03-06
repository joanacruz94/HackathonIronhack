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
    const docs_json_2 = document.getElementById('6038').textContent;
    const render_items_2 = [{"docid":"9f7b08f3-3e02-4b3b-b8d4-c4ebf33d86fe","roots":{"5836":"bdc8de4a-4a5b-4391-9507-b66f9ada59f7"}}];
    const docs_json_3 = document.getElementById('5835').textContent;
    const render_items_3 = [{"docid":"1e1dc02a-7678-4541-b635-f0188d92727b","roots":{"5675":"e1b0fdae-5bfb-4c08-b28d-03fcd62813c8"}}];
    renderGraphs(docs_json_1,render_items_1);
    renderGraphs(docs_json_2,render_items_2);
    renderGraphs(docs_json_3,render_items_3);
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
            <figure>
              <div className="images">
                <div class="bk-root" id="bdc8de4a-4a5b-4391-9507-b66f9ada59f7" data-root-id="5836"></div>
                <div class="bk-root" id="65e27591-fd25-4f57-86b0-7a2976115cc7" data-root-id="3481"></div>
              </div>
              <figcaption>
                <strong>Q17:</strong>Does you company have a target for the gender composition of
                governing bodies?
                <strong>Q18:</strong>Do you think women are as likely as male to get promoted?
                <br />
                <strong>Q19:</strong>Do you think women are as likely as men to resign?
                <br />
                <strong>Q20:</strong>Do you think women are as likely as men to get fired?
                <br />
                <strong>Q21:</strong>Do you think or organisation is concerned regarding gender
                inequalities?
                <br /> <strong>Q22:</strong>Has your company done anything to address gender
                inequalities?
                <br />
                <strong>Q23:</strong>Would your employer provide your parental leave?
                <br />
                <strong>Q24:</strong>Would you be penalised if you were to have a child?
                <br />
                <strong>Q25:</strong>Have you ever been harassed in your workplace?
                <br />
                <strong>Q26:</strong>Does your company have the right support system to handle this
                kind of situations?
                <br />
                <strong>Q27:</strong>Does your company have support systems for people that suffer
                domestic abuse?
              </figcaption>
            </figure>
            <p>
              As you can see there are many people who may or may not of shared similar, if not the
              same experiences as you!{' '}
            </p>
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
