/* eslint-disable */



class Game {
  constructor(){
    this.car = new Mycar()
    this.xposStrip = 195
    this.yposStrip = 0
    this.stripWidth = 10
    this.stripHeight = 50
  }

  setup() {
    var canvas = createCanvas(400, 515)
    frameRate(60)
    background("#222222")
    canvas.parent('sketch-holder');

    this.car.setup()
  }


  draw () {
    clear()
    console.log("draw strip")
    background("#222222")

    if (this.yposStrip > 80) this.yposStrip = 0

    fill("#ffffff")
    this.yposStrip += 2
    rect(this.xposStrip, this.yposStrip -80, this.stripWidth, this.stripHeight)
    rect(this.xposStrip, this.yposStrip, this.stripWidth, this.stripHeight)
    rect(this.xposStrip, this.yposStrip + 80, this.stripWidth, this.stripHeight)
    rect(this.xposStrip, this.yposStrip + 160, this.stripWidth, this.stripHeight)
    rect(this.xposStrip, this.yposStrip + 240, this.stripWidth, this.stripHeight)
    rect(this.xposStrip, this.yposStrip + 320, this.stripWidth, this.stripHeight)
    rect(this.xposStrip, this.yposStrip + 400, this.stripWidth, this.stripHeight)
    rect(this.xposStrip, this.yposStrip + 480, this.stripWidth, this.stripHeight)
  }

}