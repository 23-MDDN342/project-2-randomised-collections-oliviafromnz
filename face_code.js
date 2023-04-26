/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */


/*
 * tilt_value is in degrees
 * eye_value is an integer number of eyes: either 0, 1, 2, or 3
 * mouth_value is how open the mouth is and should generally range from 0.5 to 10
 */

// Phoebes base code ***

function TREELINES(treelines_value){
  let centerX = 0;

  if (treelines_value === 1 || treelines_value == 3) {
    // fill(bg_color3);
    // ellipse(centerX, Iy, eyeSize-1,eyeSize);
    strokeWeight(1);
    line (centerX, centerX+10, centerX, centerX+30);
  }

}
function FACEBASE_DETAIL (facedetail_value){
  let lower_val = 0;
  let higher_val = 5;
  push();
  angleMode(DEGREES);
  strokeWeight(0.1);
  let x, y;
  let points = 40;

  // first shape
  beginShape();
  noFill();
  for (let i = 0; i < points; i++) {
    let n = map(noise(i), lower_val+1, higher_val-2, -1, facedetail_value);
    let r = 10 + n;
    x = r * cos(i * (360 / points));
    y = r * sin(i * (360 / points));
    curveVertex(x, y);
  }
  endShape(CLOSE);

  beginShape();
  noFill();
  for (let i = 0; i < points; i++) {
    let n = map(noise(i), lower_val+1, higher_val-2, -1, facedetail_value);
    let r = 9.5 + n;
    x = r * cos(i * (360 / points));
    y = r * sin(i * (360 / points));
    curveVertex(x, y);
  }
  endShape(CLOSE);
  pop();
}

function FACE_BASE(facedetail_value) {
  let lower_val = 0;
  let higher_val = 5;
  push();
  angleMode(DEGREES);
  noFill();
  strokeWeight(0.3);
  let x, y;
  let points = 40;

  // first shape
  beginShape();
  for (let i = 0; i < points; i++) {
    let n = map(noise(i), lower_val, higher_val, -1, facedetail_value);
    let r = 9 + n;
    x = r * cos(i * (360 / points));
    y = r * sin(i * (360 / points));
    curveVertex(x, y);
  }
  endShape(CLOSE);
  pop();
}

function RIGHTEYE(righteye_value){
  let lower_val = 0;
  let higher_val = 5;
  push();
  angleMode(DEGREES);
  noFill();
  strokeWeight(0.3);
  let x, y;
  let points = 8;

  // first shape
  beginShape();
  fill(255,255,255);
  strokeWeight(0.1);
  for (let i = 0; i < points; i++) {
    let n = map(noise(i), lower_val+0.5, higher_val, -2, righteye_value);
    let r = 3 + n;
    x = r * cos(i * (360 / points));
    y = r * sin(i * (360 / points));
    curveVertex(x+3, y-3);
  }
  endShape(CLOSE);

  beginShape();
  fill(255,255,255);
  strokeWeight(0.08);
  for (let i = 0; i < points; i++) {
    let n = map(noise(i), lower_val+0.5, higher_val, -2, righteye_value);
    let r = 2.5 + n;
    x = r * cos(i * (360 / points));
    y = r * sin(i * (360 / points));
    curveVertex(x+3, y-3);
  }
  endShape(CLOSE);

  pop();
}

function LEFTEYE(lefteye_value){
  let lower_val = 0;
  let higher_val = 5;
  push();
  angleMode(DEGREES);
  noFill();
  strokeWeight(0.3);
  let x, y;
  let points = 10;

  // first shape
  beginShape();
  fill(255,255,255);
  strokeWeight(0.1);
  for (let i = 0; i < points; i++) {
    let n = map(noise(i), lower_val+0.5, higher_val, -2, lefteye_value);
    let r = 1 + n;
    x = r * cos(i * (360 / points));
    y = r * sin(i * (360 / points));
    curveVertex(x-3, y-2);
  }
  endShape(CLOSE);

  beginShape();
  fill(255,255,255);
  strokeWeight(0.08);
  for (let i = 0; i < points; i++) {
    let n = map(noise(i), lower_val+0.5, higher_val, -2, lefteye_value);
    let r = 1.5 + n;
    x = r * cos(i * (360 / points));
    y = r * sin(i * (360 / points));
    curveVertex(x-3, y-2);
  }
  endShape(CLOSE);

  pop();
}


function MOUTHMOVING(mouthh_value) {
  let lower_val = 0;
  let higher_val = 5;
  push();
  angleMode(DEGREES);
  noFill();
  strokeWeight(0.3);
  let x, y;
  let points = 16;

  // first shape
  beginShape();
  fill(255,255,255);
  strokeWeight(0.2);
  for (let i = 0; i < points; i++) {
    let n = map(noise(i), lower_val, higher_val-1, -2, mouthh_value);
    let r = 3 + n;
    x = r * cos(i * (360 / points));
    y = r * sin(i * (360 / points));
    curveVertex(x, y+3);
  }
  endShape(CLOSE);

  beginShape();
  fill(255,255,255);
  strokeWeight(0.1);
  for (let i = 0; i < points; i++) {
    let n = map(noise(i), lower_val, higher_val-1, -2, mouthh_value);
    let r = 2.5 + n;
    x = r * cos(i * (360 / points));
    y = r * sin(i * (360 / points));
    curveVertex(x, y+3);
  }
  endShape(CLOSE);

  pop();
}



function MYFACE(mouth_value, seceye_value, firsteye_value){
  const bg_color3 = [71, 222, 219];
  let headSize = 20
  let eyeSize = 5;
  let centerX = 0;
  let Iy = -4
  let distactBetweenEyes = 5
  let MouthDrop = 7
  
  // ellipse(0,0,15,20); //base
  // strokeWeight(0.1)
  // ellipse(0,0,14,19); //base
  // strokeWeight(0.05)
  // ellipse(0,0,13.5,18.5); //base

  noFill();
  strokeWeight(0.2)
  ellipse(centerX, Iy + MouthDrop, distactBetweenEyes, mouth_value);

  ellipse(centerX-4, Iy-6 + MouthDrop, distactBetweenEyes-2, seceye_value);
  strokeWeight(0.05)
  ellipse(centerX-4, Iy-6 + MouthDrop, distactBetweenEyes-4, seceye_value-1);
  strokeWeight(0.02)
  ellipse(centerX-4, Iy-6 + MouthDrop, distactBetweenEyes-3, seceye_value-1.1);

  strokeWeight(0.2)
  ellipse(centerX+4, Iy-6 + MouthDrop, distactBetweenEyes-2, firsteye_value);
  strokeWeight(0.05)
  ellipse(centerX+4, Iy-6 + MouthDrop, distactBetweenEyes-4, firsteye_value-1);
}

function orangeAlienFace(tilt_value, eye_value, mouth_value) {
  const bg_color3 = [71, 222, 219];
  const fg_color3 = [255, 93, 35];

  let headSize = 20
  let eyeSize = 5;
  let centerX = 0;
  let Iy = -4
  let distactBetweenEyes = 5
  let MouthDrop = 7
  
  // rotation in degrees
  angleMode(DEGREES);
  rotate(tilt_value);

 // head
  noStroke();
  fill(fg_color3);
  ellipse(centerX, 0, headSize, headSize);

  // 2 traditonal eyes
  if (eye_value === 1 || eye_value == 3) {
    fill(bg_color3);
    ellipse(centerX, Iy, eyeSize-1,eyeSize);
   
  }
// middle eye
  if (eye_value >= 2) {
    fill(bg_color3);
    ellipse(centerX - distactBetweenEyes, Iy, eyeSize);
    ellipse(centerX + distactBetweenEyes, Iy, eyeSize );
  }

  // mouth
  //fill(bg_color3);
  //ellipse(centerX, Iy + MouthDrop, distactBetweenEyes, mouth_value);
}


function simplePurpleFace() {
  fill(234, 122, 244);
  noStroke();
  // head
  ellipse(0, 0, 20);
  // eyes
  fill(255, 217, 114);
  ellipse(-3, -3, 3);
  ellipse( 3, -3, 3);
}

/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function blockyFace(thinness_value) {
  // head
  noStroke();
  fill(134, 19, 136);
  let head_width = map(thinness_value, 0, 100, 8, 20);
  rect(-head_width/2, -9, head_width, 18);
 

  // eyes
  fill(234, 122, 244);
  ellipse(-2, -4, 1);
  ellipse( 2, -4, 1);
}
