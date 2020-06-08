import React from 'react';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import './MainScreen.scss';

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="main-container">
        <LeftSide></LeftSide>
        <RightSide></RightSide>
      </div>
    );
  }
}
