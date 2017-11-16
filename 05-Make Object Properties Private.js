
var Car = function() {
  // this is a private variable
  var speed = 10;

  // these are public methods
  this.accelerate = function(change) {
    speed += change;
  };

  this.decelerate = function() {
    speed -= 5;
  };

  this.getSpeed = function() {
    return speed;
  };
};

var Bike = function() {

  // Only change code below this line.
  
  var gear = 1; /*I dont know how bike gears work..?*/
  
  this.getGear = function(){
    return gear;
  };
  
  this.setGear = function(set_to){
    gear = set_to;
  };

};

var myCar = new Car();

var myBike = new Bike();

