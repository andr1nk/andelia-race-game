/* eslint-disable */

class Game {
  constructor(){
    this.car = new Mycar()
  }

  setup() {
    createCanvas(400, 500)
    frameRate(60)
    background(230)

    this.car.hello()
    this.car.setup()
    this.car.draw()
  }
}

// function setup() {
//   createCanvas(600, 500)
//     frameRate(60)
//     background(230)
// }