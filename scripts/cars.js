/* eslint-disable */

class PoliceCar {
  constructor() {
    this.xposOtherCar = ROADWIDTH * 1/4 - OTHERCARWIDTH / 2
    this.yposOtherCar = -OTHERCARHEIGHT
    this.velocityOtherCar = 2
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

class Tank {
  constructor() {
    this.xposOtherCar = ROADWIDTH * 3/4
    this.yposOtherCar = -OTHERCARHEIGHT
    this.velocityOtherCar = 5
  }
  
  setup(){
    this.tankImg = loadImage(
      "../assets/tank.png"
    )
  }

  draw(){
    console.log("tank is drawn")
    this.yposOtherCar += this.velocityOtherCar
    image(this.tankImg, this.xposOtherCar, this.yposOtherCar, OTHERCARWIDTH, OTHERCARHEIGHT)
  }
}