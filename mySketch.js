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
  if (mouseIsPressed) {
    innerBorder.draw()
    ball.animate([outerBorder, innerBorder])
  } else {
    ball.animate([outerBorder])
  }
}
