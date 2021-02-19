var canvas;
var music;
var p1,p2,p3,p4
var ball
var edge

function preload(){


    music = loadSound("music.mp3");
    
}


function setup(){
    canvas = createCanvas(400,400);

    //create 4 different surfaces


    p1=createSprite(150,385,90,15);
    p2=createSprite(50,385,90,15);
    p3=createSprite(250,385,90,15);
    p4=createSprite(350,385,90,15);
    ball=createSprite(200,200,15,15);
    ball.velocityY=4
    ball.velocityX=3
    
p1.shapeColor="red"
p2.shapeColor="green"
p3.shapeColor="blue"
p4.shapeColor="yellow"

    //create box sprite and give velocity

}

function draw() {
 background(0);
    //create edgeSprite
    
    edge=createEdgeSprites();
    



    
   
if (ball.isTouching(p1)){
    ball.shapeColor="red";
}
if (ball.isTouching(p2)){
    ball.shapeColor="green";
}    
if (ball.isTouching(p3)){
    ball.shapeColor="blue";
} 
if (ball.isTouching(p4)){
    ball.shapeColor="yellow";
} 
    //add condition to check if box touching surface and make it box
    ball.bounceOff(edge);
    ball.bounceOff(p1)
    ball.bounceOff(p2)
    ball.bounceOff(p3)
    ball.bounceOff(p4)
drawSprites();
    
}
