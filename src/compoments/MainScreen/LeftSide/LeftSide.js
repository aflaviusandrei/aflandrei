import React from 'react';
import './LeftSide.css';
import DynamicTitle from './DynamicTitle/DynamicTitle';

export default class LeftSide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="left-side">
        <h1 className="name">Flavius</h1>
        <h1 className="name lower-name">Agrigoroaei</h1>

        <div id="dynamic-title-container">
          <DynamicTitle />
        </div>

        <div id="social">
          <a href="" className="social-element">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="social-element">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="" className="social-element">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    );
  }
}
