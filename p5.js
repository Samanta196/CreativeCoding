let bubbles = []; 

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);

  for (let bubble of bubbles) {
    bubble.update();
    bubble.display();
  }
}

class Bubble {
  constructor(x, y, diameter, color) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.color = color;
    this.speedX = random(-2, 2); 
    this.speedY = random(-2, 2);
  }

  update() {
    // Move the bubble
    this.x += this.speedX;
    this.y += this.speedY;


    if (this.x + this.diameter / 2 >= width || this.x - this.diameter / 2 <= 0) {
      this.speedX *= -1;
    }
    if (this.y + this.diameter / 2 >= height || this.y - this.diameter / 2 <= 0) {
      this.speedY *= -1;
    }
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.diameter);
  }
}

function mousePressed() {
  let bubble = new Bubble(mouseX, mouseY, random(20, 50), color(random(255), random(255), random(255)));
  bubbles.push(bubble);
}
