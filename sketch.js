let armOffset = 0;
let legOffset = 0;
let dancingUp = true;

function setup() {
    createCanvas(600, 600);
    background (220);
    noStroke();
    drawCreature(width/2, height/2, 100);
  }
  
  function drawCreature(x, y, size) {
    noStroke();
  
    // Body
    fill(150, 200, 255); //blue
    rectMode(CENTER);
    rect(x, y + size * 0.3, size * 0.6, size * 0.8, size * 0.3); // round rect body
  
    // Head
    fill(255, 230, 200); //head color
    ellipse(x, y, size * 0.7, size * 0.7); // head shape
  
  // Bangs for Hair
  fill(255, 130, 50); // ginger hair color
  
  let hairYOffset = size * 0.05;  // position
  
  // First set of bangs 
  triangle(x - size * 0.3, y - size * 0.35 + hairYOffset, 
           x, y - size * 0.5 + hairYOffset, 
           x + size * 0.3, y - size * 0.35 + hairYOffset);
  
  // Second set of bangs 
  triangle(x - size * 0.2, y - size * 0.3 + hairYOffset, 
           x, y - size * 0.4 + hairYOffset, 
           x + size * 0.2, y - size * 0.3 + hairYOffset); 
  
  // Third set of bangs
  triangle(x - size * 0.1, y - size * 0.25 + hairYOffset, 
           x, y - size * 0.35 + hairYOffset, 
           x + size * 0.1, y - size * 0.25 + hairYOffset); 
  
    // Eyes
    fill(0); // black
    ellipse(x - size * 0.15, y - size * 0.1, size * 0.15, size * 0.15); // Left eye
    ellipse(x + size * 0.15, y - size * 0.1, size * 0.15, size * 0.15); // Right eye
  
    //smile
    noFill();
    stroke(255, 100, 100); // Red for smile
    strokeWeight(4);
    arc(x, y + size * 0.15, size * 0.3, size * 0.2, 0, PI); //smile
  
    // Arms
    fill(150, 200, 255);
    stroke(150, 200, 255)
    ellipse(x - size * 0.5, y + size * 0.3 - armOffset, size * 0.2, size * 0.4); // Left arm
    ellipse(x + size * 0.5, y + size * 0.3 + armOffset, size * 0.2, size * 0.4); // Right arm
  
    //legs
    fill(150, 200, 255); // Same as body
    rect(x - size * 0.2, y + size * 0.7 + legOffset, size * 0.2, size * 0.3, size * 0.1); // Left leg
    rect(x + size * 0.2, y + size * 0.7 - legOffset, size * 0.2, size * 0.3, size * 0.1); // Right leg
  
    //top hat
    fill(0); // Black top hat
    stroke(0);
    rect(x, y - size * 0.5, size * 0.4, size * 0.1); // Hat brim
    rect(x, y - size * 0.7, size * 0.2, size * 0.2); // Hat top
  }
  
function mousePressed()
{
    background(220);

    if (dancingUp) {
        armOffset = 20;
        legOffset = -20;
    }
    else {
        armOffset = -20;
        legOffset = 20;
    }

    dancingUp = !dancingUp;

    drawCreature(width / 2, height / 2, 100);
}