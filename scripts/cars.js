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
    //console.log("police car is drawn")
    this.yposOtherCar += this.velocityOtherCar
    image(this.policeCarImg, this.xposOtherCar, this.yposOtherCar, OTHERCARWIDTH, OTHERCARHEIGHT)
  }
  
  checkCollision() {
    const policeCarRect = {
        left: this.xposOtherCar,
        right: this.xposOtherCar + OTHERCARWIDTH,
        top: this.yposOtherCar,
        bottom: this.yposOtherCar + OTHERCARHEIGHT,
    }

    if (intersectRect(policeCarRect, game.car.myCarRect)) {
        console.log("Collision with POLICE!!")
    }

    function intersectRect(r1, r2) {
      return !(
        r2.left > r1.right ||
        r2.right < r1.left ||
        r2.top > r1.bottom ||
        r2.bottom < r1.top
    )
    }
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
    //console.log("tank is drawn")
    this.yposOtherCar += this.velocityOtherCar
    image(this.tankImg, this.xposOtherCar, this.yposOtherCar, OTHERCARWIDTH, OTHERCARHEIGHT)
  }

  checkCollision() {
    const tankRect = {
        left: this.xposOtherCar,
        right: this.xposOtherCar + OTHERCARWIDTH,
        top: this.yposOtherCar,
        bottom: this.yposOtherCar + OTHERCARHEIGHT,
    }

    if (intersectRect(tankRect, game.car.myCarRect)) {
        console.log("Collision with TANK!!")
    }

    function intersectRect(r1, r2) {
        return !(
            r2.left > r1.right ||
            r2.right < r1.left ||
            r2.top > r1.bottom ||
            r2.bottom < r1.top
        )
    }
  }
}