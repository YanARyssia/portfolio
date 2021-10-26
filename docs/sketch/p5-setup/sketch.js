function setup() {
    let c = createCanvas(innerWidth, innerHeight);
    c.parent("sketch-parent")
  }
  
  function draw() {
    //background(220);
    
    fill(mouseY,50,mouseX);
    noStroke();
    rect(mouseX,mouseY,mouseX/2,mouseY);
    
  }

function windowResized() {
    resizeCanvas(innerWidth, innerHeight);
}