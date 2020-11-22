var log1,log2,log3;
var paperball;
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
	
	engine = Engine.create();
	world = engine.world;

    log1=Bodies.rectangle(300,615,20,100, {isStatic:true});
    log2=Bodies.rectangle(400,655,200,20, {isStatic:true});
	log3=Bodies.rectangle(500,615,20,100, {isStatic:true});
	
	World.add(world,log1);
	World.add(world,log2);
	World.add(world,log3);

	paperball=new Paper(200, 200, 10);

	groundSprite=Bodies.rectangle(width/2, height-35, width,10, {isStatic:true});
	World.add(world,groundSprite);

	Engine.run(engine);
  
}

function draw() {
  background(0);
  rectMode(CENTER);

  rect(log1.position.x, log1.position.y, 20,100);
  rect(log2.position.x, log2.position.y, 200,20);
  rect(log3.position.x, log3.position.y, 20,100);
  rect(groundSprite.position.x, groundSprite.position.y, width, 10);
   
  
  paperball.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
      Matter.Body.applyForce(paperball.body, paperball.body.position, {x:12, y:-12})
	}
}