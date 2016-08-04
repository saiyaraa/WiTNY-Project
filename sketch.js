function setup() {
 createCanvas(600, 600);
}

function draw() {
  // Body
 strokeWeight(6);
 fill(0, 194, 39);
 rect(350, 220, 100, 130);
 fill('black');
 rect(350, 280, 100, 40);

 // Head
 fill(254, 224, 202);
 strokeWeight(5);
 stroke('black');
 ellipse(400, 150, 200, 180);

 // Eyes
 strokeWeight(3);
 fill('white');
 arc(350, 150, 90, 110, 0, PI + QUARTER_PI, CHORD);
 fill(0, 194, 39);
 ellipse(349, 168, 70, 70);
 fill('black');
 ellipse(349, 168, 45, 45);
 fill('white');
 ellipse(349, 168, 25, 25);
 fill('white');
 arc(450, 150, 90, 110, PI + 3 * QUARTER_PI, PI, CHORD);
 fill(0, 194, 39);
 ellipse(451, 168.7, 70, 70);
 fill('black');
 ellipse(451, 168.7, 45, 45);
 fill('white');
 ellipse(451, 168.7, 25, 25);

 //Feet
  stroke(1);
  strokeWeight(5);
  ellipse(370, 330, 50, 80);
  fill(1);
  arc(370, 340, 48, 70, PI * 2, PI, CHORD);
  fill(255);
  ellipse(370, 320, 45, 64);
  line(350, 320, 390, 320)

}
