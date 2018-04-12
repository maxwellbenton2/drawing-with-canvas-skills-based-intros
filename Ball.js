const DIRECTIONS = [-1, 1]
const COLLIDECOLOR = '#E00'
const FREECOLOR = '#0EE'

/* You may notice that functions defined with '_' are present in the Ball class.
 * In JS, an underscore in a function name is considered just like any other character
 * It is typically used as a signifier to the programmer that the method isn't ever
 * called from 'outside' of the class. That is, it is only used by other methods
 * the class has defined.
 */

class Ball {
  constructor(r) {
    this.r = r // radius

    // x and y position is randomly chosen within the rectangle to start
    this.x = Math.random() * ((windowWidth*.8 - r) - (windowWidth*.1 + r)) + (windowWidth*.1 + r)
    this.y = Math.random() * ((windowHeight*.8 - r) - (windowHeight*.1 + r)) + (windowHeight*.1 + r)

    // direction for x and y is randomly chosen
    this.directionX = DIRECTIONS[Math.round(Math.random())]
    this.directionY = DIRECTIONS[Math.round(Math.random())]

    this.colorValue = FREECOLOR
  	this.color = color(FREECOLOR)

    this.flashing = false
    this.speed = 6
  }

  _flashBall(newColor) {
    // this is used when a ball 'collides' with a boundary
    if (this.flashing) return
    const oldColorValue = this.colorValue
    this.color = color(newColor)
    this.flashing = true

    setTimeout(() => {
      this.color = color(oldColorValue)
      this.flashing = false
    }, 200)
  }

  _handleCollision(wall) {
    // this method alters the direction of the ball depending on whether a
    // horizontal or vertical surface is hit
    const axis = (wall[0] === wall[2]) ? 'x' : 'y'

    switch(axis) {
      case 'x':
        this.directionX *= -1
        break
      case 'y':
        this.directionY *= -1
        break
      default:
        return
    }
    this._flashBall(COLLIDECOLOR)
  }

  _collided(wall) {
    return collideLineCircle(wall[0], wall[1], wall[2], wall[3], this.x, this.y, this.r*2)
  }

  _checkCollision(borders) {
    // runs this._collided on each of the 4 walls that a border has
    debugger
    borders.forEach(() => {
      const walls = borders.getWalls()
    walls.forEach(wall => {
      if (this._collided(wall))
        this._handleCollision(wall)
    })
    })
  }

  draw() {
    strokeWeight(0)
    fill(this.color)
    ellipse(this.x, this.y, this.r*2);
  }

  step() {
    // moves the ball
    this.x += this.directionX * this.speed
    this.y += this.directionY * this.speed
  }

  animate(border) {
    this.draw() // we draw the ball's current position
    this._checkCollision(border) // checks all of a border's walls to see if the ball has collided with them
    this.step() // we move the ball's location
  }

}
