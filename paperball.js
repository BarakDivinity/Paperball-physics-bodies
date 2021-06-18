class Paperball{
    constructor(x,y){
       var options={
           isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.2
       }
        this.image=loadImage("Images/paperball.png");
        this.body=Bodies.circle(x,y,35,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        
    }
     display(){
         fill("white")
         //ellipse(this.body.position.x,this.body.position.y,40,40);
         image(this.image,this.body.position.x,this.body.position.y,40,40)
         
     } 
}
