const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ob1,ob2,ob3,ob4,ob5,ob6,ob7,
    ob8,ob9,ob10,ob11,ob12,ob13,ob14,
    ob15,ob16,ob17,ob18,ob19,ob20,ob21,
    ob22,ob23,ob24,ob25,ob26,ob27,ob28,
    ob29,ob30,ob31,ob32,ob33,ob34,ob35,
    ob36,ob37,ob38,ob39,ob40,ob41,ob42;

var floor;

var line1,line2,line3,line4,lin5,line6;

var b1,b2,b3,b4,b5,b6,b7;

var balls=[];

var score=0;

function setup() {
  var canvas=createCanvas(840,600);
 
  engine = Engine.create();
  world = engine.world;

  line1=createSprite(120,500,10,200);
  line1.shapeColor="red"

  line2=createSprite(240,500,10,200);
  line2.shapeColor="red"

  line3=createSprite(360,500,10,200);
  line3.shapeColor="red"

  line4=createSprite(480,500,10,200);
  line4.shapeColor="red"

  line5=createSprite(600,500,10,200);
  line5.shapeColor="red"

  line6=createSprite(720,500,10,200);
  line6.shapeColor="red"

}

function draw() {
  background("black");
   Engine.update(engine);
   
   creatingOb();
   displayingOb();
   
   creatingBalls();  

   floor=new Floor(390,598,1000,13);
   floor.display();

  drawSprites();
  
  textSize(30);
  fill("cyan");
  text("100",30,450);

  textSize(30);
  fill("cyan");
  text("500",160,450);

  textSize(30);
  fill("cyan");
  text("200",280,450);

  textSize(30);
  fill("cyan");
  text("200",400,450);

  textSize(30);
  fill("cyan");
  text("500",520,450);

  textSize(30);
  fill("cyan");
  text("200",640,450);

  textSize(30);
  fill("cyan");
  text("100",750,450);

}

function creatingBalls(){
  if(frameCount%60==0){
    b1=new Balls(random(10,780),10);
    b1.velocityY=-5;
    balls.push(b1);
    console.log(balls);
  }
 
  for(i=0;i<balls.length;i++){
    balls[i].display();
  }
}

function creatingOb(){
  ob1=new Ob(50,75);
  ob2=new Ob(150,75);
  ob3=new Ob(250,75);
  ob4=new Ob(350,75);
  ob5=new Ob(450,75);
  ob6=new Ob(550,75);
  ob7=new Ob(650,75);

  ob8=new Ob(50,150);
  ob9=new Ob(150,150);
  ob10=new Ob(250,150);
  ob11=new Ob(350,150);
  ob12=new Ob(450,150);
  ob13=new Ob(550,150);
  ob14=new Ob(650,150);

  ob15=new Ob(50,225);
  ob16=new Ob(150,225);
  ob17=new Ob(250,225);
  ob18=new Ob(350,225);
  ob19=new Ob(450,225);
  ob20=new Ob(550,225);
  ob21=new Ob(650,225);

  ob22=new Ob(50,300);
  ob23=new Ob(150,300);
  ob24=new Ob(250,300);
  ob25=new Ob(350,300);
  ob26=new Ob(450,300);
  ob27=new Ob(550,300);
  ob28=new Ob(650,300);

  ob29=new Ob(50,375);
  ob30=new Ob(150,375);
  ob31=new Ob(250,375);
  ob32=new Ob(350,375);
  ob33=new Ob(450,375);
  ob34=new Ob(550,375);
  ob35=new Ob(650,375);

  ob36=new Ob(750,75)
  ob37=new Ob(750,150);
  ob38=new Ob(750,225);
  ob39=new Ob(750,300);
  ob40=new Ob(750,375);
  ob41=new Ob(750,375);
  ob42=new Ob(750,375);

}

function displayingOb(){
  ob1.display();
  ob2.display();
  ob3.display();
  ob4.display();
  ob5.display();
  ob6.display();
  ob7.display();

  ob8.display();
  ob9.display();
  ob10.display();
  ob11.display();
  ob12.display();
  ob13.display();
  ob14.display();

  ob15.display();
  ob16.display();
  ob17.display();
  ob18.display();
  ob19.display();
  ob20.display();
  ob21.display();

  ob22.display();
  ob23.display();
  ob24.display();
  ob25.display();
  ob26.display();
  ob27.display();
  ob28.display();

  ob29.display();
  ob30.display();
  ob31.display();
  ob32.display();
  ob33.display();
  ob34.display();
  ob35.display();

  ob36.display();
  ob37.display();
  ob38.display();
  ob39.display();
  ob40.display();
  ob41.display();
  ob42.display();
}

