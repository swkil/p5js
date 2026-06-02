function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(15, 45, 90); 

  let t = frameCount * 0.05;

  noStroke();
  
  let c1 = color(70, 160, 200);
  let c2 = color(150, 230, 255);

  let colorAmt = (sin(t * 0.5) + 1) / 2;
  
  fill(25, 80, 150);
  ellipse(100, 300 + sin(t) * 15, 500, 400);

  fill(40, 110, 180);
  ellipse(450, 400 + cos(t) * 15, 600, 350);

  fill(lerpColor(c1, c2, colorAmt)); 
  ellipse(300, 450 + sin(t * 0.8) * 15, 700, 250);

  fill(255, 120, 80, 200);
  rect(100, 150 + sin(t) * 5, 40, 150); 
  fill(255, 160, 100, 180);
  rect(120, 200 + cos(t) * 5, 30, 120);
  
  fill(255, 220, 100);
  triangle(400, 50, 350, 150, 450, 150);
  fill(255, 230, 150, 150);
  triangle(400, 160, 370, 240, 430, 240);
  fill(255, 240, 200, 100);
  triangle(400, 250, 385, 300, 415, 300);

  fill(255, 255, 255, 200);
  circle(250, 150 + sin(t) * 20, 40 + sin(t * 2) * 10);
  circle(300, 100 + cos(t) * 15, 20 + cos(t * 2) * 5);
  circle(220, 80 + sin(t * 1.5) * 20, 15 + sin(t) * 5);
  circle(500, 250 + cos(t * 1.2) * 20, 35 + cos(t * 2) * 10);
  circle(540, 200 + sin(t * 1.1) * 20, 15);
  circle(480, 320 + cos(t * 1.3) * 20, 25);

  stroke(255, 255, 255, 100);
  strokeWeight(3);
  noFill();
  ellipse(300, 200, 400 + sin(t) * 40, 150 + cos(t) * 20);
  ellipse(320, 220, 450 + cos(t) * 40, 180 + sin(t) * 20);

  noStroke();
  fill(0, 200, 150, 180);
  triangle(50, 350 + sin(t) * 10, 150, 280 + sin(t) * 10, 200, 380 + sin(t) * 10);
  fill(20, 220, 180, 150);
  rect(450, 80 + cos(t) * 10, 60, 60);
}