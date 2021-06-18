var engine,world,bodies,paperball,ground,dustbin1,dustbin2,dustbin3,dustbinImg,paperImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paperball = new Paperball(150,570)
	

	dustbin2  = new Dustbin(740,400,20,100);
	ground    = new Ground(500,593);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paperball.display();
  ground.display();
  dustbin2.display();
 
}
 
function keyPressed(){
	if (keyCode === UP_ARROW){
		
		Body.applyForce(paperball.body,paperball.body.position,{x:225,y:-225})
	}
	
}


