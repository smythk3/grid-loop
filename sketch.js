var x = 20;

function setup() {
  createCanvas(800, 800);
  
  
}

function draw() {
  for(var x=20; x<=windowWidth; x+=30) {
    for(var y = 10; y <= windowHeight; y += 30) {
      fill(random(150, 40, 150), random(100, 150, 200), random(90, 50, 20));
      ellipse(x, y, random(100, 5));
    }
  }
}