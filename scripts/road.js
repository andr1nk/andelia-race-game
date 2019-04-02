/* eslint-disable */



class Game {
  constructor(){
    this.car = new Mycar()
    this.otherCars = []
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
    
    this.setSpawnInterval()
  }
  
  setSpawnInterval() {
    this.spawnInterval = setInterval(
      function() {
        if (Math.random() > 0.5) {
          this.otherCars.push(new PoliceCar())
          //console.log("POLICE pushed to other cars Array")
        } else {
          this.otherCars.push(new Tank())
          //console.log("TANK pushed to other cars Array")
        }
        this.otherCars.forEach(car=> car.setup())
        if (this.otherCars.length > 6) {
          this.otherCars.splice(1,1)
        }
      }.bind(this), 2000
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

    //otherCars
    this.otherCars.forEach(car => {
      car.draw()
      car.checkCollision()
    })

  }


}