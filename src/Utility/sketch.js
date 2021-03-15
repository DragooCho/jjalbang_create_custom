import React from "react";

const sketch = () => {
  const canvas = document.getElementById("canvas");

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "green";
  ctx.fillRect(10, 10, 150, 100);

  return (
    <>
      <canvas id="canvas"></canvas>
    </>
  );
};

export default sketch;
