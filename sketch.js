var Engine = Matter.Engine,

World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies;
 
var ground;
var particles=[];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score=0;
var count=0;
var particle
var gameState="play"

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
   
  }
 

function draw() {
  background("black");
  fill("turquoise");
  textSize(30)
  Engine.update(engine);
   
   text("Score:  " + score, 30, 30)
   text("500 ",15,550)
   text("500 ",95,550)
   text("500 ",175,550)
   text("500 ",255,550)
   text("100 ",335,550)
   text("100 ",415,550)
   text("100 ",495,550)
   text("200 ",575,550)
   text("200 ",655,550)
   text("200 ",735,550)   
   
   if(gameState==="end"){
     textSize(45);
    text("Game Over",300,340);
  }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
  */
  /*for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
  */
  for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }


if (particle!=null) {
  particle.display();

  if (particle.body.position.y>760) {

    if (particle.body.position.x<300) {
      score=score+500;
      particle=null;

      if (count>=5) gameState="end";

      }
      else if(particle.body.position.x<600 && particle.body.position.x>301){
        score=score+100
        particle=null;

      if (count>=5) gameState="end";
      }
       else if(particle.body.position.x<900 && particle.body.position.x>601){
        score=score+200
        particle=null;

       if (count>=5) gameState="end";
       }
      
      } 
    }

  }

function mousePressed() 
{
  if(gameState!=="end")
  {
    count++;
    particle=new Particle(mouseX, 10,10, 10);
  }  
}
