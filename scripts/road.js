/* eslint-disable */

class Game {
  constructor(){
    this.car = new Mycar()
  }

  setup() {
    var canvas = createCanvas(400, 515)
    frameRate(60)
    background(0)
    canvas.parent('sketch-holder');

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