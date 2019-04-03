/* eslint-disable */

class SideObject1 {
  constructor() {
    this.xposObjLeft = ROADLEFTBORDER /2 -70
    this.yposObjLeft = -100
    this.xposObjRight = ROADLEFTBORDER /2
    this.yposObjRight = -200
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

    this.yposObjRight += game.roadVelocity
    image(this.tree2, this.xposObjRight, this.yposObjRight, 50, 50)
  }

}
class SideObject2 {
  constructor() {
    this.xposObjLeft = ROADLEFTBORDER /2 +20
    this.yposObjLeft = -50
    this.xposObjRight = ROADLEFTBORDER /2 -40
    this.yposObjRight = -300
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

    this.yposObjRight += game.roadVelocity
    image(this.tree2, this.xposObjRight, this.yposObjRight, 50, 50)
  }

}
class SideObject3 {
  constructor() {
    this.xposObjLeft = ROADRIGHTBORDER + 80
    this.yposObjLeft = -70
    this.xposObjRight = ROADRIGHTBORDER + 50
    this.yposObjRight = -0

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

    this.yposObjRight += game.roadVelocity
    image(this.tree2, this.xposObjRight, this.yposObjRight, 50, 50)
  }

}
class SideObject4 {
  constructor() {
    this.xposObjLeft = ROADRIGHTBORDER + 50
    this.yposObjLeft = -60
    this.xposObjRight = ROADRIGHTBORDER + 80
    this.yposObjRight = -200
    

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

    this.yposObjRight += game.roadVelocity
    image(this.tree2, this.xposObjRight, this.yposObjRight, 50, 50)
  }

}
class SideObject5 {
  constructor() {
    this.xposObjLeft = ROADRIGHTBORDER 
    this.yposObjLeft = -60
    this.xposObjRight = ROADRIGHTBORDER + 30
    this.yposObjRight = -200
    this.lama = true
  }
  
  setup(){
    this.lama = loadImage(
      "../assets/honk-lama.png"
    )
  }

  draw(){

    this.yposObjLeft += game.roadVelocity-4
    image(this.lama, this.xposObjLeft, this.yposObjLeft, 100, 100)
  }

}
