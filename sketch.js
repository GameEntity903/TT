var hc,mc,sc;
var scAngle,mcAngle,hcAngle;


function setup() {
  createCanvas(600,600);
  }

function draw() {
  background("gray");  
  hc = hour();
  mc = minute();
  sc = second();
  translate(300,300)
  angleMode(DEGREES)
  scAngle = map(sc,0,60,0,360);
  stroke(255,0,0);
  strokeWeight(5);
  arc(0,0,330,330,269,scAngle);
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,140,0);
  pop();
  mcAngle = map(mc,0,60,0,360);
  stroke(0,255,0);
  strokeWeight(5);
  arc(0,0,320,320,269,mcAngle);
  push();
  rotate(mcAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,120,0);
  pop();
  hcAngle = hcAngle%12
  hcAngle = map(hc,0,24,0,360);
  stroke(0,0,255);
  strokeWeight(5);
  arc(0,0,310,310,269,hcAngle);
  push();
  rotate(hcAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  drawSprites();
}