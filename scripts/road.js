/* eslint-disable */



class Game {
  constructor(){
    this.car = new Mycar()
    this.otherCar = new OtherCar()
    this.xposRoadMark = 195
    this.yposRoadMark = 0
    this.RoadMarkDistance = 80
    this.RoadMarkWidth = 10
    this.RoadMarkHeight = 50
    this.roadVelocity = 9
  }

  setup() {
    var canvas = createCanvas(400, 515)
    frameRate(60)
    background("#222222")
    canvas.parent('sketch-holder');

    this.car.setup()
    this.otherCar.setup()
  }


  draw () {
    clear()

    // road color
    background("#222222")
    
    // road marks
    if (this.yposRoadMark > this.RoadMarkDistance-1) this.yposRoadMark = 0
    
    fill("#ffffff")

    this.yposRoadMark += this.roadVelocity
    for (let i = -1; i < 7; i++) {
      rect(this.xposRoadMark, this.yposRoadMark + this.RoadMarkDistance * i, this.RoadMarkWidth, this.RoadMarkHeight)
    }


    //myCar 
    this.car.draw()

    //otherCar
    
    this.otherCar.draw()

  }

}