const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld;
var ground,ball;
function setup() {
  createCanvas(400,400);
  myEngine=Engine.create();// myEngine.world
  myWorld=myEngine.world;

  var ground_options={
  isStatic:true
}

 ground=Bodies.rectangle(200,390,200,20,ground_options)
 World.add(myWorld,ground);
 
 var ball_options={
  restitution:1.0
}

 ball=Bodies.circle(200,100,20,ball_options)
 World.add(myWorld,ball);
 //console.log(obj.position.x)
}

function draw() {
  
  background("cyan");  
  Engine.update(myEngine);
  rectMode(CENTER);
  fill("brown")
 rect(ground.position.x,ground.position.y,400,20);
 circle(ball.position.x,ball.position.y,50)
}