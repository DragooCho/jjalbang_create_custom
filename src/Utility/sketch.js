import React from "react";
import Sketch from "react-p5";

const sketch = (p) => {
  let input;
  let img;

  function setup(p) {
    input = p.createFileInput();

    input.position(0, 0);
    p.createCanvas(400, 400);
  }

  function draw(p) {
    p.textSize(32);
    p.textAlign(p.CENTER, p.CENTER);
    p.background(220);
    if (img) {
      p.image(img, 0, 0, p.width, p.height);
    }
    p.text("word", p.mouseX, p.mouseY);
    if (p.mouseIsPressed) {
      p.noLoop();
    }
  }

  return (
    <div>
      <Sketch setup={setup} draw={draw} />
    </div>
  );
};

export default sketch;
