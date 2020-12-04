class stone {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution:0,
          friction:1,
          density:1.5,
      }
      this.x= x;
      this.y=y;
      this.r=r;
      this.image=loadImage("stone.png"); 
      
      this.body = Bodies.circle(this.x,this.y,this.r,options);

      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      //rectMode(CENTER);
      //fill("darkgray");
      //rect(pos.x, pos.y, this.width, this.height);
      imageMode(CENTER);
      ellipseMode(RADIUS);
      image(this.image, 0, 0, this.r*2, this.r*2);
      pop();
    }
  };