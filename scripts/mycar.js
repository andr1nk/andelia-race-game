/* eslint-disable */

class Mycar {
  constructor() {
    this.xposCar = 50
    this.yposCar = 50
  }

  setup() {
    this.img = loadImage(
      "https://raw.githubusercontent.com/remylenoir/w2d5/master/assets/bird.png"
    )
  }

  draw() {
    fill("red")
    console.log("draw car")
    rect(this.xposCar, this.yposCar, 30, 50)
    //image(this.img, this.xpos, this.ypos, this.img.width / 10, this.img.height / 10)
    //image(img, this.xpos, this.ypos, 100, 100)
  }


}