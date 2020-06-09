import React from 'react';
import './LeftSide.scss';
import DynamicTitle from './DynamicTitle/DynamicTitle';

export default class LeftSide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="left-side" style={{ height: this.props.topHeight + 'px' }}>
        <h1 className="name">Flavius</h1>
        <h1 className="name lower-name">Agrigoroaei</h1>

        <div id="dynamic-title-container">
          <DynamicTitle />
        </div>

        <div id="social">
          <a
            href="https://www.facebook.com/aflaviusandrei/"
            className="social-element"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/flavius-agrigoroaei-b2b08918b/"
            className="social-element"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/aflaviusandrei"
            className="social-element"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    );
  }
}
