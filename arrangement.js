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

  noFill();
  stroke(0);
  strokeWeight(1);
  
  function drawAxe(){
    rotate(-45);
  // Draw handle
  rect(50, 100, 100, 10);

  strokeWeight(0.3);
  rect(50, 100, 100, 6); // detail on handle

  // Connect handle to blade
  beginShape();
  vertex(150, 100);
  bezierVertex(140, 100, 140, 110, 150, 110);
  endShape();
  }

  function drawBlade(){
    push();
    beginShape();
    rotate(48)
    strokeWeight(0.8);
    vertex(150, 100);
    bezierVertex(170, 80, 180, 90, 190, 80);
    bezierVertex(200, 90, 190, 100, 200, 110);
    bezierVertex(190, 120, 180, 110, 170, 120);
    vertex(150, 100);
    endShape();
    pop();
  }

  push();
  translate(190, -160);
  scale(1)
  drawBlade();
  pop();

  push();
  translate(40, 80);
  scale(1)
  drawAxe();
  pop();

function drawLog(){

  //base trunk
  push();
  rotate(-45);
  strokeWeight(1);
  stroke(0);
  line(100, 200, 300, 200);
  line(100, 250, 300, 250);

  //end of trunk
  ellipse(300, 225, 5, 50);
  strokeWeight(0.3);
  ellipse(300, 225, 2, 45);

  //trunk detail
  strokeWeight(0.5);
  ellipse(220, 225, 43, 15);
  strokeWeight(0.3);
  ellipse(220, 226, 40, 10);
  strokeWeight(0.2);
  ellipse(220, 226, 38, 8);
  strokeWeight(0.2);
  ellipse(220, 226, 35, 3);

  // trunk lines
  strokeWeight(0.3);
  scale(0.98);
  line(100, 250, 300, 250);
  line(100, 252, 303, 252);
  line(80, 210, 200, 210);
  line(240, 213, 300, 213);
  pop();
}


function drawFlower(){

ellipse (240, 225, 10,10);
  beginShape();
  vertex(240, 215);
  bezierVertex(253, 205, 260, 223, 250, 225);
  bezierVertex(260, 234, 250, 245, 239, 235);
  bezierVertex(230, 247, 220, 230, 232, 226);
  bezierVertex(220, 218, 230, 205, 240, 215);
  endShape(CLOSE);

}

push();
translate(20, 20);
scale(0.5)
drawFlower();
pop();

push();
translate(40, 80);
scale(0.5)
drawFlower();
pop();



////// DRAW LOG //////
push();
  translate(0, 450);
  scale(1.5)
  drawLog();
  pop();


push();
translate(850, 900);
rotate(-80);
scale(1.8)
drawLog();
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

  strokeWeight(0.4);
  // draw grass
  push();
  translate(400, 0);
  scale(0.7)
  drawGrass();
  drawFlower();
  pop();

  push();
  translate(50, 70);
  scale(0.8)
  drawGrass();
  drawFlower();

  translate(200, 100); 
  drawGrass();
  pop();

  push();
  translate(300, 300);
  scale(0.5)
  drawGrass();
  drawFlower();

  translate(200, 100); 
  drawGrass();
  pop();

  push();
  translate(600, 210); // mid Y right
  scale(0.5)
  drawGrass();
  pop();

  push();
  translate(500, 100); 
  scale(0.5)
  drawFlower();
  drawGrass();

  translate(90, 100); 
  drawGrass();
  pop();

  push(); // bottom right
  translate(600, 400);
  scale(0.7)
  drawGrass();
  translate(90, 100); 
  drawGrass();
  drawFlower();
  pop();

  push(); // bottom right
  translate(700, 200);
  scale(0.7)
  drawGrass();

  translate(90, 100); 
  drawGrass();
  drawFlower();
  pop();

  push();
  translate(30, 20);
  scale(0.7)
  drawGrass();
  drawFlower();
  pop(); // top left grass sections

  push();
  translate(30, 400);
  scale(0.5)
  drawGrass();
  drawFlower();
  pop(); // left bottom grass

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
        rotate(45);
        strokeWeight(1);
        MYLOGFACE(getrandomFacedetail(), getrandomEyeRight(), getrandomEyeLeft(), getrandomMouthValue(), getTreeRootscale());
        pop();

        push();
        translate(width/10*9.4, height/8*1.5);
        scale(10);
        rotate(70);
        strokeWeight(1);
        MYLOGFACE(getrandomFacedetail(), getrandomEyeRight(), getrandomEyeLeft(), getrandomMouthValue(), getTreeRootscale());
        pop();

        push();
        translate(width/8, height/2);
        scale(10);
        strokeWeight(1);
        rotate(-65);
        MYLOGFACE(getrandomFacedetail(), getrandomEyeRight(), getrandomEyeLeft(), getrandomMouthValue(), getTreeRootscale());
        pop();

        push();
        translate(width/8*6, height/4);
        scale(9);
        rotate(-35);
        strokeWeight(1);
        MYLOGFACE(getrandomFacedetail(), getrandomEyeRight(), getrandomEyeLeft(), getrandomMouthValue(),getTreeRootscale());
        pop();

        push();
        translate(width/8*3, height/3);
        scale(9);
        rotate(15);
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
      return int(random(0, 10))
    }

    function getrandomMouthValue(){
      return(random (0, 5))
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
