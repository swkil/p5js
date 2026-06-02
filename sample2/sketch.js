function setup() {
  createCanvas(600, 400);
  background(229, 244, 255);
}

function draw() {
  noStroke();
  
  let centerX = 300;
  let centerY = 200;
  
  fill(110, 70, 45);
  rect(centerX - 80, centerY - 40, 160, 220, 10);
  
  fill(255, 218, 199);
  rect(centerX - 25, centerY + 70, 50, 50);
  
  fill(255, 228, 214);
  ellipse(centerX, centerY, 170, 200);
  
  push();  
  fill(110, 70, 45);
  translate(centerX + 45, centerY - 57);
  rotate(PI / 4);
  arc(0, 0, 115, 50, PI, 0);
  pop();
  
  push();
  fill(110, 70, 45);
  translate(centerX - 45, centerY - 57);
  rotate(-PI / 4);
  arc(0, 0, 115, 50, PI, 0);
  pop();
  
  fill(110, 70, 45);
  triangle(centerX - 35, centerY - 90, centerX, centerY - 70, centerX - 85, centerY - 15);
  triangle(centerX + 35, centerY - 90, centerX, centerY - 70, centerX + 85, centerY - 15);
  stroke(110, 70, 45);
  triangle(centerX, centerY - 70, centerX - 35, centerY - 90, centerX + 35, centerY - 90);
  strokeWeight(3);
  noStroke();
  arc(centerX, centerY - 85, 80, 40, PI, 0);
  triangle(centerX - 40, centerY - 90, centerX + 20, centerY - 100, centerX + 25, centerY - 30);
  
  fill(255, 228, 214);
  arc(centerX - 80, centerY + 10, 40, 50, HALF_PI, PI + HALF_PI);
  arc(centerX + 80, centerY + 10, 40, 50, -HALF_PI, HALF_PI);
  
  fill(110, 70, 45);
  triangle(centerX + 75, centerY - 30, centerX + 85, centerY - 20, centerX + 75, centerY + 10);
  triangle(centerX - 75, centerY - 30, centerX - 85, centerY - 20, centerX - 75, centerY + 10);
  
  fill(60, 80, 120);
  rect(centerX - 100, centerY + 120, 200, 100, 50);
  
  fill(60, 80, 120);
  rect(centerX - 100, centerY + 160, 200, 100);
  
  fill(255, 255, 255);
  triangle(centerX, centerY + 160, centerX + 33, centerY + 121, centerX - 33, centerY + 121);
  
  fill(255, 218, 199);
  arc(centerX, centerY + 120, 65, 30, 0, PI);
  
  fill(255, 255, 255);
  ellipse(centerX - 40, centerY, 45, 20)
  ellipse(centerX + 40, centerY, 45, 20)
  
  stroke(64, 42, 28);
  strokeWeight(3);
  noFill();
  arc(centerX - 40, centerY - 20, 50, 10, PI + 0.2, TWO_PI - 0.2);
  arc(centerX + 40, centerY - 20, 50, 10, PI + 0.2, TWO_PI - 0.2);
  arc(centerX - 40, centerY, 50, 25, PI + 0.2, TWO_PI - 0.2);
  arc(centerX + 40, centerY, 50, 25, PI + 0.2, TWO_PI - 0.2);
  
  stroke(200, 100, 100);
  strokeWeight(3);
  noFill();
  arc(centerX, centerY + 55, 50, 20, 0.2, PI - 0.2);
  noStroke();
  
  fill(0);
  ellipse(centerX - 35, centerY - 2, 20, 20);
  ellipse(centerX + 35, centerY - 2, 20, 20);
  
  fill(255);
  ellipse(centerX - 35, centerY - 5, 5, 5);
  ellipse(centerX + 35, centerY - 5, 5, 5);
  
  fill(251, 200, 171);
  triangle(centerX + 10, centerY + 30, centerX, centerY + 10, centerX, centerY + 40);
  
  fill(194, 190, 189);
  ellipse(centerX - 85, centerY + 30, 10, 10);
  ellipse(centerX + 85, centerY + 30, 10, 10);
}