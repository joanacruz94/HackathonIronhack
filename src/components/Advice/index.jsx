import React, { Component } from 'react';
import './style.scss';

export class Advice extends Component {
  render() {
    return (
      <div>
        <div className="adviceDisplay">
          <img
            src="https://roox.pt/wp-content/uploads/2018/01/roox-support-helpdesk.png"
            alt="telephone support"
          />
          <div className="adviceBox">
            <h2>Helpdesk Support Service</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
          </div>
          <img
            className="adviceDisplay"
            src="https://i.pinimg.com/originals/64/34/d7/6434d72ce9e16251c4f41f4e5a146567.png"
          />
          <div className="adviceBox">
            <h2>Doctors</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
          </div>
          <img
            className="adviceDisplay"
            src="https://cdn3.iconfinder.com/data/icons/communication-2-2/256/People_Communicating-512.png"
          />
          <div className="adviceBox">
            <h2>Communicating With Others</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Advice;
