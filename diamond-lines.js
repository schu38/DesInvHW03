stroke(255);
background(0);
strokeWeight(1);
start_x = 175;
start_y = 20;

for (i = 0; i < 55; i = i + 5) {

  end_x = start_x + (i + 3);
  actual_x = start_x - (i + 3);
  start_y = start_y + 5;

  line(actual_x, start_y, end_x, start_y);
}

for (g = i; g > -5; g = g - 5) {
  
 restart_x = start_x + (g + 3);
 shrinking_x = start_x - (g + 3);
 start_y = start_y + 5;
  
 line(restart_x, start_y, shrinking_x, start_y);
  
  
}
