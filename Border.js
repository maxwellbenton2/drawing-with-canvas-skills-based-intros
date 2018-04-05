const BORDERWALLCOLORVAL = '#93C'
const BORDERFILLCOLORVAL = '#888'
const BORDERTHICKNESS = 10

class Border {

  // x, y, w, and h are all defined as % of window width and height

  constructor(x=.1, y=.1, w=.8, h=.8,
              borderWallColorVal=BORDERWALLCOLORVAL,
              borderFillColorVal=BORDERFILLCOLORVAL,
              thickness=BORDERTHICKNESS) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h

    this.borderWallColorVal = borderWallColorVal
    this.borderColor = color(this.borderWallColorVal)

    this.borderFillColorVal = borderFillColorVal
    this.fillColor = color(this.borderFillColorVal)

    this.thickness = thickness
  }

  _getPosition() {
    // returns startX, startY, width, height
    return [
      windowWidth * this.x,
      windowHeight * this.y,
      windowWidth * this.w,
      windowHeight * this.h
    ]
  }

  getWalls() {
    // returns an array of walls: [startX, startY, endX, endY]
    const [x, y, w, h] = this._getPosition()
    return [
      [x, y, (x + w), y], // top
      [x, y, x, (y + h)], // left
      [(x + w), (y + h), x, (y + h)], // bottom
      [(x + w), (y + h), (x + w), y] // right
    ]
  }

  draw() {
    fill(this.fillColor)
    strokeWeight(this.thickness)
    stroke(this.borderColor)

    rect.apply(null, this._getPosition()) // why are we using .apply()? Take a look at the p5 rect() documentation!
  }

}
