
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObjec4, bobObject5,rope;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	rope=new rope (bobObject1.body,roofObject.body,-bobDiameter*2,0)


	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



