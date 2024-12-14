class Module{
  // 생성자함수
  constructor(pos){
    this.pos = pos;
    this.size = 20;
    this.angle = random( radians(360) );
    this.defaultSize = 1;
  }
  
  update(){
    let mouse = new p5.Vector(mouseX,mouseY);
    let d = mouse.dist(this.pos);

    this.size = map(d,100,0,this.defaultSize,10);
    if(this.size < this.defaultSize){
      this.size = this.defaultSize;
    }
  }
  
  display(){
    push();
      translate(this.pos.x,this.pos.y);
      noStroke();
      fill(250);
      ellipse(0,0,this.size,this.size);
    pop();
    
  }
}