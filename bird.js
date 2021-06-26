class Bird extends Baseclass
{
    constructor(x,y)
    {
super(x,y,30,30);
        this.image=loadImage("sprites/bird.png");


    
    }
    display()
    {
      
        pos.x=mouseX;   
        pos.y=mouseY;
    super.display();
     

    }
}