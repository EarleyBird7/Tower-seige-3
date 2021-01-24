
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var polygon,polygonI
var score=0

function preload()
{
polygonI=loadImage("polygon.png")
}

function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the bodies here

	platform=new Ground(400,400,200,10)
	
	box1=new Box(330,390,30,40)
	box2=new Box(360,390,30,40)
	box3=new Box(390,390,30,40)
	box4=new Box(420,390,30,40)
	box9=new Box(450,390,30,40)
	box5=new Box(360,340,30,40)
	box6=new Box(390,340,30,40)
	box7=new Box(420,340,30,40)
	box8=new Box(390,300,30,40)

	polygon=Bodies.circle(200,200,20)   
	World.add(world,polygon)

	rope=new Rope(this.polygon,{x:200,y:300})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  imageMode(CENTER)
  image(polygonI,polygon.position.x,polygon.position.y,40,40)

  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  platform.display()
  rope.display()
  text("score="+score,700,40)
  drawSprites();
 
  box1.score()
  box2.score()
  box3.score()
  box4.score()
  box5.score()
  box6.score()
  box7.score()
  box8.score()
  box9.score()
}

function mouseReleased(){
	rope.fly();
}

function mouseDragged(){
	Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function keyPressed(){
	if(keyCode===32){
		rope.attach(this.polygon)
	}
}
