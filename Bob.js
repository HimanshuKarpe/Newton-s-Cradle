class Bob{
    constructor(x,y){
      var options={
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.image=loadImage("PinkBall.jpg")
      this.body=Bodies.circle(x,y,80,options);
      this.radius=80;
      
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(RADIUS);
      image(this.image, 0, 0, this.radius, this.radius);
      pop();
    }
}