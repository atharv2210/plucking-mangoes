class tree {
    constructor(x, y, r) {
        var options = {
            restitution:0,
            friction:1.0,
            frictionStatic:10,
             isStatic:true,
         }
        this.width = width;
        this.height = height;
        this.r=r;
        //this.y=y;
    
        
        this.image=loadImage("tree.png");
        this.body = Bodies.circle(this.x, this.y, this.r, options);

        World.add(world, this.body);
     }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image,1000,350, 500, 500);

        pop();
    }
  };
  