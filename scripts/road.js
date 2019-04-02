/* eslint-disable */



class Game {
  constructor(){
    this.car = new Mycar()
    this.otherCars = []
    this.xposRoadMark = 130
    this.yposRoadMark = 0
    this.RoadMarkDistance = 120
    this.RoadMarkWidth = 10
    this.RoadMarkHeight = 50
    this.roadVelocity = 12
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
        let carPushRandomizer = Math.random()
        if (carPushRandomizer < 0.2) {
          this.otherCars.push(new PoliceCar())
          //console.log("POLICE pushed to other cars Array")
        } else if (carPushRandomizer >= 0.2 && carPushRandomizer < 0.4){
          this.otherCars.push(new CarLaneTwo())
          //console.log("Lane 2 Car pushed to other cars Array")
        } else if (carPushRandomizer >= 0.4 && carPushRandomizer < 0.6){
          this.otherCars.push(new Tank())
          //console.log("TANK pushed to other cars Array")
        } else if (carPushRandomizer >= 0.6 && carPushRandomizer < 0.8){
          this.otherCars.push(new BikeLeft())
          //console.log("BIKE pushed to other cars Array")
        } else {
          this.otherCars.push(new BikeRight())
          //console.log("BIKE pushed to other cars Array")
        }

        this.otherCars.forEach(car=> car.setup())
        if (this.otherCars.length > 10) {
          this.otherCars.splice(1,1)
        }
      }.bind(this), 1500
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
      rect(this.xposRoadMark + 130, this.yposRoadMark + this.RoadMarkDistance * i, this.RoadMarkWidth, this.RoadMarkHeight)
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