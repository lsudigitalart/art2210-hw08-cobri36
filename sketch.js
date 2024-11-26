function setup() {
    createCanvas(600, 600);
    noLoop(); // Only draw on trigger (key press)
  }
  
  function drawCreature(x, y, size, headColor, bodyColor, eyeColor, numEyes) {
    // Draw body
    fill(bodyColor);
    ellipse(x, y + size * 0.5, size, size * 0.6);
  
    // Draw head
    fill(headColor);
    ellipse(x, y, size * 0.7, size * 0.7);
  
    // Draw eyes based on numEyes input
    fill(eyeColor);
    for (let i = 0; i < numEyes; i++) {
      let eyeX = x - (numEyes - 1) * 10 + i * 20;
      ellipse(eyeX, y - 10, size * 0.1, size * 0.1);
    }
  
    // Draw legs based on size input
    fill(bodyColor);
    for (let i = -1; i <= 1; i += 2) {
      ellipse(x + i * (size * 0.4), y + size * 0.8, size * 0.1, size * 0.3);
    }
  }
  
  // Trigger new creature generation
  function keyPressed() {
    if (key === ' ') {
      // Randomize background color
      background(random(255), random(255), random(255));
  
      // Randomize creature properties
      let x = random(width * 0.3, width * 0.7);
      let y = random(height * 0.3, height * 0.7);
      let size = random(50, 150);
      let headColor = color(random(255), random(255), random(255));
      let bodyColor = color(random(255), random(255), random(255));
      let eyeColor = color(random(255), random(255), random(255));
      let numEyes = int(random(1, 5)); // Choose 1-4 eyes
  
      // Draw a new creature with random properties
      drawCreature(x, y, size, headColor, bodyColor, eyeColor, numEyes);
    }
  }
  