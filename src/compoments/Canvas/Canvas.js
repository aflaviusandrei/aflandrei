import React, { useEffect } from 'react';
import './Canvas.scss';

export default function Canvas(props) {
  useEffect(() => {
    let canvas = document.getElementsByTagName('canvas')[0];
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let c = canvas.getContext('2d'),
      cw = window.innerWidth,
      ch = window.innerHeight,
      stars = 250;

    if (window.innerWidth < 1000) {
      stars = 100;
      ch += 200;
    }

    c.fillStyle = '#000538';
    c.fillRect(0, 0, cw, ch);

    let circles = [];

    class Circle {
      constructor(x, y, destX, destY, interval, radius, index) {
        this.x = x;
        this.y = y;
        this.destX = destX;
        this.destY = destY;
        this.interval = interval;
        this.radius = radius;
        this.index = index;

        setInterval(this.createInt.bind(this), interval);
      }

      draw() {
        c.beginPath();
        c.lineWidth = 1;
        c.strokeStyle = 'white';
        c.fillStyle = 'white';
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fill();
        c.stroke();
        this.check();
      }

      createInt() {
        this.destX =
          Math.random() < 0.5
            ? Math.random() < 0.5
              ? 0
              : 1
            : Math.random() < 0.5
            ? 1
            : 0;

        this.destY =
          Math.random() < 0.5
            ? Math.random() < 0.5
              ? 0
              : 1
            : Math.random() < 0.5
            ? 1
            : 0;
      }

      check() {
        for (let j = 0; j < circles.length; j++) {
          if (j != this.index) {
            let dist = Math.sqrt(
              (this.x - circles[j].x) * (this.x - circles[j].x) +
                (this.y - circles[j].y) * (this.y - circles[j].y)
            );
            if (dist < 80) {
              c.beginPath();
              c.lineWidth = 0.2;
              c.moveTo(this.x, this.y);
              c.lineTo(circles[j].x, circles[j].y);
              c.stroke();
            }
          }
        }
      }

      update() {
        if (this.x < 5) this.destX = 1;
        else if (this.x > cw) this.destX = 0;

        if (this.y < 5) this.destY = 1;
        else if (this.y > ch) this.destY = 0;

        if (this.destX) this.x += 0.5;
        else this.x -= 0.5;

        if (this.destY) this.y += 0.5;
        else this.y -= 0.5;

        this.draw();
      }
    }

    let animation = () => {
      c.clearRect(0, 0, cw, ch);
      c.fillStyle = '#000538';
      c.fillRect(0, 0, cw, ch);
      for (let i = 0; i < stars; i++) {
        circles[i].update();
      }
    };

    for (let i = 0; i < stars; i++) {
      let meet = 0,
        x,
        y,
        radius,
        rate = Math.ceil(Math.random() * 20);
      do {
        x = Math.floor(Math.random() * (cw - 0));
        y = Math.floor(Math.random() * (ch - 0));
        radius = 0.5;
        for (let j = 0; j < circles.length; j++) {
          let dist = Math.sqrt(
            (x, circles[j].x) * (x, circles[j].x) +
              (y, circles[j].y) * (y, circles[j].y)
          );
          if (dist < circles[j].radius + radius) meet = 1;
        }
      } while (meet !== 0);
      let interval = Math.random() * (10000 - 6000) + 6000;
      let destX = Math.random() < 0.5 ? 0 : 1;
      let destY = Math.random() < 0.5 ? 0 : 1;
      circles.push(new Circle(x, y, destX, destY, interval, radius, i));
      circles[circles.length - 1].draw();
    }

    setInterval(() => {
      window.requestAnimationFrame(animation);
    }, 50);
  });
  return <canvas></canvas>;
}
