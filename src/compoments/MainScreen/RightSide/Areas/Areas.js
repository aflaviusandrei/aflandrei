import React from 'react';
import './Areas.css';
import bg from '../../../../assets/bg.jpg';

export default class Areas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      areasHeight: '30%',
      gridStyle: {
        marginTop: '0%',
      },
      webStyle: {
        display: 'none',
        opacity: '0',
      },
      designStyle: {
        display: 'none',
        opacity: '0',
      },
      softStyle: {
        display: 'none',
        opacity: '0',
      },
    };
  }

  enlargeArea = (e) => {
    console.log(e.target);
    if (e.target.getAttribute('id') === 'web-button') {
      this.setState({
        areasHeight: '100%',
        gridStyle: {
          marginTop: '-100%',
        },
        webStyle: {
          display: 'flex',
        },
      });
      setTimeout(() => {
        this.setState({
          webStyle: {
            display: 'flex',
            opacity: '1',
          },
          gridStyle: {
            marginTop: '-100%',
            display: 'none',
          },
        });
      }, 250);
    } else if (e.target.getAttribute('id') === 'soft-button') {
      this.setState({
        areasHeight: '100%',
        gridStyle: {
          marginTop: '-100%',
        },
        softStyle: {
          display: 'flex',
        },
      });
      setTimeout(() => {
        this.setState({
          softStyle: {
            display: 'flex',
            opacity: '1',
          },
          gridStyle: {
            marginTop: '-100%',
            display: 'none',
          },
        });
      }, 250);
    } else {
      this.setState({
        areasHeight: '100%',
        gridStyle: {
          marginTop: '-100%',
        },
        designStyle: {
          display: 'flex',
        },
      });
      setTimeout(() => {
        this.setState({
          designStyle: {
            display: 'flex',
            opacity: '1',
          },
          gridStyle: {
            marginTop: '-100%',
            display: 'none',
          },
        });
      }, 250);
    }
    this.props.switchToArea();
  };

  render() {
    return (
      <div id="areas" style={{ height: this.state.areasHeight }}>
        <div id="areas-grid" style={this.state.gridStyle}>
          <div class="grid-member" id="web-button" onClick={this.enlargeArea}>
            <span>
              <i class="fas fa-code"></i>
              <h3>WEB</h3>
            </span>
          </div>
          <div class="grid-member" id="soft-button" onClick={this.enlargeArea}>
            <span>
              <i class="far fa-file-code"></i>
              <h3>SOFTWARE</h3>
            </span>
          </div>
          <div
            class="grid-member"
            id="design-button"
            onClick={this.enlargeArea}
          >
            <span>
              <i class="fas fa-paint-brush"></i>
              <h3>UI/UX</h3>
            </span>
          </div>
        </div>
        <div id="web-area" style={this.state.webStyle}>
          <div class="web-project">
            <div class="project-screen">
              <img src={bg} alt="Project background" />
            </div>
            <div class="project-tech">
              <h3>Project title</h3>
              <p>Project description.</p>
            </div>
          </div>
          <div class="web-project">
            <div class="project-screen">
              <img src={bg} alt="Project background" />
            </div>
            <div class="project-tech"></div>
          </div>
          <div class="web-project">
            <div class="project-screen">
              <img src={bg} alt="Project background" />
            </div>
            <div class="project-tech"></div>
          </div>
          <div class="web-project">
            <div class="project-screen">
              <img src={bg} alt="Project background" />
            </div>
            <div class="project-tech"></div>
          </div>
        </div>
        <div id="software-area" style={this.state.softStyle}>
          <div class="software-project">
            <div class="project-screen">
              <img src={bg} alt="Project background" />
            </div>
            <div class="project-tech"></div>
          </div>
          <div class="software-project">
            <div class="project-screen">
              <img src={bg} alt="Project background" />
            </div>
            <div class="project-tech"></div>
          </div>
        </div>
        <div id="design-area" style={this.state.designStyle}></div>
      </div>
    );
  }
}
