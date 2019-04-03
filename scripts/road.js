/* eslint-disable */

class Game {
  constructor() {
    //cars
    this.car = new Mycar();
    this.otherCars = [];

    //road
    this.xposRoadMark = ROADLEFTBORDER + 130;
    this.yposRoadMark = 0;
    this.RoadMarkDistance = 120;
    this.RoadMarkWidth = 10;
    this.RoadMarkHeight = 50;
    this.roadVelocity = 12;

    //road side

    this.sideObjects = [];
    this.sideObject = new SideObject1();

    // game over
    this.youLost = false;
    this.youWon = false;

    //scoreboard
    this.distanceToStuggi = 100;
  }

  setup() {
    //console.log("setup is called")
    var canvas = createCanvas(CANVASWIDTH, CANVASHEIGHT);
    frameRate(60);
    background("#222222");
    canvas.parent("sketch-holder");

    this.car.setup();

    this.setSpawnIntervalCars();
    this.setSpawnIntervalObjects();
    this.setScoreInterval();
  }

  setSpawnIntervalCars() {
    this.spawnIntervalCars = setInterval(
      function() {
        let carPushRandomizer = Math.random();
        if (carPushRandomizer < 0.2) {
          this.otherCars.push(new PoliceCar());
          //console.log("POLICE pushed to other cars Array")
        } else if (carPushRandomizer >= 0.2 && carPushRandomizer < 0.4) {
          this.otherCars.push(new CarLaneTwo());
          //console.log("Lane 2 Car pushed to other cars Array")
        } else if (carPushRandomizer >= 0.4 && carPushRandomizer < 0.6) {
          this.otherCars.push(new Tank());
          //console.log("TANK pushed to other cars Array")
        } else if (carPushRandomizer >= 0.6 && carPushRandomizer < 0.8) {
          this.otherCars.push(new BikeLeft());
          //console.log("BIKE pushed to other cars Array")
        } else {
          this.otherCars.push(new BikeRight());
          //console.log("BIKE pushed to other cars Array")
        }

        this.otherCars.forEach(car => car.setup());
        this.otherCars = this.otherCars.filter(car => (car.yposOtherCar >= -OTHERCARHEIGHTLONG) && (car.yposOtherCar <= ROADHEIGHT + OTHERCARHEIGHTLONG) )
      }.bind(this),
      1500
    );
  }

  setSpawnIntervalObjects() {
    this.spawnIntervalObjects = setInterval(
      function() {
        let objectPushRandomizer = Math.random();
        if (objectPushRandomizer < 0.2) {
          this.sideObjects.push(new SideObject1());
        } else if (objectPushRandomizer >= 0.2 && objectPushRandomizer < 0.4) {
          this.sideObjects.push(new SideObject2());
        } else if (objectPushRandomizer >= 0.4 && objectPushRandomizer < 0.6) {
          this.sideObjects.push(new SideObject3());
        } else if (objectPushRandomizer >= 0.6 && objectPushRandomizer < 0.8) {
          this.sideObjects.push(new SideObject4());
        } else {
          this.sideObjects.push(new SideObject3());
        }

        this.sideObjects.forEach(sideObject => sideObject.setup());
        if (this.sideObjects.length > 15) {
          this.sideObjects.splice(1, 1);
        }
      }.bind(this),
      500
    );
  }

  setScoreInterval() {
    this.scoreInterval = setInterval(
      function() {
        this.distanceToStuggi--;
        if (this.distanceToStuggi == 0) {
          this.won();
        }
        document.getElementById("distanceLeftToStuggi").innerHTML = `${
          this.distanceToStuggi
        } km`;
      }.bind(this),
      1000
    );
  }

  draw() {
    console.log(this.otherCars.length)
    clear();
    
    // road color
    background("#222222");

    // road marks
    if (this.yposRoadMark > this.RoadMarkDistance - 1) this.yposRoadMark = 0;
    fill("#ffffff");

    this.yposRoadMark += this.roadVelocity;
    for (let i = -1; i < 7; i++) {
      rect(
        this.xposRoadMark,
        this.yposRoadMark + this.RoadMarkDistance * i,
        this.RoadMarkWidth,
        this.RoadMarkHeight
      );
      rect(
        this.xposRoadMark + 130,
        this.yposRoadMark + this.RoadMarkDistance * i,
        this.RoadMarkWidth,
        this.RoadMarkHeight
      );
    }

    // left side
    fill("green")
    rect(-1, -1, ROADLEFTBORDER, ROADHEIGHT+1)

    // right side
    fill("green")
    rect(ROADLEFTBORDER + ROADWIDTH-1, -1, CANVASWIDTH-ROADLEFTBORDER-ROADWIDTH+1, ROADHEIGHT+1)

    this.sideObjects.forEach(sideObject => {
      sideObject.draw();
    });


    //game over condition
    if (this.youLost) {
      textSize(40);
      fill("red");
      textFont("Arial");
      textAlign(CENTER);
      text("You Crashed, silly!", ROADLEFTBORDER + ROADWIDTH / 2, ROADHEIGHT / 2 - 40);
      text("Game Over", ROADLEFTBORDER + ROADWIDTH / 2, ROADHEIGHT / 2);
    } else if (this.youWon) {
      textSize(40);
      fill("red");
      textFont("Arial");
      textAlign(CENTER);
      text("You made it to Stuggi", ROADLEFTBORDER + ROADWIDTH / 2, ROADHEIGHT / 2 - 40);
      text("You Toller Hecht, you!", ROADLEFTBORDER + ROADWIDTH / 2, ROADHEIGHT / 2);
    } else {
      //myCar
      this.car.draw();
      //otherCars
      this.otherCars.forEach(car => {
        car.draw();
        car.checkCollision();
      });
    }
  }

  lost() {
    console.log("Lost");
    this.youLost = true;
    clearInterval(this.scoreInterval);
  }

  won() {
    this.youWon = true;
    clearInterval(this.scoreInterval);
  }
}
