class Ob{
    constructor(x,y){
      var options={
          isStatic:true
      }
      this.body=Bodies.circle(x,y,25,options);
      this.radius=25;
      World.add(world,this.body);
    }
    display(){
    var pos=this.body.position
    var angle=this.body.angle
    push();
    translate(pos.x,pos.y);
    fill("yellow");
    ellipseMode(CENTER);
    ellipse(0,0,25,25);
    pop();
    }
}