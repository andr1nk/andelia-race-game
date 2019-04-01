/* eslint-disable */



class Game {
  constructor(){
    this.car = new Mycar()
    // this.otherCar = new OtherCar()
    this.otherCars = [new OtherCar()]
    this.xposRoadMark = 195
    this.yposRoadMark = 0
    this.RoadMarkDistance = 80
    this.RoadMarkWidth = 10
    this.RoadMarkHeight = 50
    this.roadVelocity = 9
  }


  setup() {
    var canvas = createCanvas(400, 515)
    frameRate(10)
    background("#222222")
    canvas.parent('sketch-holder');

    this.car.setup()
    this.otherCars[0].setup()
    this.setSpawnInterval()
  }

  setSpawnInterval() {
    this.spawnInterval = setInterval(
      function() {
        this.otherCars.push(new OtherCar())
        console.log("OtherCar pushed to Array: ")
        console.log(this.otherCars)
        if (this.otherCars.length > 5) {
          console.log("string too long")
          this.otherCars.slice(1)
        }
        }.bind(this), 3000
    )
  }

  draw () {
    clear()

    background("#222222") // road color
    
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
    this.otherCars[0].draw()
  }


}