class Box {
  constructor() {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle( options);
    this.width = width;
    this.height = height; 
  }
  display(){
    var pos =this.body.position;
    World.add(world, this.body);
    translate(pos.x, pos.y);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("red");
    fill("white");
    rect(0, 0, this.width, this.height);
  }
};
