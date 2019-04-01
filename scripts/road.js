/* eslint-disable */



class Game {
  constructor(){
    this.car = new Mycar()
    this.xposStrip = 195
    this.yposStrip = 0
    this.stripDistance = 80
    this.stripWidth = 10
    this.stripHeight = 50
  }

  setup() {
    var canvas = createCanvas(400, 515)
    frameRate(2)
    background("#222222")
    canvas.parent('sketch-holder');

    this.car.setup()
  }


  draw () {
    clear()

    background("#222222")

    this.car.draw()

    if (this.yposStrip > this.stripDistance-1) this.yposStrip = 0

    fill("#ffffff")
    this.yposStrip += 5
    rect(this.xposStrip, this.yposStrip + this.stripDistance * -1, this.stripWidth, this.stripHeight)
    rect(this.xposStrip, this.yposStrip + this.stripDistance * 0, this.stripWidth, this.stripHeight)
    rect(this.xposStrip, this.yposStrip + this.stripDistance * 1, this.stripWidth, this.stripHeight)
    rect(this.xposStrip, this.yposStrip + this.stripDistance * 2, this.stripWidth, this.stripHeight)
    rect(this.xposStrip, this.yposStrip + this.stripDistance * 3, this.stripWidth, this.stripHeight)
    rect(this.xposStrip, this.yposStrip + this.stripDistance * 4, this.stripWidth, this.stripHeight)
    rect(this.xposStrip, this.yposStrip + this.stripDistance * 5, this.stripWidth, this.stripHeight)
    rect(this.xposStrip, this.yposStrip + this.stripDistance * 6, this.stripWidth, this.stripHeight)
  }

}