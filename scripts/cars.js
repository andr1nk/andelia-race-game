/* eslint-disable */

class OtherCar {
  constructor() {
    this.xposOtherCar = ROADWIDTH / 4 - OTHERCARWIDTH / 2
    this.yposOtherCar = -OTHERCARHEIGHT
    this.velocityOtherCar = 4
  }
  
  setup(){
    this.policeCarImg = loadImage(
      "../assets/police-car.png"
    )
  }

  draw(){
    console.log("police car is drawn")
    this.yposOtherCar += this.velocityOtherCar
    image(this.policeCarImg, this.xposOtherCar, this.yposOtherCar, OTHERCARWIDTH, OTHERCARHEIGHT)
  }
}