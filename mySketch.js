var song
var ball, outerBorder, innerBorder

function loadSong() {
  soundFormats('mp3');
  song = loadSound('assets/Bing_Bong.mp3');
}

function playSong() {
  song.setVolume(0.1);
  song.play();
}

function preload() {
  ball = new Ball(2) // instantiates a new ball with a radius of 2 pixels
  outerBorder = new Border()
  loadSong()
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  playSong()
  background(51)
}

function windowResized() {
  // this makes sure the canvas resizes when the window does
  resizeCanvas(windowWidth, windowHeight);
  background(51)
}

function draw() {
  outerBorder.draw()
  ball.animate(outerBorder) // ball's animate method takes in outer border so that it can check for collision with it

  if (mouseIsPressed) {
    // TODO: implement code that draws an inner border (a rectangle within the
    // larger rectangle) when a user has the mouse button held down. This inner
    // border should also act as a boundary. Take note of the ball's
    // _checkCollision method. In its current capacity, it takes in a single
    // border to check. What minimal changes do we need to make so that it works
    // when multiple border instances are passed to it?
  }
}
