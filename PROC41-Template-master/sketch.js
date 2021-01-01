

const Engine =Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var raindrops=[];
var maxDrops=100;
var batmanImg;
var batman;
var thunder, thunder2;
var thunderImg;
function preload(){
    thunderImg = loadImage("thunder.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;
    var cansvas=createCanvas(800,600);

    batman = new Umbrella(200,420)


}

function draw(){
    background(20,16,16); 
    Engine.update(engine);

    if (frameCount%10===0){
            raindrops.push(new Drops(random(0,800),0,5));
    } 

    if (frameCount%100===0){
        thunder= createSprite(random(100,600),100,10,20);
        thunder.scale=0.3;
        thunder.addImage(thunderImg);
        thunder.lifetime=10;
    }

    for ( var i =0; i<raindrops.length; i++ ){
        raindrops[i].display();
    }
    batman.display();
    drawSprites();
}