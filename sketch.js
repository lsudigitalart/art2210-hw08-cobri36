let generateCreature = false;
let creatureW = 0;
let creatureH = 0;
let creatureM = 50;


function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(220);
  translate(width/2, height/2);

  if(generateCreature){
    creatureBuilder(creatureW, creatureH, creatureM);
  }

}

function creatureBuilder(creatureWidth, creatureHeight, creatureMouth) {
  
  // BODY
  fill(255)
  ellipse(0, 0, creatureWidth, creatureHeight);

  // EYES
  fill(0)
  circle(-creatureWidth/8, -creatureHeight/4, 20)
  circle(creatureWidth/8, -creatureHeight/4, 20)

  // MOUTH
  circle(0, creatureHeight/4, creatureMouth);

}

function mousePressed() {
  generateCreature = true;
  
  if(mouseX > width/2) {
    creatureM = random(25, 50);

  }
  if(mouseX < width/2) {
    creatureM = random(0, 25);
  }

  creatureW = 250

  if(mouseY < height/2) {
    creatureH = random(250, 500)
  }

  if(mouseY > height/2) {
    creatureH = random(50, 250)
  }

}