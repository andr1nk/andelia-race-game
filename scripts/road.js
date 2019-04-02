/* eslint-disable */



class Game {
  constructor(){
    this.car = new Mycar()
    this.otherCarsLeft = []
    this.otherCarsRight = []
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
    
    this.setSpawnIntervalLeft()
    this.setSpawnIntervalRight()
  }
  
  setSpawnIntervalLeft() {
    this.spawnIntervalLeft = setInterval(
      function() {
        this.otherCarsLeft.push(new PoliceCar())
        this.otherCarsLeft.forEach(car=> car.setup())
        console.log("OtherCar pushed to Array: ")
        console.log(this.otherCarsLeft)
        if (this.otherCarsLeft.length > 3) {
          console.log("string too long")
          this.otherCarsLeft.splice(1,1)
        }
      }.bind(this), 5000
      )
    }

  setSpawnIntervalRight() {
    this.spawnIntervalRight = setInterval(
      function() {
        this.otherCarsRight.push(new Tank())
        this.otherCarsRight.forEach(car=> car.setup())
        console.log("OtherCar pushed to Array: ")
        console.log(this.otherCarsRight)
        if (this.otherCarsRight.length > 6) {
          console.log("string too long")
          this.otherCarsRight.splice(1,1)
        }
      }.bind(this), 3000
      )
    }
    
  draw() {
    clear()

    background("#222222") // road color

    // road marks
    if (this.yposRoadMark > this.RoadMarkDistance - 1) this.yposRoadMark = 0

    fill("#ffffff")

    this.yposRoadMark += this.roadVelocity
    for (let i = -1; i < 7; i++) {
      rect(this.xposRoadMark, this.yposRoadMark + this.RoadMarkDistance * i, this.RoadMarkWidth, this.RoadMarkHeight)
    }


    //myCar 
    this.car.draw()

    //otherCars Left Lane
    this.otherCarsLeft.forEach(car => car.draw())

    //otherCars Right Lane
    this.otherCarsRight.forEach(car => car.draw())

  }


}