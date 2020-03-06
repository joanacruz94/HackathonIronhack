import React, { Component } from 'react';
import './style.scss';

export class Home extends Component {
  render() {
    return (
      <div className="homeDisplay">
        <div className="homeStatement">
          <h1>G@PP</h1>
          <h4>It's time to reduce it...</h4>
        </div>
        <div className="homeDescription">
          <img src="https://i.ytimg.com/vi/GnmPhTsviSY/maxresdefault.jpg" />
          <br />
          <h2>What do we do?</h2>
          <p>
            <i>
              "Equality is about ensuring that every individual has an equal opportunity to make the
              most of their lives and talents."
            </i>
            <br />
            <br />
            Across Portugal there are many cases of discrimination and inequality in the work place.
            We want to ensure that everyone has a voice and can record incidents of inequality or
            inappropriate behvaiour in the work place - so that others don't go through the same
            thing.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
