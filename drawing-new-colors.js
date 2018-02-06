function setup() { 
  createCanvas(400, 400);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'R') {
    fill(255, 70, 50);
  } else if (key == 'G') {
    fill(100, 255, 75);
  } else if (key == 'B') {
    fill(65, 65, 255); 
  } else if (key == 'T') {
    fill(40, 150, 90);
  } else if (key == 'F') {
    fill(69, 69, 69); 
  } else if (key == 'V') {
    fill(200, 100, 50);
  }
  
}
