class Ground extends Baseclass{
    constructor(x,y){
      super(x,y,1000,20)
  } 
   display(){
       super.display()
       fill("green")
       rect(this.body.position.x,this.body.position.y,1000,20);
       
   }

}