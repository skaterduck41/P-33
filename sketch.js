var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];
var DivisionHeight=300;
var ground;
var score = 0;
var turn = 0;
var particleVar;
var gamestate = "PLAY";
//var gamestate = END;



function setup() {
  createCanvas(800, 800);
  engine = Engine.create(); 
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k,height-DivisionHeight/2, 10, DivisionHeight));
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
  Engine.update(engine);
  background("black");
  textSize(20);
  text("Score : "+score,20,30);
  ground.display(); 


   for (var i = 0; i < plinkos.length; i++) {     
     plinkos[i].display();     
   }
if(gamestate!="END"){ 
   if(frameCount%60===0){     
    particleVar= particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    }

 for (var j = 0; j < particles.length; j++) {  
    calcscore(particles[j]);
     //particles[j].display();     
   }
  }
  else{
    text("GAME OVER", 100,110);
    //text("Score: "+ score, 10,20);
  }
   for (var k = 0; k < divisions.length; k++) {     
     divisions[k].display();
   }  

  
}

/*function mousePressed(){

if (gamestate !== "END"){
 //score++;
 particleVar = new Particle(mouseX,10,10,10);
 calcscore(particleVar);
}

}*/

function calcscore(particleVar){
  if(particleVar != null){

    particleVar.display();

  if (particleVar.body.position.y >760){

    if(particleVar.body.position.x <300){
      score = score + 500;     
     
    }
    if((particleVar.body.position.x <300) && (particleVar.body.position.x <600)){
      score = score + 100;     
      
    }
    if((particleVar.body.position.x >600) && (particleVar.body.position.x <900)){
      score = score + 200;      
      
    }
    turn++;
    if(score>=10000){
      gamestate="END";
      text("GAME OVER", 100,110);
    }
    particleVar = null;
    
   // if(turn>5) {
    //  gamestate = "END";
   // text("GAME OVER", 100,100);
 // }

  }
  }
}
