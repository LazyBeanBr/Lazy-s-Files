function setup() {
    createCanvas(600, 400);
     background("purple");
  }
  
  function draw() {
   
  
    stroke("red");
    fill("orange");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 30, 30);
    }
  }
  