import React from "react";
import Sketch from "react-p5";

const sketch = () => {
  let img;

  const preload = (p) => {
    img = p.loadImage("8733735.jpg");
  };

  const setup = (p) => {
    p.createCanvas(500, 400);
    p.background(img);
  };

  return (
    <div>
      <Sketch setup={setup} preload={preload} />
    </div>
  );
};

export default sketch;
