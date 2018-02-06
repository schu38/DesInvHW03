
createCanvas(300,300);
background(0);
colorMode(HSL);
stroke(255);

for (a = 0; a < 37; a = a + 1) {
  intX = 5 + (a* 8);
  intY = 10;
  entX = 5 + (a* 8);
  entY = 290;
  line(intX, intY, entX, entY);
}

fill(0);
rect(25, 100, 100, 100);
for (i = 0; i < 20; i = i +1) {
 startX = 25;
 startY = 100 + (i*5);
 endX = 125;
 endY = 100 + (i*5);
 line(startX, startY, endX, endY);
}


fill(0);
ellipse(225,150,105,105);
fakeX = 225;
scY = 95

for (h = 0; h < 10; h = h + 1) {

  scX = fakeX + (20 + (3.55*h));
  scY = scY + 5;
  ecX = fakeX - (20 + (3.55*h));

  line(scX, scY, ecX, scY);
  
}


for (j = 10.5; j > 0; j = j - 1) {
  notX = 225;
  LcX = notX + (20 + (3.55 *j));
  scY = scY + 5;
  RcX = notX - (20 + (3.55*j));

  
  line(LcX, scY, RcX, scY);
}

