
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone;
var ground;
var boy;

function preload()
{
	boy=loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	stone=new Stone (200,200,15);
	ground=new Ground(50,600,12000,20);
	//boy = createSprite(305,365,20,20);
	//boy=addImage("boy");

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(boy);
  stone.display();
  ground.display();
  
  drawSprites();
 
}



