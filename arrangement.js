/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

// global variables for colors
const bg_color1 = [71, 222, 219];
function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(random(0, 1000));

  // rotation in degrees
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}



function mouseClicked() {
  changeRandomSeed();
}

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }


//ellipse(100,100,200);

  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);

  ///// AXE ////

// push()
// scale(0.4);
//   noFill();
//   strokeWeight(0.2);
//   stroke(0);

  // beginShape();
  // vertex(50, 200);
  // vertex(100, 150);
  // bezierVertex(120, 140, 130, 120, 150, 110);
  // bezierVertex(200, 90, 240, 110, 290, 120);
  // vertex(290, 140);
  // vertex(180, 220);
  // vertex(180, 280);
  // vertex(250, 300);
  // vertex(250, 350);
  // vertex(180, 330);
  // vertex(180, 450);
  // vertex(160, 450);
  // vertex(160, 330);
  // vertex(90, 350);
  // vertex(90, 300);
  // vertex(160, 280);
  // vertex(160, 220);
  // endShape(CLOSE);
  // // clear screen
  // noStroke();
  // pop()


  noFill();
  stroke(0);
  strokeWeight(2);
  
  function drawAxe(){
  // Draw handle
  rect(50, 100, 100, 10);
  
  // Draw blade
  beginShape();
  vertex(150, 100);
  bezierVertex(170, 80, 180, 90, 190, 80);
  bezierVertex(200, 90, 190, 100, 200, 110);
  bezierVertex(190, 120, 180, 110, 170, 120);
  vertex(150, 100);
  endShape();
  
  // Connect handle to blade
  beginShape();
  vertex(150, 100);
  bezierVertex(140, 100, 140, 110, 150, 110);
  endShape();
  }

  push();
  translate(50, 40);
  scale(1)
  drawAxe();
  pop();


  function drawGrass() {
    noFill();
    stroke(0);
    beginShape();
    curveVertex(90, 40);
    curveVertex(80, 70);
    curveVertex(70, 60);
    curveVertex(60, 80);
    curveVertex(50, 70);
    curveVertex(40, 80);
    curveVertex(30, 60);
    curveVertex(20, 70);
    curveVertex(30, 40);
    endShape();
  }
  
  // Call the function to draw the shape

  push();
  translate(50, 70);
  scale(0.8)
  drawGrass();
  pop();

  push();
  translate(300, 300);
  scale(0.5)
  drawGrass();
  pop();

  push();
  translate(600, 200);
  scale(0.5)
  drawGrass();
  pop();

  push();
  translate(500, 100);
  scale(0.5)
  drawGrass();
  pop();

  push();
  translate(500, 400);
  scale(0.7)
  drawGrass();
  pop();

  // set stroke weight and color
  // push()
  // strokeWeight(2);
  // fill(255);
  // ellipse(width, height, 80, 80);
  // ellipse(width+40, height, 70, 70);
  // ellipse(width-40, height-90, 60, 60);
  // ellipse(220, 100, 50, 50);
  // ellipse(260, 100, 70, 70);
  // pop()

  // draw a 7x4 grid of faces
  // let w = canvasWidth / 7;
  // let h = canvasHeight / 4;
  // for(let i=0; i<4; i++) {
  //   for(let j=0; j<7; j++) {
  //     let y = h/2 + h*i;
  //     let x = w/2 + w*j;
     
        // center face
        // let eye_value = int(random(2,4));
        // let tilt_value = random(-45, 45);
        // let mouth_value = random(3,4);
        // let is_cyclops = random(0, 100);

        let facedetail_value = random(0.5, 7);
        let treerootscale = random (0.7, 1);
        let righteye_value = random (0, 5);
        let lefteye_value = random (0, 3);
        let mouthh_value = random (0.5, 5);


        


        // if(is_cyclops < 10) {
        //   eye_value = 1;
        //   tilt_value = random(-5, 5);
        //   mouth_value = random(0, 1.7);
        // }

        push();
        translate(width/2, height/2);
        scale(8);
        strokeWeight(1);
        MYLOGFACE(getrandomFacedetail(), getrandomEyeRight(), getrandomEyeLeft(), getrandomMouthValue(), getTreeRootscale());
        pop();

        push();
        translate(width/8, height/2);
        scale(10);
        strokeWeight(1);
        MYLOGFACE(getrandomFacedetail(), getrandomEyeRight(), getrandomEyeLeft(), getrandomMouthValue(), getTreeRootscale());
        pop();

        push();
        translate(width/8*6, height/4);
        scale(9);
        strokeWeight(1);
        MYLOGFACE(getrandomFacedetail(), getrandomEyeRight(), getrandomEyeLeft(), getrandomMouthValue(),getTreeRootscale());
        pop();

        push();
        translate(width/8*3, height/3);
        scale(9);
        strokeWeight(1);
        MYLOGFACE(getrandomFacedetail(), getrandomEyeRight(), getrandomEyeLeft(), getrandomMouthValue(),getTreeRootscale());
        pop();
      
        push();
        translate(width/8*2, height/5*4);
        scale(9);
        strokeWeight(1);
        MYLOGFACE(getrandomFacedetail(), getrandomEyeRight(), getrandomEyeLeft(), getrandomMouthValue(),getTreeRootscale());
        pop();

              
        push();
        translate(width/4*3, height/5*4);
        scale(9);
        strokeWeight(1);
        MYLOGFACE(getrandomFacedetail(), getrandomEyeRight(), getrandomEyeLeft(), getrandomMouthValue(),getTreeRootscale());
        pop();
    }

    function getrandomFacedetail(){
     return(random(0.5, 7))
    }

    function getrandomEyeRight(){
      return(random (0, 5))
    }

    function getrandomEyeLeft(){
      return(random (0, 3))
    }

    function getrandomMouthValue(){
      return(random (0.5, 5))
    }

    function getTreeRootscale(){
      return (random (0.7, 1));
    }


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
