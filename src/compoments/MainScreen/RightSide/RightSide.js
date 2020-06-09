import React from 'react';
import './RightSide.scss';
import Areas from './Areas/Areas';

import cv from '../../../assets/cv.pdf';

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

  componentDidMount() {
    if (window.innerWidth < 1000)
      this.setState({
        bioStyle: {
          height: 'auto',
          display: 'flex',
        },
      });
  }

  refresh = () => {
    this.setState({
      bioStyle: {
        height: window.innerWidth < 1000 ? 'auto' : '70%',
        display: 'flex',
      },
    });
  };

  render() {
    return (
      <div
        id="right-side"
        style={{
          marginTop: this.props.topHeight + 'px',
        }}
      >
        <Areas switchToArea={this.switchToArea} refresh={this.refresh} />
        <div id="bio-contact">
          <div id="email-container">
            <a href="mailto:aflaviusandrei@gmail.com">Get in touch</a>
          </div>
          <div id="cv-container">
            <a href={cv}>Résumé</a>
          </div>
        </div>
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
            <div className="skill-set">
              <h3 className="skill-header">Languages</h3>
              <span className="separator"></span>
              <ul>
                <li>JavaScript</li>
                <li>Python</li>
                <li>PHP</li>
              </ul>
            </div>
            <div className="skill-set">
              <h3 className="skill-header">Libraries</h3>
              <span className="separator"></span>
              <ul>
                <li>React.js</li>
                <li>Selenium, WebDriver</li>
                <li>Axios</li>
                <li>jQuery, Bootstrap</li>
                <li>Express.js</li>
              </ul>
            </div>
            <div className="skill-set">
              <h3 className="skill-header">Technologies</h3>
              <span className="separator"></span>
              <ul>
                <li>Node.js</li>
                <li>Wordpress, WooCommerce</li>
                <li>MongoDB, MySQL</li>
                <li>Shopify</li>
                <li>Liquid</li>
                <li>SCSS</li>
              </ul>
            </div>
            <div className="skill-set">
              <h3 className="skill-header">Tools</h3>
              <span className="separator"></span>
              <ul>
                <li>Git</li>
                <li>NPM, Pip</li>
                <li>ESLint</li>
                <li>Moustache, Handlebars</li>
              </ul>
            </div>
            <div className="skill-set">
              <h3 className="skill-header">More fun stuff</h3>
              <span className="separator"></span>
              <ul>
                <li>Photoshop, Illustrator, Premiere Pro</li>
                <li>Adobe XD</li>
                <li>JetBrains</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
