

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj,ground	
var engine,world;
var ball;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	ground=new Ground(width/2,670,width,20);
	dustbinObj=new Dustbin(1200,650);
	ball=new Ball(200,200)	
	Engine.run(engine);	

}


function draw() {
  rectMode(CENTER);
  background(230);
 

  ground.display();
  dustbinObj.display();
  ball.display();


}

function keyPressed() 
{ if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(ball.body,ball.body.position,{x:900,y:-410}); } }