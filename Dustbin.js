class Dustbin extends BaseClass{
    constructor(x,y,width,height) {
     
        super(x,y,width,height);
        this.image = loadImage("images/dustbin.png");
        
    }
    display() {

       fill("red");
       super.display();
    }
}
