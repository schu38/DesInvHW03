function SandPatch(x, y) {
  //midline for reference is at line(167, 20, 167, 320);
  colorMode(HSL);
  
  //rainbow, used for loops to make it easier to know what each is doing
  for (var r = 999; r < 1001; r = r + 1) {
    	strokeWeight(5);
    	stroke(0, 100, 50);
    	line(199, 140, 315, 150);
  }
  
  for (var o = 0; o < 2; o = o + 1) {
    stroke(35,100,50);
    line(202, 145, 314, 155);
  }
  
  for (var yell = 0; yell < 2; yell = yell + 1) {
    stroke(55,100,50);
    line(204, 150, 314, 160);
  }
  
  for (var green = 0; green < 2; green = green + 1) {
    stroke(85,100,50);
    line(207, 155, 314, 165);
  }
  
  
  for (var blu = 0; blu < 2; blu = blu + 1) {
    stroke(200,100,50);
    line(210, 160, 314, 170);
  }
  
  for (var purp = 0; purp < 2; purp = purp + 1) {
    stroke(275,100,50);
    line(213, 165, 314, 175);
  }
  
  stroke(255);
  strokeWeight(2.5);
  //left tri line
  line(167, 90, 87, 220);
  //right tri line
  line(167, 90, 244, 220);
  //bottom tri line
  line(87, 220, 244, 220);
  
  //prism light
  line(17, 190, 127, 155);
  
  //cone
  	for (var i = 127; i < 275; i = i + 5) {
      strokeWeight(0.5);
      eX = 170 + (i/8);
      eY = 120 + (i/7);
      line(127, 155, eX, eY);
    }
  
  //border
    noFill();
  stroke(255);
  strokeWeight(2);
  rect(x, y, 300, 300);
  
}
background(0);
SandPatch(17, 20)
