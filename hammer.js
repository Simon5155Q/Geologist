class Hammer{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
 
        push();
        translate(this.body.position.x = mouseX, this.body.position.y = mouseY);

        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}
