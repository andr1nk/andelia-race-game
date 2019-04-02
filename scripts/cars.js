/* eslint-disable */

class PoliceCar {
  constructor() {
    this.xposOtherCar = ROADWIDTH * 1/6 - OTHERCARWIDTH / 2
    this.yposOtherCar = -OTHERCARHEIGHT
    this.velocityOtherCar = 4
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

class CarLaneTwo {
  constructor() {
    this.xposOtherCar = ROADWIDTH * 3/6 - OTHERCARWIDTH / 2
    this.yposOtherCar = -OTHERCARHEIGHTLONG
    this.velocityOtherCar = 8
  }
  
  setup(){
    this.carLaneTwoImg = loadImage(
      "../assets/limousine.png"
    )
  }

  draw(){
    this.yposOtherCar += this.velocityOtherCar
    image(this.carLaneTwoImg, this.xposOtherCar, this.yposOtherCar, OTHERCARWIDTH, OTHERCARHEIGHTLONG)
  }
  
  checkCollision() {
    const carLaneTwoRect = {
        left: this.xposOtherCar,
        right: this.xposOtherCar + OTHERCARWIDTH,
        top: this.yposOtherCar,
        bottom: this.yposOtherCar + OTHERCARHEIGHTLONG,
    }

    if (intersectRect(carLaneTwoRect, game.car.myCarRect)) {
        console.log("Collision with Limo!!")
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
    this.xposOtherCar = ROADWIDTH * 5/6 - OTHERCARWIDTH / 2
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

class BikeLeft {
  constructor() {
    this.xposOtherCar = ROADWIDTH * 2/6 - BIKEWIDTH / 2
    this.yposOtherCar = ROADHEIGHT + BIKEHEIGHT
    this.velocityOtherCar = -10
  }
  
  setup(){
    this.bikeImg = loadImage(
      "../assets/bike.png"
    )
  }

  draw(){
    //console.log("bike is drawn")
    this.yposOtherCar += this.velocityOtherCar
    image(this.bikeImg, this.xposOtherCar, this.yposOtherCar, BIKEWIDTH, BIKEHEIGHT)
  }

  checkCollision() {
    const bikeRect = {
        left: this.xposOtherCar,
        right: this.xposOtherCar + BIKEWIDTH,
        top: this.yposOtherCar,
        bottom: this.yposOtherCar + BIKEHEIGHT,
    }

    if (intersectRect(bikeRect, game.car.myCarRect)) {
        console.log("Collision with Bike!!")
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
class BikeRight {
  constructor() {
    this.xposOtherCar = ROADWIDTH * 4/6 - BIKEWIDTH / 2
    this.yposOtherCar = ROADHEIGHT + BIKEHEIGHT
    this.velocityOtherCar = -15
  }
  
  setup(){
    this.bikeImg = loadImage(
      "../assets/bike.png"
    )
  }

  draw(){
    //console.log("bike is drawn")
    this.yposOtherCar += this.velocityOtherCar
    image(this.bikeImg, this.xposOtherCar, this.yposOtherCar, BIKEWIDTH, BIKEHEIGHT)
  }

  checkCollision() {
    const bikeRect = {
        left: this.xposOtherCar,
        right: this.xposOtherCar + BIKEWIDTH,
        top: this.yposOtherCar,
        bottom: this.yposOtherCar + BIKEHEIGHT,
    }

    if (intersectRect(bikeRect, game.car.myCarRect)) {
        console.log("Collision with Bike!!")
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