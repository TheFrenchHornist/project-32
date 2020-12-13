class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':0.3
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.Visibility = 255;
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position
        //console.log(this.body.speed);
        if(this.body.speed < 6){
          var angle = this.body.angle;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0, 0, this.width, this.height);
          pop();
         }
         else{
          push();
          this.Visibility = this.Visibility - 5;
          tint(255,this.Visibility);
          pop();
          World.remove(world, this.body);
         }
      
       
      }

      score(){
        if (this.Visibility < 0 && this.Visibility > -105){
          score++;
        }
      }
}