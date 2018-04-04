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

  getPosition() {
    return [
      windowWidth * this.x,
      windowHeight * this.y,
      0 + windowWidth * this.w,
      0 + windowHeight * this.h
    ]
  }

  draw() {
    fill(this.fillColor)
    strokeWeight(this.thickness)
    stroke(this.borderColor)
    rect.apply(null, this.getPosition()) // understanding that rect() is a p5 method to draw a rectangle, why are we using .apply()?
  }

}
