class Train{
  
  constructor() {
    this.r = 70;
    this.x= width;
    this.y= height - 80;
  }
  
  move() {
    this.x -= 5;
    
  }
  show() {
    image(tImg, this.x,this.y, this.r, this.r)
    
  }
}
