import React from 'react';
import './RightSide.css';
import Areas from './Areas/Areas';

export default class RightSide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bioStyle: {
        height: '70%',
        display: 'flex',
      },
    };
  }

  switchToArea = () => {
    this.setState({
      bioStyle: {
        height: '0%',
        display: 'flex',
      },
    });
    setTimeout(() => {
      this.setState({
        bioStyle: {
          height: '0%',
          display: 'none',
        },
      });
    }, 150);
  };

  render() {
    return (
      <div id="right-side">
        <Areas switchToArea={this.switchToArea} />
        <div id="bio" style={this.state.bioStyle}>
          <h3>ABOUT ME</h3>
          <p>
            Hi! I'm a 20-year-old programmer based in Romania that's developed a{' '}
            <strong>passion</strong> for all things web-related.
          </p>
          <p>
            I particularly like working with <strong>JavaScript</strong> tools
            like React.js and Node.js, automating stuff with{' '}
            <strong>Python</strong> scripts, designing beautiful interfaces with{' '}
            <strong>HTML & CSS</strong> or increasing my{' '}
            <strong>digital marketing </strong>
            skills by learning more about modern platforms like Facebook Ads
            Manager and Google Ads.
          </p>
          <p>
            However, I can be much more flexible than that and am continually
            learning. Below are most of the technologies that I have experience
            with:
          </p>
          <div id="skills">
            <div class="skill-set">
              <h3 class="skill-header">Languages</h3>
              <span class="separator"></span>
              <ul>
                <li>JavaScript (ES6)</li>
                <li>Python</li>
                <li>PHP</li>
                <li>C++</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
