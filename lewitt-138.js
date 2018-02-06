createCanvas(300,300);
noFill();


for (i = 30; i < 450; i = i + 30) {

ellipse(150, 150, i);
ellipse(150, 370, i);
ellipse(150, -70, i);
ellipse(370, 150, i);  
ellipse(-70, 150, i);
}
