import React from "react";
import Sketch from "react-p5";

const sketch = () => {
  let canvas;
  let img;

  function setup(p, canvasParentRef) {
    canvas = p.createCanvas(300, 200).parent(canvasParentRef);
    canvas.drop(draw);
    canvas.mousePressed(draw);
    p.background(180, 0, 180);
  }

  const draw = (p) => {
    gotFile();
    inputTextPaint();

    function gotFile(p, file) {
      img = p.loadImage(file.data, imageView);
    }

    function imageView(p) {
      canvas.resize(img.width, img.height);
      p.image(img, 0, 0, p.width, p.height);
    }

    function inputTextPaint(p) {
      p.textSize(50); // 사이즈 조절
      p.textAlign(p.CENTER, p.CENTER);
      p.textStyle(p.BOLD); // 스타일 지정, NORMAL, ITALIC, BOLD, BOLDITALIC 를 설정 가능
      p.text("Font Size 16", p.mouseX, p.mouseY); // 폰트의 내용, 해당 마우스 위치에 그려준다.
    }
  };

  return (
    <div>
      <Sketch setup={setup} />
    </div>
  );
};

export default sketch;
