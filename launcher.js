class launcher{
	constructor(bodyA,pointB)
	{
		var options={ 
		bodyA:bodyA,			 
		pointB:pointB, 
		stiffness:0.006, 
		length:1,
		isStatic:true,
		collisionFilter:{
			group:1,
			category:2,
			mask:1,
		},
        }
		this.bodyA=bodyA;
		this.pointB=pointB;
		this.launcher=Constraint.create(options);
		World.add(world,this.launcher);
	}

	attach(body){
		this.launcher.bodyA=body;
	}

	fly()
	{
		this.launcher.bodyA=null;
	}

	display()
	{
		if(this.launcher.bodyA)
		{
			var pointA=this.launcher.bodyA.position;
			var pointB=this.pointB;

			strokeWeight(3);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}