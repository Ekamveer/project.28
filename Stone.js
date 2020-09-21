class Stone {
    constructor(x,y,radius) {
      var options = {
          isStatic:false,
          restitution:0,
          friction:1,
          density:1.2
      }
      
      this.x=x;
      this.y=y;
      this.radius= radius;
      this.body =Bodies.circle(x, y, radius,options);
      this.image=loadImage("sprites/stone.png");
      World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
      push ();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      imageMode(CENTER);
      image(this.image, this.x,this.y,this.radius);
      fill("silver");
      ellipse(0,0,0,0);
      pop ();
    }
  };