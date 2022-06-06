let myShader;

function preload() {
  myShader = loadShader("./shaders/vert.glsl", "./shaders/frag.glsl");
}

function setup() {
  createCanvas(1080, 1920, WEBGL);
  noStroke();
}

function draw() {
  shader(myShader);

  myShader.setUniform("uResolution", [width, height]);
  myShader.setUniform("uTime", frameCount * 0.015);

  rect(0, 0, width, height);
}
