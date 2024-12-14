let modules = [];

function setup() {
  createCanvas(400, 400);
  
  background(0);
  
  textStyle(BOLD);
  fill(255);
  textAlign(CENTER,CENTER);
  textSize(400);
  text("❀",width/2,height/2+60);
  
  let gap=5;
  
  
  for(let y=0; y<height; y+=gap){
    for(let x=0; x<width; x+=gap){
      let c = get(x,y);
      let b = brightness(c);
      
      if(b==100){
        modules.push( new Module( new p5.Vector(x,y) ) );
      }
    }
  }
}

function draw(){
  background(0);
  for(let i=0; i<modules.length; i+=1){
    modules[i].update();
    modules[i].display();
  }
}