/* eslint-disable */

class Lama {
  constructor() {
    this.xposObjLeft = ROADRIGHTBORDER 
    this.yposObjLeft = -100

    this.lama = true
  }
  
  setup(){
    this.lama = loadImage(
      "../assets/honklama.png"
    )
  }

  draw(){

    this.yposObjLeft += game.roadVelocity-4
    image(this.lama, this.xposObjLeft, this.yposObjLeft, 100, 100)
  }

}

class SideObjectLeft1 {
  constructor() {
    this.xposObjLeft = ROADLEFTBORDER /2 -70
    this.yposObjLeft = -150
    this.xposObjRight = ROADLEFTBORDER /2
    this.yposObjRight = -50
  }
  
  setup(){
    this.tree1 = loadImage(
      "../assets/treeone.png"
    )

    this.tree2 = loadImage(
      "../assets/treetwo.png"
    )
  }

  draw(){
    this.yposObjLeft += game.roadVelocity
    image(this.tree1, this.xposObjLeft, this.yposObjLeft, 50, 50)

    this.yposObjRight += game.roadVelocity
    image(this.tree2, this.xposObjRight, this.yposObjRight, 50, 50)
  }

}
class SideObjectLeft2 {
  constructor() {
    this.xposObjLeft = ROADLEFTBORDER /2 +20
    this.yposObjLeft = -100
    this.xposObjRight = ROADLEFTBORDER /2 -40
    this.yposObjRight = -50
  }
  
  setup(){
    this.tree1 = loadImage(
      "../assets/treeone.png"
    )

    this.tree2 = loadImage(
      "../assets/treetwo.png"
    )
  }

  draw(){
    this.yposObjLeft += game.roadVelocity
    image(this.tree1, this.xposObjLeft, this.yposObjLeft, 50, 50)

    this.yposObjRight += game.roadVelocity
    image(this.tree2, this.xposObjRight, this.yposObjRight, 50, 50)
  }

}
class SideObjectRight1 {
  constructor() {
    this.xposObjLeft = ROADRIGHTBORDER + 80
    this.yposObjLeft = -90
    this.xposObjRight = ROADRIGHTBORDER + 50
    this.yposObjRight = -50

  }
  
  setup(){
    this.tree1 = loadImage(
      "../assets/treeone.png"
    )

    this.tree2 = loadImage(
      "../assets/treetwo.png"
    )
  }

  draw(){
    this.yposObjLeft += game.roadVelocity
    image(this.tree1, this.xposObjLeft, this.yposObjLeft, 50, 50)

    this.yposObjRight += game.roadVelocity
    image(this.tree2, this.xposObjRight, this.yposObjRight, 50, 50)
  }

}
class SideObjectRight2 {
  constructor() {
    this.xposObjLeft = ROADRIGHTBORDER + 50
    this.yposObjLeft = -150
    this.xposObjRight = ROADRIGHTBORDER + 80
    this.yposObjRight = -50
    

  }
  
  setup(){
    this.tree1 = loadImage(
      "../assets/treeone.png"
    )

    this.tree2 = loadImage(
      "../assets/treetwo.png"
    )
  }

  draw(){
    this.yposObjLeft += game.roadVelocity
    image(this.tree1, this.xposObjLeft, this.yposObjLeft, 50, 50)

    this.yposObjRight += game.roadVelocity
    image(this.tree2, this.xposObjRight, this.yposObjRight, 50, 50)
  }

}
