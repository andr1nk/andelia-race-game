/* eslint-disable */

class Mycar {
  constructor() {
    this.xposCar = ROADWIDTH / 2 - CARWIDTH / 2
    this.yposCar = ROADHEIGHT-CARHEIGHT - 50
    this.myCarVelocity = 5
  }

  setup() {
    this.myCarImg = loadImage(
      "../assets/car.png"
    )
  }

  draw() {
    //console.log("car is drawn")

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
      if (this.xposCar <= 0 ) this.xposCar = 0
      if (this.xposCar >= ROADWIDTH-CARWIDTH) this.xposCar = ROADWIDTH-CARWIDTH

      if (this.yposCar <= 0 ) this.yposCar = 0
      if (this.yposCar >= ROADHEIGHT-CARHEIGHT) this.yposCar = ROADHEIGHT-CARHEIGHT
  }
}