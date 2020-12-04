
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var Grnd, treeObj, boyImage, stoneObj;
var engine, world;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12;
function preload()
{
 
}

function setup() {
	createCanvas(1300, 600);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Grnd=new Ground(width/2,600,width,30);
	
	treeObj=new tree(1000,350,50);
     
	boyImage=loadImage("boy.png");	

	stoneObj=new stone(500,600,20);

	 mango1=new Mango(900,300,10);
	 mango2=new Mango(870,330,10);
	 mango3=new Mango(940,330,10);
 	 mango4=new Mango(860,270,10);
     mango5=new Mango(950,200,10);
	 mango6=new Mango(900,260,10);
	 mango7=new Mango(1100,300,10);
	 mango8=new Mango(1170,330,10);
	 mango9=new Mango(1240,330,10);
 	 mango10=new Mango(1000,280,10);
     mango11=new Mango(1050,250,10);
	 mango12=new Mango(1000,240,10);

	 launcherObj=new launcher(stoneObj.body,{x:140,y:455});
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgray");
  Engine.update(engine);
  imageMode(CENTER);
  image(boyImage,200,500,200,200);
	
  Grnd.display();
  
  stoneObj.display();
 
  treeObj.display();
   launcherObj.display();
   
   mango1.display(); 
   mango2.display();
   mango3.display(); 
   mango4.display(); 
   mango5.display();
   mango6.display(); 
   mango7.display(); 
   mango8.display();
   mango9.display(); 
   mango10.display(); 
   mango11.display();
   mango12.display();
   stoneObj.display();
   Grnd.display();
 
   detectCollision(stoneObj,mango1);
   detectCollision(stoneObj,mango2);
   detectCollision(stoneObj,mango3);
   detectCollision(stoneObj,mango4);
   detectCollision(stoneObj,mango5);
   detectCollision(stoneObj,mango6);
   detectCollision(stoneObj,mango7);
   detectCollision(stoneObj,mango8);
   detectCollision(stoneObj,mango9);
   detectCollision(stoneObj,mango10);
   detectCollision(stoneObj,mango11);
   detectCollision(stoneObj,mango12);
	
   drawSprites();
 
}
function detectCollision(Lstone, Lmango){
  
	mangoPosition=Lmango.body.position
	stonePosition=Lstone.body.position
	
	var distance=dist(stonePosition.x, stonePosition.y, mangoPosition.x, mangoPosition.y)
	
	if (distance <= Lmango.r + Lstone.r) {
		Matter.Body.setStatic(Lmango.body,false);
	}
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stoneObj.body, {x:140,y:455})
		launcherObj.attach(stoneObj.body);
	}
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}
function mousePressed()
{
  launcherObj.attach(stoneObj.body);
}

function mouseReleased()
{
	launcherObj.fly();
}

