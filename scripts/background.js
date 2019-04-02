/* eslint-disable */

class LeftSide {
  constructor() {
    this.xposObjLeft = ROADLEFTBORDER /2 -20
    this.yposObjLeft = -100
    this.xposObjRight = ROADLEFTBORDER /2 +20
    this.yposObjRight = -100
  }
  
  setup(){
    this.tree1 = loadImage(
      "../assets/tree1.png"
    )

    this.tree2 = loadImage(
      "../assets/tree2.png"
    )
  }

  draw(){
    this.yposObjLeft += game.roadVelocity
    image(this.tree1, this.xposObjLeft, this.yposObjLeft, 50, 50)
  }
  
}
