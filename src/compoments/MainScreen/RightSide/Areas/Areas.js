import React from 'react';
import './Areas.scss';
import $ from 'jquery';
import bc from '../../../../assets/bc.gif';
import condo from '../../../../assets/condo.gif';
import edociif from '../../../../assets/edociif.gif';
import fiicode from '../../../../assets/fiicode.gif';
import gitnephew from '../../../../assets/gitnephew.png';
import gobbler from '../../../../assets/gobbler.gif';
import Screenshot_1 from '../../../../assets/Screenshot_1.jpg';
import Screenshot_2 from '../../../../assets/Screenshot_2.jpg';
import typer from '../../../../assets/typer.gif';
import bgi from '../../../../assets/geom.gif';

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
    if (
      document.getElementById('web-button').contains(e.target) ||
      document.getElementById('web-button') === e.target
    ) {
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
    } else if (
      document.getElementById('soft-button').contains(e.target) ||
      document.getElementById('soft-button') === e.target
    ) {
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
    }
    this.props.switchToArea();
  };

  refresh = () => {
    this.setState({
      areasHeight: window.innerWidth < 1000 ? '150px' : '30%',
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
    });
    this.props.refresh();
  };

  magify = (container, inner, adjust) => {
    // Mouse
    var mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function (event) {
        var e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin: function (e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
      },
      show: function () {
        return '(' + this.x + ', ' + this.y + ')';
      },
    };

    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(container);

    //----------------------------------------------------

    var counter = 0;
    var refreshRate = 3;
    var isTimeToUpdate = function () {
      return counter++ % refreshRate === 0;
    };

    //----------------------------------------------------

    var onMouseEnterHandler = function (event) {
      container.style.zIndex = '3';
      update(event);
    };

    var onMouseLeaveHandler = function () {
      inner.style.transform = '';
      container.style.zIndex = '';
    };

    var onMouseMoveHandler = function (event) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };

    //----------------------------------------------------

    var update = function (e) {
      // Set up multipliers
      var yMult = 0.03;
      var xMult = 0.063;

      var d = document,
        bd = d.getElementsByTagName('body')[0],
        win = window;

      var bdst = $(window).scrollTop();
      var bdsl = bd.scrollLeft;
      var pageX = e.pageX;
      var pageY = e.pageY;
      var offsets = inner.getBoundingClientRect();
      var w = inner.clientWidth || inner.offsetWidth || inner.scrollWidth;
      var h = inner.clientHeight || inner.offsetHeight || inner.scrollHeight;
      var wMultiple = 320 / w;
      var offsetX = 0.52 - (pageX - offsets.left - bdsl) / w;
      var offsetY = 0.52 - (pageY - offsets.top - bdst) / h;
      var dy = pageY - offsets.top - bdst - h / 2;
      var dx = pageX - offsets.left - bdsl - w / 2;
      var yRotate = (offsetX - dx) * (yMult * wMultiple);
      var xRotate = (dy - offsetY) * (xMult * wMultiple);

      var imgCSS;
      let dirX = yRotate;
      let dirY = (xRotate / 2) * -1;

      imgCSS =
        'perspective(' +
        w * 3 +
        'px) rotateX(' +
        -xRotate * 1 +
        'deg) rotateY(' +
        -yRotate * 1 +
        'deg) scale(1.15)';

      console.log(imgCSS);

      inner.style.transform = imgCSS;
    };

    var updateTransformStyle = function (x, y) {
      var style = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
      inner.style.transform = style;
      inner.style.webkitTransform = style;
      inner.style.mozTranform = style;
      inner.style.msTransform = style;
      inner.style.oTransform = style;
    };

    //--------------------------------------------------------

    container.onmousemove = onMouseMoveHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmouseenter = onMouseEnterHandler;
  };

  componentDidMount() {
    if (window.innerWidth > 1000) {
      let els = document.querySelectorAll('.web-project, .software-project');

      Array.from(els).forEach((el) => {
        this.magify(el, el.children[0].children[0], 0);
      });
    }
    if (window.innerWidth < 1000)
      this.setState({
        areasHeight: '150px',
      });
  }

  render() {
    return (
      <div id="areas" style={{ height: this.state.areasHeight }}>
        <div id="areas-grid" style={this.state.gridStyle}>
          <div
            className="grid-member"
            id="web-button"
            onClick={this.enlargeArea}
          >
            <span>
              <i className="fas fa-code"></i>
              <h3>WEB</h3>
            </span>
          </div>
          <div
            className="grid-member"
            id="soft-button"
            onClick={this.enlargeArea}
          >
            <span>
              <i className="far fa-file-code"></i>
              <h3>SOFTWARE</h3>
            </span>
          </div>
        </div>
        <div id="web-area" style={this.state.webStyle}>
          <span className="back-container" onClick={this.refresh}>
            <i className="fas fa-arrow-left web"></i>
          </span>
          <div className="web-project">
            <div className="project-screen">
              <img src={edociif} alt="Project background" />
            </div>
            <div className="project-tech">
              <h3>edociiF</h3>
              <p style={{ marginBottom: '5px' }}>
                Lightweight content display JavaScript framework that won 2nd
                place in the 2019 FIICode first phase competition.
              </p>
              <p style={{ marginTop: 0, marginBottom: '5px' }}>Co-authors:</p>
              <p style={{ marginTop: '5px' }}>
                <a href="https://github.com/radaalinmihai">Rada Alin Mihai</a> &{' '}
                <a href="https://github.com/istancescu">Ionuț Stăncescu</a>
              </p>
              <div className="technologies">
                <i className="devicon-javascript-plain"></i>
                <i className="devicon-html5-plain-wordmark"></i>
                <i className="devicon-sass-original"></i>
                <i className="devicon-nodejs-plain"></i>
                <i className="devicon-mongodb-plain-wordmark"></i>
              </div>
            </div>
          </div>
          <div className="web-project">
            <div className="project-screen">
              <img src={condo} alt="Project background" />
            </div>
            <div className="project-tech">
              <h3>Condo</h3>
              <p>Quick project for posting and viewing real estate ads.</p>
              <div className="technologies">
                <i className="devicon-react-original"></i>
                <i className="devicon-javascript-plain"></i>
                <i className="devicon-nodejs-plain"></i>
                <i className="devicon-mongodb-plain-wordmark"></i>
              </div>
            </div>
          </div>
          <div className="web-project">
            <div className="project-screen">
              <img src={gitnephew} alt="Project background" />
            </div>
            <div className="project-tech">
              <h3>GitNephew</h3>
              <p>
                GitHub stats tracking tool built in under 8 hours by me and my
                team during the 2019 FIICode Hackathon. Won 3rd place.
              </p>
              <div className="technologies">
                <i className="devicon-nodejs-plain"></i>
                <i className="devicon-javascript-plain"></i>
                <i className="devicon-express-original-wordmark"></i>
                <i className="devicon-mongodb-plain-wordmark"></i>
              </div>
            </div>
          </div>
          <div className="web-project">
            <div className="project-screen">
              <img src={fiicode} alt="Project background" />
            </div>
            <div className="project-tech">
              <h3>FIICode 2020 Website</h3>
              <p>
                Helped create the FIICode 2020 promotional website as part of
                the development team within my students association.
              </p>
              <div className="technologies">
                <i className="devicon-react-original"></i>
                <span className="nextjs">
                  <svg
                    viewBox="0 0 207 124"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                  >
                    <title>next-black</title>
                    <desc>Created with Sketch.</desc>
                    <defs />
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Black-Next.js"
                        transform="translate(-247.000000, -138.000000)"
                        fill="#000000"
                        fillRule="nonzero"
                      >
                        <g
                          id="next-black"
                          transform="translate(247.000000, 138.000000)"
                        >
                          <g id="EXT-+-Type-something">
                            <path
                              d="M48.9421964,32.6320058 L87.9011585,32.6320058 L87.9011585,35.7136421 L52.5134345,35.7136421 L52.5134345,58.9070103 L85.7908813,58.9070103 L85.7908813,61.9886466 L52.5134345,61.9886466 L52.5134345,87.4526941 L88.306981,87.4526941 L88.306981,90.5343303 L48.9421964,90.5343303 L48.9421964,32.6320058 Z M91.3912326,32.6320058 L95.5306221,32.6320058 L113.8738,58.0960534 L132.622801,32.6320058 L158.124498,0.286809811 L116.22757,60.7722112 L137.817329,90.5343303 L133.51561,90.5343303 L113.8738,63.4483691 L94.1508254,90.5343303 L89.9302715,90.5343303 L111.682358,60.7722112 L91.3912326,32.6320058 Z M139.359455,35.713642 L139.359455,32.6320058 L183.756439,32.6320058 L183.756439,35.7136421 L163.302983,35.7136421 L163.302983,90.5343303 L159.731745,90.5343303 L159.731745,35.7136421 L139.359455,35.713642 Z"
                              id="EXT"
                            />
                            <polygon
                              id="Type-something"
                              points="0.202923647 32.6320058 4.66697141 32.6320058 66.2235778 124.303087 40.785176 90.5343303 3.93649086 37.0111732 3.77416185 90.5343303 0.202923647 90.5343303"
                            />
                          </g>
                          <path
                            d="M183.396622,86.5227221 C184.134938,86.5227221 184.673474,85.9601075 184.673474,85.233037 C184.673474,84.5059658 184.134938,83.9433513 183.396622,83.9433513 C182.666993,83.9433513 182.11977,84.5059658 182.11977,85.233037 C182.11977,85.9601075 182.666993,86.5227221 183.396622,86.5227221 Z M186.905793,83.1297235 C186.905793,85.2763149 188.460599,86.678523 190.727662,86.678523 C193.142388,86.678523 194.601647,85.233037 194.601647,82.7229099 L194.601647,73.8855335 L192.655968,73.8855335 L192.655968,82.7142542 C192.655968,84.1078073 191.952397,84.8521899 190.710289,84.8521899 C189.598473,84.8521899 188.842785,84.1597409 188.816727,83.1297235 L186.905793,83.1297235 Z M197.146664,83.0172011 C197.285642,85.2503478 199.153145,86.678523 201.932686,86.678523 C204.903321,86.678523 206.762139,85.1811034 206.762139,82.792155 C206.762139,80.9138876 205.702439,79.8752151 203.131364,79.2779777 L201.750279,78.9404092 C200.117298,78.5595622 199.457158,78.0488813 199.457158,77.1573541 C199.457158,76.0321243 200.482113,75.296398 202.019547,75.296398 C203.478806,75.296398 204.48639,76.0148135 204.668797,77.1660091 L206.562359,77.1660091 C206.44944,75.0626962 204.590622,73.5825873 202.045605,73.5825873 C199.309495,73.5825873 197.48542,75.0626962 197.48542,77.2871878 C197.48542,79.1221767 198.519063,80.2127835 200.786126,80.7407758 L202.401734,81.1302779 C204.060773,81.5197807 204.790402,82.091051 204.790402,83.0431676 C204.790402,84.1510859 203.643842,84.9560573 202.08035,84.9560573 C200.403939,84.9560573 199.240006,84.2030196 199.074971,83.0172011 L197.146664,83.0172011 Z"
                            id=".JS"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
                <i className="devicon-css3-plain-wordmark"></i>
              </div>
            </div>
          </div>
          <div className="web-project">
            <div className="project-screen">
              <img src={bc} alt="Project background" />
            </div>
            <div className="project-tech">
              <h3>Balul de Caritate ASII 2019</h3>
              <p>
                Helped build the promotional website for the 2019 ASII Charity
                Ball.
              </p>
              <div className="technologies">
                <i className="devicon-html5-plain-wordmark"></i>
                <i className="devicon-css3-plain-wordmark"></i>
                <i className="devicon-javascript-plain"></i>
              </div>
            </div>
          </div>
          <div className="web-project">
            <div className="project-screen">
              <img src={typer} alt="Project background" />
            </div>
            <div className="project-tech">
              <h3>Typer</h3>
              <p>
                Fun type speed measurement tool built with React.js as a
                learning exercise :).
              </p>
              <div className="technologies">
                <i className="devicon-react-original"></i>
                <i className="devicon-css3-plain-wordmark"></i>
                <i className="devicon-javascript-plain"></i>
              </div>
            </div>
          </div>
        </div>
        <div id="software-area" style={this.state.softStyle}>
          <span className="back-container">
            <i className="fas fa-arrow-left soft" onClick={this.refresh}></i>
          </span>
          <div className="software-project">
            <div className="project-screen">
              <img src={gobbler} alt="Project background" />
            </div>
            <div className="project-tech">
              <h3>Gobblet Gobblers</h3>
              <p>
                C++ recreation of the Gobblet Gobblers children game built for
                my university along with my colleague, Tofănel Raisa.
              </p>
              <div className="technologies">
                <i className="devicon-cplusplus-plain-wordmark"></i>
                <span id="winbgim">
                  <img src={bgi} />
                  <p>WinBGIm</p>
                </span>
              </div>
            </div>
          </div>
          <div className="software-project">
            <div className="project-screen">
              <img src={Screenshot_1} alt="Project background" />
            </div>
            <div className="project-tech">
              <h3>Facebook Ads automation</h3>
              <p>
                Python & Selenium tool built to automate Facebook Ads creation
                process.
              </p>
              <div className="technologies">
                <i className="devicon-python-plain"></i>
                <span className="selenium">
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 139.38 34"
                    width="100%"
                    height="100%"
                    space="preserve"
                  >
                    <defs></defs>
                    <title>Selenium</title>
                    <path
                      className="cls-1"
                      d="M46.2,26.37a18.85,18.85,0,0,1-2.57-.2,25,25,0,0,1-2.74-.53l0-1.39a25.31,25.31,0,0,0,2.71.53,18,18,0,0,0,2.5.2,5.51,5.51,0,0,0,3.29-.84,2.79,2.79,0,0,0,1.14-2.39,2.85,2.85,0,0,0-1.24-2.49A6,6,0,0,0,48,18.55q-.78-.29-1.67-.55A15.93,15.93,0,0,1,44,17.13a5.92,5.92,0,0,1-1.58-1.05,3.6,3.6,0,0,1-.9-1.34A5,5,0,0,1,41.23,13a4.46,4.46,0,0,1,.41-1.93,4.31,4.31,0,0,1,1.17-1.5,5.26,5.26,0,0,1,1.82-1A8,8,0,0,1,47,8.28a20.51,20.51,0,0,1,4.41.57l0,1.42a20,20,0,0,0-2.23-.44,15.2,15.2,0,0,0-2-.15,4.86,4.86,0,0,0-3.08.9A2.9,2.9,0,0,0,42.88,13a3.25,3.25,0,0,0,.21,1.21,2.61,2.61,0,0,0,.7,1,4.83,4.83,0,0,0,1.27.79,14.31,14.31,0,0,0,2,.68q1.11.33,2.06.71a6.21,6.21,0,0,1,1.65.94,4.09,4.09,0,0,1,1.1,1.38,4.54,4.54,0,0,1,.4,2,4.15,4.15,0,0,1-1.56,3.48A7.16,7.16,0,0,1,46.2,26.37Z"
                    ></path>
                    <path
                      className="cls-1"
                      d="M60.62,26.32a5.46,5.46,0,0,1-4.28-1.62A6.9,6.9,0,0,1,54.88,20a7.8,7.8,0,0,1,1.43-5,5,5,0,0,1,4.14-1.75,4.24,4.24,0,0,1,3.47,1.43A6.48,6.48,0,0,1,65.1,18.8q0,.54,0,.92a3.22,3.22,0,0,1-.09.64H56.44a5.39,5.39,0,0,0,1.17,3.5A4.18,4.18,0,0,0,60.8,25a10.52,10.52,0,0,0,1.82-.17,11.77,11.77,0,0,0,1.93-.52l.12,1.27a10.68,10.68,0,0,1-2,.55A11.47,11.47,0,0,1,60.62,26.32ZM60.4,14.43q-3.68,0-3.94,4.74h7.15a6.49,6.49,0,0,0-.78-3.63A2.76,2.76,0,0,0,60.4,14.43Z"
                    ></path>
                    <path
                      className="cls-1"
                      d="M68.64,7h1.58V26.11H68.64Z"
                    ></path>
                    <path
                      className="cls-1"
                      d="M79.56,26.32a5.46,5.46,0,0,1-4.28-1.62A6.9,6.9,0,0,1,73.83,20a7.8,7.8,0,0,1,1.43-5,5,5,0,0,1,4.14-1.75,4.24,4.24,0,0,1,3.47,1.43A6.48,6.48,0,0,1,84,18.8q0,.54,0,.92a3.22,3.22,0,0,1-.09.64H75.38a5.4,5.4,0,0,0,1.17,3.5A4.18,4.18,0,0,0,79.75,25a10.52,10.52,0,0,0,1.82-.17,11.8,11.8,0,0,0,1.93-.52l.12,1.27a10.68,10.68,0,0,1-2,.55A11.47,11.47,0,0,1,79.56,26.32Zm-.21-11.89q-3.68,0-3.94,4.74h7.15a6.49,6.49,0,0,0-.78-3.63A2.76,2.76,0,0,0,79.35,14.43Z"
                    ></path>
                    <path
                      className="cls-1"
                      d="M87.51,13.37h1.32l.12,1.49h.12q.94-.45,1.72-.78t1.43-.54a8.42,8.42,0,0,1,1.2-.31,6.54,6.54,0,0,1,1.1-.09A3.3,3.3,0,0,1,97,14a3.63,3.63,0,0,1,.83,2.63v9.51H96.24v-9a3,3,0,0,0-.55-2,2.18,2.18,0,0,0-1.69-.6,7.25,7.25,0,0,0-2.24.41,20.1,20.1,0,0,0-2.67,1.12v10H87.51Z"
                    ></path>
                    <path
                      className="cls-1"
                      d="M102.75,10.52a.93.93,0,0,1-1.06-1,1.06,1.06,0,0,1,2.12,0A.93.93,0,0,1,102.75,10.52Zm-.8,2.85h1.58V26.11h-1.58Z"
                    ></path>
                    <path
                      className="cls-1"
                      d="M110.81,26.34q-3.14,0-3.14-3.47V13.37h1.58v9a3.16,3.16,0,0,0,.48,2,1.92,1.92,0,0,0,1.59.6,6.83,6.83,0,0,0,2.48-.48q1.25-.48,2.59-1.14V13.37H118V26.11h-1.32l-.12-1.58h-.09l-1.73.81q-.74.34-1.38.57a7.9,7.9,0,0,1-1.23.33A7.34,7.34,0,0,1,110.81,26.34Z"
                    ></path>
                    <path
                      className="cls-1"
                      d="M122.18,13.37h1.3l.14,1.49h.09a19.53,19.53,0,0,1,2.58-1.31,5.51,5.51,0,0,1,2-.41,2.83,2.83,0,0,1,3,1.77h.12q.8-.5,1.45-.83a12.61,12.61,0,0,1,1.2-.54,6.17,6.17,0,0,1,1-.31,5.18,5.18,0,0,1,1-.09,3.3,3.3,0,0,1,2.45.84,3.63,3.63,0,0,1,.83,2.63v9.51h-1.56v-9a2.9,2.9,0,0,0-.55-2,2.21,2.21,0,0,0-1.69-.59,5.14,5.14,0,0,0-1.78.38A14.45,14.45,0,0,0,131.6,16v10.1H130v-9a2.9,2.9,0,0,0-.55-2,2.21,2.21,0,0,0-1.69-.59,5.24,5.24,0,0,0-1.86.4A14,14,0,0,0,123.76,16V26.11h-1.58Z"
                    ></path>
                    <path
                      className="cls-1"
                      d="M21.45,21.51a2.49,2.49,0,0,0-2.55,2.21.08.08,0,0,0,.08.1h4.95a.08.08,0,0,0,.08-.09A2.41,2.41,0,0,0,21.45,21.51Z"
                    ></path>
                    <path
                      className="cls-1"
                      d="M32.06,4.91,21.56,16.7a.32.32,0,0,1-.47,0l-5.36-5.53a.32.32,0,0,1,0-.4l1.77-2.27a.32.32,0,0,1,.52,0l3,3.32a.32.32,0,0,0,.49,0L29.87.36A.23.23,0,0,0,29.69,0H.25A.25.25,0,0,0,0,.25v33.5A.25.25,0,0,0,.25,34h32a.25.25,0,0,0,.25-.25V5.06A.23.23,0,0,0,32.06,4.91Zm-23,25.36a8.08,8.08,0,0,1-5.74-2,.31.31,0,0,1,0-.41l1.25-1.75A.31.31,0,0,1,5,26a6.15,6.15,0,0,0,4.2,1.64c1.64,0,2.44-.76,2.44-1.56,0-2.48-8.08-.78-8.08-6.06,0-2.33,2-4.27,5.32-4.27a7.88,7.88,0,0,1,5.25,1.76.31.31,0,0,1,0,.43L12.9,19.65a.31.31,0,0,1-.45.05,6.08,6.08,0,0,0-3.84-1.32c-1.28,0-2,.57-2,1.41,0,2.23,8.06.74,8.06,6C14.67,28.33,12.84,30.27,9.05,30.27ZM26.68,25.4a.27.27,0,0,1-.28.28H19a.09.09,0,0,0-.08.1,2.81,2.81,0,0,0,3,2.32,4.62,4.62,0,0,0,2.56-.84.27.27,0,0,1,.4.06l.9,1.31a.28.28,0,0,1-.06.37,6.67,6.67,0,0,1-4.1,1.28,5.28,5.28,0,0,1-5.57-5.48,5.31,5.31,0,0,1,5.4-5.46c3.11,0,5.22,2.33,5.22,5.74Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="software-project">
            <div className="project-screen">
              <img src={Screenshot_2} alt="Project background" />
            </div>
            <div className="project-tech">
              <h3>Facebook Catalogue automation</h3>
              <p>
                Python & Selenium tool built to automate the mass editing of
                products in the Facebook Ads Catalogue.
              </p>
              <div className="technologies">
                <i className="devicon-python-plain"></i>
                <span className="selenium">
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 139.38 34"
                    width="100%"
                    height="100%"
                    space="preserve"
                  >
                    <defs></defs>
                    <title>Selenium</title>
                    <path
                      className="cls-1"
                      d="M46.2,26.37a18.85,18.85,0,0,1-2.57-.2,25,25,0,0,1-2.74-.53l0-1.39a25.31,25.31,0,0,0,2.71.53,18,18,0,0,0,2.5.2,5.51,5.51,0,0,0,3.29-.84,2.79,2.79,0,0,0,1.14-2.39,2.85,2.85,0,0,0-1.24-2.49A6,6,0,0,0,48,18.55q-.78-.29-1.67-.55A15.93,15.93,0,0,1,44,17.13a5.92,5.92,0,0,1-1.58-1.05,3.6,3.6,0,0,1-.9-1.34A5,5,0,0,1,41.23,13a4.46,4.46,0,0,1,.41-1.93,4.31,4.31,0,0,1,1.17-1.5,5.26,5.26,0,0,1,1.82-1A8,8,0,0,1,47,8.28a20.51,20.51,0,0,1,4.41.57l0,1.42a20,20,0,0,0-2.23-.44,15.2,15.2,0,0,0-2-.15,4.86,4.86,0,0,0-3.08.9A2.9,2.9,0,0,0,42.88,13a3.25,3.25,0,0,0,.21,1.21,2.61,2.61,0,0,0,.7,1,4.83,4.83,0,0,0,1.27.79,14.31,14.31,0,0,0,2,.68q1.11.33,2.06.71a6.21,6.21,0,0,1,1.65.94,4.09,4.09,0,0,1,1.1,1.38,4.54,4.54,0,0,1,.4,2,4.15,4.15,0,0,1-1.56,3.48A7.16,7.16,0,0,1,46.2,26.37Z"
                    ></path>
                    <path
                      className="cls-1"
                      d="M60.62,26.32a5.46,5.46,0,0,1-4.28-1.62A6.9,6.9,0,0,1,54.88,20a7.8,7.8,0,0,1,1.43-5,5,5,0,0,1,4.14-1.75,4.24,4.24,0,0,1,3.47,1.43A6.48,6.48,0,0,1,65.1,18.8q0,.54,0,.92a3.22,3.22,0,0,1-.09.64H56.44a5.39,5.39,0,0,0,1.17,3.5A4.18,4.18,0,0,0,60.8,25a10.52,10.52,0,0,0,1.82-.17,11.77,11.77,0,0,0,1.93-.52l.12,1.27a10.68,10.68,0,0,1-2,.55A11.47,11.47,0,0,1,60.62,26.32ZM60.4,14.43q-3.68,0-3.94,4.74h7.15a6.49,6.49,0,0,0-.78-3.63A2.76,2.76,0,0,0,60.4,14.43Z"
                    ></path>
                    <path
                      className="cls-1"
                      d="M68.64,7h1.58V26.11H68.64Z"
                    ></path>
                    <path
                      className="cls-1"
                      d="M79.56,26.32a5.46,5.46,0,0,1-4.28-1.62A6.9,6.9,0,0,1,73.83,20a7.8,7.8,0,0,1,1.43-5,5,5,0,0,1,4.14-1.75,4.24,4.24,0,0,1,3.47,1.43A6.48,6.48,0,0,1,84,18.8q0,.54,0,.92a3.22,3.22,0,0,1-.09.64H75.38a5.4,5.4,0,0,0,1.17,3.5A4.18,4.18,0,0,0,79.75,25a10.52,10.52,0,0,0,1.82-.17,11.8,11.8,0,0,0,1.93-.52l.12,1.27a10.68,10.68,0,0,1-2,.55A11.47,11.47,0,0,1,79.56,26.32Zm-.21-11.89q-3.68,0-3.94,4.74h7.15a6.49,6.49,0,0,0-.78-3.63A2.76,2.76,0,0,0,79.35,14.43Z"
                    ></path>
                    <path
                      className="cls-1"
                      d="M87.51,13.37h1.32l.12,1.49h.12q.94-.45,1.72-.78t1.43-.54a8.42,8.42,0,0,1,1.2-.31,6.54,6.54,0,0,1,1.1-.09A3.3,3.3,0,0,1,97,14a3.63,3.63,0,0,1,.83,2.63v9.51H96.24v-9a3,3,0,0,0-.55-2,2.18,2.18,0,0,0-1.69-.6,7.25,7.25,0,0,0-2.24.41,20.1,20.1,0,0,0-2.67,1.12v10H87.51Z"
                    ></path>
                    <path
                      className="cls-1"
                      d="M102.75,10.52a.93.93,0,0,1-1.06-1,1.06,1.06,0,0,1,2.12,0A.93.93,0,0,1,102.75,10.52Zm-.8,2.85h1.58V26.11h-1.58Z"
                    ></path>
                    <path
                      className="cls-1"
                      d="M110.81,26.34q-3.14,0-3.14-3.47V13.37h1.58v9a3.16,3.16,0,0,0,.48,2,1.92,1.92,0,0,0,1.59.6,6.83,6.83,0,0,0,2.48-.48q1.25-.48,2.59-1.14V13.37H118V26.11h-1.32l-.12-1.58h-.09l-1.73.81q-.74.34-1.38.57a7.9,7.9,0,0,1-1.23.33A7.34,7.34,0,0,1,110.81,26.34Z"
                    ></path>
                    <path
                      className="cls-1"
                      d="M122.18,13.37h1.3l.14,1.49h.09a19.53,19.53,0,0,1,2.58-1.31,5.51,5.51,0,0,1,2-.41,2.83,2.83,0,0,1,3,1.77h.12q.8-.5,1.45-.83a12.61,12.61,0,0,1,1.2-.54,6.17,6.17,0,0,1,1-.31,5.18,5.18,0,0,1,1-.09,3.3,3.3,0,0,1,2.45.84,3.63,3.63,0,0,1,.83,2.63v9.51h-1.56v-9a2.9,2.9,0,0,0-.55-2,2.21,2.21,0,0,0-1.69-.59,5.14,5.14,0,0,0-1.78.38A14.45,14.45,0,0,0,131.6,16v10.1H130v-9a2.9,2.9,0,0,0-.55-2,2.21,2.21,0,0,0-1.69-.59,5.24,5.24,0,0,0-1.86.4A14,14,0,0,0,123.76,16V26.11h-1.58Z"
                    ></path>
                    <path
                      className="cls-1"
                      d="M21.45,21.51a2.49,2.49,0,0,0-2.55,2.21.08.08,0,0,0,.08.1h4.95a.08.08,0,0,0,.08-.09A2.41,2.41,0,0,0,21.45,21.51Z"
                    ></path>
                    <path
                      className="cls-1"
                      d="M32.06,4.91,21.56,16.7a.32.32,0,0,1-.47,0l-5.36-5.53a.32.32,0,0,1,0-.4l1.77-2.27a.32.32,0,0,1,.52,0l3,3.32a.32.32,0,0,0,.49,0L29.87.36A.23.23,0,0,0,29.69,0H.25A.25.25,0,0,0,0,.25v33.5A.25.25,0,0,0,.25,34h32a.25.25,0,0,0,.25-.25V5.06A.23.23,0,0,0,32.06,4.91Zm-23,25.36a8.08,8.08,0,0,1-5.74-2,.31.31,0,0,1,0-.41l1.25-1.75A.31.31,0,0,1,5,26a6.15,6.15,0,0,0,4.2,1.64c1.64,0,2.44-.76,2.44-1.56,0-2.48-8.08-.78-8.08-6.06,0-2.33,2-4.27,5.32-4.27a7.88,7.88,0,0,1,5.25,1.76.31.31,0,0,1,0,.43L12.9,19.65a.31.31,0,0,1-.45.05,6.08,6.08,0,0,0-3.84-1.32c-1.28,0-2,.57-2,1.41,0,2.23,8.06.74,8.06,6C14.67,28.33,12.84,30.27,9.05,30.27ZM26.68,25.4a.27.27,0,0,1-.28.28H19a.09.09,0,0,0-.08.1,2.81,2.81,0,0,0,3,2.32,4.62,4.62,0,0,0,2.56-.84.27.27,0,0,1,.4.06l.9,1.31a.28.28,0,0,1-.06.37,6.67,6.67,0,0,1-4.1,1.28,5.28,5.28,0,0,1-5.57-5.48,5.31,5.31,0,0,1,5.4-5.46c3.11,0,5.22,2.33,5.22,5.74Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
