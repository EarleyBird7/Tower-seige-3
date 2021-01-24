class Rope{
    constructor(bodyX,pointY){
        var options={
            bodyA:bodyX, 
            pointB:pointY,
            stiffness:0.2,
            length:30
        }
    this.rope=Constraint.create(options)
    this.pointB=pointY
    World.add(world,this.rope)
    }
    fly(){
        this.rope.bodyA = null;
    }
    attach(bodyA){
        this.rope.bodyA=bodyA
    }
display(){
    if(this.rope.bodyA){
    var pointA=this.rope.bodyA.position
    var pointB=this.pointB
    strokeWeight(5);
    line(pointA.x,pointA.y,pointB.x,pointB.y) 
}
}
}