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
            <figure>
              <div className="images">
                <img className="graph" src="/ratio.png" />
                <img className="graph" src="/variables.png" />
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
              <i>
                As you can see there are many people who may or may not of shared similar, if not
                the same experiences as you!
              </i>
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
