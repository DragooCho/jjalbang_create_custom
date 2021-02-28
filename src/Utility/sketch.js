function sketch(p) {
  //   let rotation = 0;

  p.setup = () => {
    p.createCanvas(500, 500);
  };

  p.draw = () => {
    if (p.mouseIsPressed) {
      p.fill(0);
    } else {
      p.fill(255);
    }
    p.ellipse(p.mouseX, p.mouseY, 80, 80);
  };
}

export default sketch;
