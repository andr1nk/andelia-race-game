/* eslint-disable */



class PoliceCar {
  constructor() {
    this.xposOtherCar = ROADLEFTBORDER + ROADWIDTH * 1/6 - OTHERCARWIDTH / 2
    this.yposOtherCar = -OTHERCARHEIGHT
    this.velocityOtherCar = game.roadVelocity - 8
  }
  
  setup(){
    this.policeCarImg = loadImage(
      "https://raw.githubusercontent.com/andr1nk/andelia-race-game/master/assets/policecar.png"
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
        game.lost()
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
    this.xposOtherCar = ROADLEFTBORDER + ROADWIDTH * 3/6 - OTHERCARWIDTH / 2
    this.yposOtherCar = -OTHERCARHEIGHTLONG
    this.velocityOtherCar = game.roadVelocity - 4
  }
  
  setup(){
    this.carLaneTwoImg = loadImage(
      "https://raw.githubusercontent.com/andr1nk/andelia-race-game/master/assets/limousine.png"
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
        game.lost()
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
    this.xposOtherCar = ROADLEFTBORDER + ROADWIDTH * 5/6 - OTHERCARWIDTH / 2
    this.yposOtherCar = -OTHERCARHEIGHT
    this.velocityOtherCar = game.roadVelocity - 2
  }
  
  setup(){
    this.tankImg = loadImage(
      "https://raw.githubusercontent.com/andr1nk/andelia-race-game/master/assets/tank.png"
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
        game.lost()
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
    this.xposOtherCar = ROADLEFTBORDER + ROADWIDTH * 2/6 - BIKEWIDTH / 2
    this.yposOtherCar = ROADHEIGHT + BIKEHEIGHT
    this.velocityOtherCar = -15
  }
  
  setup(){
    this.bikeImg = loadImage(
      "https://raw.githubusercontent.com/andr1nk/andelia-race-game/master/assets/bike.png"
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
        game.lost()
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
    this.xposOtherCar = ROADLEFTBORDER + ROADWIDTH * 4/6 - BIKEWIDTH / 2
    this.yposOtherCar = ROADHEIGHT + BIKEHEIGHT
    this.velocityOtherCar = -10
  }
  
  setup(){
    this.bikeImg = loadImage(
      "https://raw.githubusercontent.com/andr1nk/andelia-race-game/master/assets/bike.png"
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
        game.lost()
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