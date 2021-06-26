const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground1;
var pig1,pig2;
var log1,log2,log3,log4;
var box3,box4;
var bird1;
var bg_image;

function preload()
{
bg_image=loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1= new ground(600,height,1200,20);
    box1 = new Box(1000,399,50,50);
    box2 = new Box(750,399,50,50);
    box3 = new Box (1000,300,50,50);
    box4 = new Box (750,300,50,50);
    bird1 = new Bird(200,100);
    pig1 = new Pig(876,399);
    pig2 = new Pig(876,250)
    log1 = new Log(877,300,301,PI/2);
    log2 = new Log(820,90,230,PI/7);
    log3 = new Log(944,90,230,-PI/7);
    log4 = new Log(882,150,301,PI/2);
  

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground1.display();
   box2.display();
   pig1.display();
   log1.display();
   log2.display();
   log3.display();
   box3.display();
   box4.display();
   pig2.display();
   log4.display();
   bird1.display();
}