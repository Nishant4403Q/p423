class Drops{
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            friction :0.1
        }
    this.r = radius;
    this.body = Bodies.circle(x,y,radius,options);

    World.add(world,this.body)

 }

    display(){
        var pos =this.body.position;
        fill("blue")
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.r,this.r)

    }



} 