
stroke(255);
background(0);
strokeWeight(1);
start_x = 10;
start_y = 10;

for (i = 0; i < 300; i = i + 10) {
  start_x = i + 15;
  end_y = start_y + i;
  
  
  line(start_x, start_y, start_x, end_y);
}
