/* eslint-disable */

class Mycar {
  constructor() {
    this.xposCar = ROADLEFTBORDER + ROADWIDTH / 2 - CARWIDTH / 2
    this.yposCar = ROADHEIGHT-CARHEIGHT - 50
    this.myCarVelocity = 5
    this.honkTrue = false
  }

  setup() {
    this.myCarImg = loadImage(
      "../assets/car.png"
    )

    this.honk = new Audio("../assets/huh.mp3")

  }
  

  draw() {

    //honk
    if (keyIsDown(65)) {
      this.honk.play()
      this.honkTrue = true
    } else {
      this.honkTrue = false
    }

    // move car

      if (keyIsDown(LEFT_ARROW)) {
        this.xposCar -= this.myCarVelocity
        image(this.myCarImg, this.xposCar, this.yposCar, CARWIDTH, CARHEIGHT)
      }

      if (keyIsDown(RIGHT_ARROW)) {
        this.xposCar += this.myCarVelocity
        image(this.myCarImg, this.xposCar, this.yposCar, CARWIDTH, CARHEIGHT)
      } 

      if (keyIsDown(UP_ARROW)) {
        this.yposCar -= this.myCarVelocity
        image(this.myCarImg, this.xposCar, this.yposCar, CARWIDTH, CARHEIGHT)
      } 

      if (keyIsDown(DOWN_ARROW)) {
        this.yposCar += this.myCarVelocity
        image(this.myCarImg, this.xposCar, this.yposCar, CARWIDTH, CARHEIGHT)
      }

        image(this.myCarImg, this.xposCar, this.yposCar, CARWIDTH, CARHEIGHT)
      
    
    // Avoid that car goes over border
      if (this.xposCar <= ROADLEFTBORDER) this.xposCar = ROADLEFTBORDER
      if (this.xposCar >= ROADLEFTBORDER + ROADWIDTH-CARWIDTH) this.xposCar = ROADLEFTBORDER + ROADWIDTH-CARWIDTH

      if (this.yposCar <= 0 ) this.yposCar = 0
      if (this.yposCar >= ROADHEIGHT-CARHEIGHT) this.yposCar = ROADHEIGHT-CARHEIGHT
      this.setRect()
  }

  setRect() {
    this.myCarRect = {
        left: this.xposCar,
        right: this.xposCar + CARWIDTH,
        top: this.yposCar,
        bottom: this.yposCar + CARHEIGHT,
    }
}
}