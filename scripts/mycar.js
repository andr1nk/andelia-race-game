/* eslint-disable */

class Mycar {
  constructor() {
    this.xpos = 50
    this.ypos = 50
  }

  setup() {
    this.img = loadImage(
      "../assets/bird.png"
    )
  }

  draw() {
    fill(0)
    ellipse(10, 10, 50, 50)
    //image(this.img, this.xpos, this.ypos, 100, 50)
    //image(img, this.xpos, this.ypos, 100, 100)
  }

  hello() {
    console.log("hello")
  }
}