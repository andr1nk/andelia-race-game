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
    //clear()
    console.log("draw car")
    fill("red")
    ellipse(this.xposCar, this.yposCar, 30, 50)
    image(this.img, this.xposCar, this.yposCar, this.img.width / 10, this.img.height / 10)
    //image(img, this.xpos, this.ypos, 100, 100)
  }

}