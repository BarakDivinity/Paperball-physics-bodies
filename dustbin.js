class Dustbin extends Baseclass{
    constructor(x,y,width,height){
       super(x,y,width,height)

        this.image=loadImage("Images/dustbingreen.png")
     }
     display(){
      image(this.image,680,400,250,200)
     }
    }