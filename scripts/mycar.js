/* eslint-disable */

class Mycar {
  constructor() {
    this.xpos = 0
    this.ypos = 0
  }

  setup() {
    this.img = loadImage(
      "https://www.altitude365.com/wp-content/uploads/2016/04/clip_image001-1.gif"
    )
  }

  draw() {
    fill(0)
    //ellipse(10, 10, 50, 50)
    // image(this.img, this.xpos, this.ypos, 100)
  }

  hello() {
    console.log("hello")
  }
}