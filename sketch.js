let armOffset = 0;
let legOffset = 0;
let dancingUp = true;

function setup() {
    createCanvas(600, 600);
    background (220);
    noStroke();
    drawCreature(width/2, heigh/2, 100);
  }
  
  function drawCreature(x, y, size) 
    {
    //Body
    fill(150, 200, 255); //blue
    ellipse(x, y + size * 0.4, size * 0.8, size);
  
    //Head
    fill(headColor);
    ellipse(x, y, size * 0.7, size * 0.7);
  
    //Eyes
    fill(0); //black
    ellipse(x - size * 0.15, y - size * 0.1, size * 0.1, size * 0.1); //left eye
    ellipse(x + size * 0.15, y - size * 0.1, size * 0.1, size * 0.1); //right eye

    //Arms
    fill(150, 200, 255);
    ellipse(x - size * 0.6, y + size * 0.2 + armOffset, size * 0.2, size * 0.4); //left arm
    ellipse(x + size * 0.6, y + size * 0.2 - armOffset, size * 0.2, size * 0.4); //right arm
    
    //Legs
    ellipse(x - size * 0.25, y + size * 0.8 + lefOffset, size * 0.2, size * 0.2); //left leg
    ellipse(x + size * 0.25, y + size * 0.8 - lefOffset, size * 0.2, size * 0.2); //left leg

    //Mouth
    fill(255, 100, 100); //red
    arc(x, y + size * 0.1, size * 0.4, size * 0.2, 0, PI); //smile
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