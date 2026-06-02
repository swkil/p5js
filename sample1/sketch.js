function setup() {
  createCanvas(600, 400);
  background(15, 45, 90); 
}

function draw() {
  noStroke();
  
  fill(25, 80, 150);
  ellipse(100, 300, 500, 400);

  fill(40, 110, 180);
  ellipse(450, 400, 600, 350);

  fill(70, 160, 200);
  ellipse(300, 450, 700, 250);

  fill(255, 120, 80, 200);
  rect(100, 150, 40, 150); 

  fill(255, 160, 100, 180);
  rect(120, 200, 30, 120);
  
  fill(255, 220, 100);
  triangle(400, 50, 350, 150, 450, 150);

  fill(255, 230, 150, 150);
  triangle(400, 160, 370, 240, 430, 240);

  fill(255, 240, 200, 100);
  triangle(400, 250, 385, 300, 415, 300);

  fill(255, 255, 255, 200);
  circle(250, 150, 40);
  circle(300, 100, 20);
  circle(220, 80, 15);
  circle(500, 250, 35);
  circle(540, 200, 15);
  circle(480, 320, 25);

  stroke(255, 255, 255, 100);
  strokeWeight(3);
  noFill();
  ellipse(300, 200, 400, 150);
  ellipse(320, 220, 450, 180);
  
  noStroke();
  fill(0, 200, 150, 180);
  triangle(50, 350, 150, 280, 200, 380);

  fill(20, 220, 180, 150);
  rect(450, 80, 60, 60);
}