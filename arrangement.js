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

  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);

  // clear screen
  noStroke();

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
        let treerootscale = random (0.9, 1.6);
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
        MYLOGFACE(getrandomFacedetail(), getrandomEyeRight(), getrandomEyeLeft(), getrandomMouthValue(), getTreerootsize1())
        pop();

        push();
        translate(width/8, height/4);
        scale(10);
        strokeWeight(1);
        MYLOGFACE(getrandomFacedetail(), getrandomEyeRight(), getrandomEyeLeft(), getrandomMouthValue(), getTreerootsize1())
        pop();

        push();
        translate(width/8*6, height/4);
        scale(9);
        strokeWeight(1);
        MYLOGFACE(getrandomFacedetail(), getrandomEyeRight(), getrandomEyeLeft(), getrandomMouthValue(), getTreerootsize1())
        pop();

        push();
        translate(width/8*3, height/3);
        scale(9);
        strokeWeight(1);
        MYLOGFACE(getrandomFacedetail(), getrandomEyeRight(), getrandomEyeLeft(), getrandomMouthValue(), getTreerootsize1())
        pop();
      
        push();
        translate(width/8*2, height/3*2);
        scale(9);
        strokeWeight(1);
        MYLOGFACE(getrandomFacedetail(), getrandomEyeRight(), getrandomEyeLeft(), getrandomMouthValue(), getTreerootsize1())
        pop();

              
        push();
        translate(width/4*3, height/5*4);
        scale(9);
        strokeWeight(1);
        MYLOGFACE(getrandomFacedetail(), getrandomEyeRight(), getrandomEyeLeft(), getrandomMouthValue(), getTreerootsize1())
        pop();
    }

    function getTreerootsize1(){
      return(random (0.9, 1.6))
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


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
