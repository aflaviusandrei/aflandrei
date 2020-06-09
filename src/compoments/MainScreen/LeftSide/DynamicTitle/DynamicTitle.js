import React from 'react';
import './DynamicTitle.scss';

export default class DynamicTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 0,
      selectedTitle: 'Web developer.',
      titles: [
        'Web developer.',
        'Web designer.',
        'Cat owner.',
        'Software developer.',
        'UI/UX designer.',
        'Intellectually curious.',
        'Philosophy junkie.',
      ],
    };
  }

  updateTitle = (title) => {
    this.setState({
      selectedTitle: title,
    });
  };

  componentDidMount() {
    let firstOne = 1;

    var currentTitle = this.state.selectedTitle,
      newTitle,
      k = 0,
      newOne = 0,
      newIndex,
      timePassed = 0,
      go = 0,
      firstTime = 1;
    if (this.state.title === this.state.titles.length - 1) newIndex = 0;
    else newIndex = this.state.title + 1;

    newTitle = this.state.titles[newIndex];

    let shiftingState = 1;

    let shiftingFunction = () => {
      if (currentTitle.length && !newOne && go) {
        currentTitle = currentTitle.slice(0, -1);
        this.updateTitle(currentTitle);
      } else if (newTitle.length !== currentTitle.length && go) {
        newOne = 1;
        currentTitle = currentTitle + newTitle[k];
        k++;
        this.updateTitle(currentTitle);
        if (firstTime) firstTime = 0;
      } else {
        go = 0;
        timePassed += 50;
        if (timePassed >= 3000) {
          console.log('Changed go, newOne is ' + newOne);
          go = 1;
          timePassed = 0;
        }
        if (go && !firstTime) {
          shiftingState = 0;
          newOne = 0;
          currentTitle = this.state.titles[newIndex];
          this.setState({
            title: newIndex,
          });
          firstOne = 0;
          k = 0;
          newOne = 0;
          if (this.state.title === this.state.titles.length - 1) newIndex = 0;
          else newIndex = this.state.title + 1;

          newTitle = this.state.titles[newIndex];
        }
      }
    };

    setInterval(shiftingFunction, 25);
  }

  render() {
    return (
      <div id="changing-title">
        <h1 className="title">{this.state.selectedTitle}</h1>
        <span className="title-line"></span>
        <span className="dynamic-background"></span>
      </div>
    );
  }
}
