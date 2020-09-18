var log1,log2,log3;
var paper;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    
    log1=createSprite(300,615,20,100);
    log2=createSprite(400,655,200,20);
	log3=createSprite(500,615,20,100);
	paper=createSprite(100,40);
	paper=ellipse(56, 46, 55, 55);
	engine = Engine.create();
	world = engine.world;
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	//Create the Bodies Here.
	

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  crumbledpaperball();
  drawSprites();
 
}

function crumbledpaperball(){
  if (paper<100){	
	isStatic=false,
	restitution=0.3,
	friction=0.5,
	density=1.2
  }
 }
