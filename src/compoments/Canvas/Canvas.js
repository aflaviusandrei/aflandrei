import React, { useEffect } from 'react';
import './Canvas.css';

export default function Canvas(props) {
  useEffect(() => {
    let canvas = document.getElementsByTagName('canvas')[0];
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let c = canvas.getContext('2d');

    let cw = window.innerWidth;
    let ch = window.innerHeight;

    c.fillStyle = '#000538';
    c.fillRect(0, 0, cw, ch);

    let circles = [];

    let mouseX = -1,
      mouseY = -1,
      pastX = -1,
      pastY = -1;

    class Circle {
      constructor(x, y, radius, rate) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.up = 1;
        this.distance = 0;
        this.rate = rate;
      }

      draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = 'white';
        c.fillStyle = 'white';
        c.fill();
        c.stroke();
      };

      update = function () {
        this.x = this.x + (this.rate / 100) * (mouseX - pastX);
        this.y = this.y + (this.rate / 100) * (mouseY - pastY);

        this.draw();
      };
    }

    for (let i = 0; i < 2000; i++) {
      let meet = 0,
        x,
        y,
        radius,
        rate = Math.ceil(Math.random() * 20);
      do {
        x = Math.floor(Math.random() * (cw - -400 + 1)) + -400;
        y = Math.floor(Math.random() * (ch - -400 + 1)) + -400;
        radius = Math.floor(Math.random() * (1 - 0.2 + 1)) + 0.2;
        for (let j = 0; j < circles.length; j++) {
          let dist = Math.sqrt(
            (x, circles[j].x) * (x, circles[j].x) +
              (y, circles[j].y) * (y, circles[j].y)
          );
          if (dist < circles[j].radius + radius) meet = 1;
        }
      } while (meet !== 0);
      circles.push(new Circle(x, y, radius, rate));
      circles[circles.length - 1].draw();
    }

    let animation = () => {
      c.clearRect(0, 0, cw, ch);
      c.fillStyle = '#000538';
      c.fillRect(0, 0, cw, ch);
      for (let i = 0; i < 2000; i++) {
        circles[i].update();
      }
    };

    document
      .getElementsByClassName('App')[0]
      .addEventListener('mousemove', (e) => {
        if (mouseX !== -1) {
          pastX = mouseX;
          pastY = mouseY;
        }
        mouseX = e.pageX;
        mouseY = e.pageY;
        window.requestAnimationFrame(animation);
      });
  });
  return <canvas></canvas>;
}
