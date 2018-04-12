var song
var ball, outerBorder, innerBorder

function loadSong() {
  soundFormats('mp3')
  song = loadSound('assets/Bing_Bong.mp3')
}

function playSong() {
  song.setVolume(0.5)
  song.play() // this music may drive yo
}

function preload() {
  ball = new Ball(10) // instantiates a new ball with a radius of 2 pixels
  outerBorder = new Border()
  innerBorder = new Border(.4, .4, .2, .2)
  loadSong()
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  playSong()
  background(51)
}

function windowResized() {
  // this makes sure the canvas resizes when the window does
  resizeCanvas(windowWidth, windowHeight)
  background(51)
}

function draw() {
  outerBorder.draw()
  ball.animate(outerBorder) // we are passing the outerBorder here so that the ball can check whether or not it has collided with any of its walls

  if (mouseIsPressed) {
    
    innerBorder.draw()
    ball.animate(innerBorder)
    
    /* TODO: implement code that draws an inner border (a rectangle within the
     * larger rectangle) when a user has the mouse button held down. This inner
     * border should also act as a boundary. Take note of the ball's
     * _checkCollision method. In its current capacity, it takes in a single
     * border to check. What minimal changes do we need to make so that it works
     * when multiple border instances are passed to it?
     *
     * We recommend starting with just making the innerBorder draw on mouse
     * press. Following that, work on making it act 'solid'
     */
  }
}
