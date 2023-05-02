



function MYLOGFACE (facedetail_value,righteye_value, lefteye_value, mouthh_value, treerootscale){
  let lower_val = 0;
  let higher_val = 5;
  let x, y;
 
  //// TREE ROOTS ////

  // tree root left
  push();
  beginShape();
  strokeWeight(0.1)
  fill(255,255,255);
  scale(treerootscale);
  vertex(3, 1);
  bezierVertex(5, -5, 1, -4.5, 1, -8);
  bezierVertex(1, -10, 0, -11, 0, -10);
  bezierVertex(0, -10, 1, -5, -2.3, -6);
  bezierVertex(-3, -6, -12, -9, -7, -3.5);
  bezierVertex(-4, 2, -10, 1, -2, 4);
  endShape();
  pop()

  // tree root right
  push();
  beginShape();
  strokeWeight(0.1)
  fill(255,255,255);
  rotate(170);
  scale(treerootscale*0.7);
  vertex(3, 1);
  bezierVertex(5, -5, 1, -4.5, 1, -8);
  bezierVertex(1, -10, 0, -11, 0, -10);
  bezierVertex(0, -10, 1, -5, -2.3, -6);
  bezierVertex(-3, -6, -12, -9, -7, -3.5);
  bezierVertex(-4, 2, -10, 1, -2, 4);
  endShape();
  pop()


  scale(0.6);

   //////////////// FACE BASE CIRC ////////////
   push();
   angleMode(DEGREES);
   fill(255,255,255);
   strokeWeight(0.3);
   let points2 = 40;
   stroke(51);
 
   // first shape
   beginShape();
   fill(255,255,255);
   for (let i = 0; i < points2; i++) {
     let n = map(noise(i), lower_val, higher_val, -1, facedetail_value);
     let r = 9 + n;
     x = r * cos(i * (360 / points2));
     y = r * sin(i * (360 / points2));
     curveVertex(x, y);
   }
   endShape(CLOSE);
   pop();

  ///// FACE DETAIL /////

  push();
  angleMode(DEGREES);
  strokeWeight(0.1);
  stroke(51);
  let points = 40;
  //fill(255,255,255);


     //first shape
     beginShape();
     fill(255,255,255);
     strokeWeight(0.1)
     stroke(51);
     for (let i = 0; i < points; i++) {
       let n = map(noise(i), lower_val+1, higher_val-2, -1, facedetail_value);
       let r = 10 + n;
       x = r * cos(i * (360 / points));
       y = r * sin(i * (360 / points));
       curveVertex(x, y);
     }
     endShape(CLOSE);

     
   //inner circle
   push()
   beginShape();
   strokeWeight(0.008);
   noFill();
   for (let i = 0; i < points; i++) {
     let n = map(noise(i), lower_val+1, higher_val-2, -1, facedetail_value);
     let r = 7 + n;
     x = r * cos(i * (360 / points));
     y = r * sin(i * (360 / points));
     curveVertex(x, y);
   }
   endShape(CLOSE);
   pop();

      // fifth line
  push()
  beginShape();
  strokeWeight(0.02);
  noFill();
  for (let i = 0; i < points; i++) {
    let n = map(noise(i), lower_val+1, higher_val-2, -1, facedetail_value);
    let r = 8 + n;
    x = r * cos(i * (360 / points));
    y = r * sin(i * (360 / points));
    curveVertex(x, y);
  }
  endShape(CLOSE);
  pop();

     // fourth line
     push()
     beginShape();
     strokeWeight(0.06);
     noFill();
     for (let i = 0; i < points; i++) {
       let n = map(noise(i), lower_val+1, higher_val-2, -1, facedetail_value);
       let r = 8.5 + n;
       x = r * cos(i * (360 / points));
       y = r * sin(i * (360 / points));
       curveVertex(x, y);
     }
     endShape(CLOSE);
     pop();

        // third line
  push()
  beginShape();
  noFill();
  strokeWeight(0.02);
  for (let i = 0; i < points; i++) {
    let n = map(noise(i), lower_val+1, higher_val-2, -1, facedetail_value);
    let r = 9 + n;
    x = r * cos(i * (360 / points));
    y = r * sin(i * (360 / points));
    curveVertex(x, y);
  }
  endShape(CLOSE);
  pop();

   //second shape
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
    
  ////////////// RIGHT EYE ///////////////////
  push();
  angleMode(DEGREES);
  noFill();
  strokeWeight(0.3);
  stroke(51);
  let points3 = 8;

  // first shape
  beginShape();
  fill(255,255,255);
  strokeWeight(0.1);
  for (let i = 0; i < points3; i++) {
    let n = map(noise(i), lower_val+0.5, higher_val, -2, righteye_value);
    let r = 3 + n;
    x = r * cos(i * (360 / points3));
    y = r * sin(i * (360 / points3));
    curveVertex(x+3, y-3);
  }
  endShape(CLOSE);

  beginShape();
  fill(255,255,255);
  strokeWeight(0.08);
  for (let i = 0; i < points3; i++) {
    let n = map(noise(i), lower_val+0.5, higher_val, -2, righteye_value);
    let r = 2.5 + n;
    x = r * cos(i * (360 / points3));
    y = r * sin(i * (360 / points3));
    curveVertex(x+3, y-3);
  }
  endShape(CLOSE);

  pop();

  //////////// LEFT EYE ///////////////
  push();
  angleMode(DEGREES);
  strokeWeight(0.3);
  stroke(51);

  let points4 = 10;

  // first shape
  beginShape();
  fill(255,255,255);
  strokeWeight(0.1);
  for (let i = 0; i < points4; i++) {
    let n = map(noise(i), lower_val+0.5, higher_val, -2, lefteye_value);
    let r = 1 + n;
    x = r * cos(i * (360 / points4));
    y = r * sin(i * (360 / points4));
    curveVertex(x-3, y-2);
  }
  endShape(CLOSE);

  beginShape();
  fill(255,255,255);
  strokeWeight(0.08);
  for (let i = 0; i < points4; i++) {
    let n = map(noise(i), lower_val+0.5, higher_val, -2, lefteye_value);
    let r = 1.5 + n;
    x = r * cos(i * (360 / points4));
    y = r * sin(i * (360 / points4));
    curveVertex(x-3, y-2);
  }
  endShape(CLOSE);

  pop();

  push();
  beginShape();
  fill(255,255,255);
  strokeWeight(0.03);
  for (let i = 0; i < points4; i++) {
    let n = map(noise(i), lower_val+0.5, higher_val, -2, lefteye_value);
    let r = 2 + n;
    x = r * cos(i * (360 / points4));
    y = r * sin(i * (360 / points4));
    curveVertex(x-3, y-2);
  }
  endShape(CLOSE);

  pop();

  ///////////////// MOUTH MOVING /////////////
  push();
  angleMode(DEGREES);
  fill(255,255,255);
  strokeWeight(0.3);
  stroke(51);

  let points5 = 16;

  // first shape
  beginShape();
  fill(255,255,255);
  strokeWeight(0.2);
  for (let i = 0; i < points5; i++) {
    let n = map(noise(i), lower_val, higher_val-1, -2, mouthh_value);
    let r = 3 + n;
    x = r * cos(i * (360 / points5));
    y = r * sin(i * (360 / points5));
    curveVertex(x, y+3);
  }
  endShape(CLOSE);

  beginShape();
  fill(255,255,255);
  strokeWeight(0.1);
  for (let i = 0; i < points5; i++) {
    let n = map(noise(i), lower_val, higher_val-1, -2, mouthh_value);
    let r = 2.5 + n;
    x = r * cos(i * (360 / points5));
    y = r * sin(i * (360 / points5));
    curveVertex(x, y+3);
  }
  endShape(CLOSE);

  pop();

  

}


// function TREELINES(treelines_value){
//   let centerX = 0;
// }

// function FACEBASE_DETAIL (facedetail_value){
//   let lower_val = 0;
//   let higher_val = 5;
//   push();
//   angleMode(DEGREES);
//   strokeWeight(0.1);
//   let x, y;
//   let points = 40;

//   //first shape
//   beginShape();
//   noFill();
//   for (let i = 0; i < points; i++) {
//     let n = map(noise(i), lower_val+1, higher_val-2, -1, facedetail_value);
//     let r = 10 + n;
//     x = r * cos(i * (360 / points));
//     y = r * sin(i * (360 / points));
//     curveVertex(x, y);
//   }
//   endShape(CLOSE);
// //second shape
//   beginShape();
//   noFill();
//   for (let i = 0; i < points; i++) {
//     let n = map(noise(i), lower_val+1, higher_val-2, -1, facedetail_value);
//     let r = 9.5 + n;
//     x = r * cos(i * (360 / points));
//     y = r * sin(i * (360 / points));
//     curveVertex(x, y);
//   }
//   endShape(CLOSE);
//   pop();

//   push()
//   beginShape();
//   noFill();
//   strokeWeight(0.02);
//   for (let i = 0; i < points; i++) {
//     let n = map(noise(i), lower_val+1, higher_val-2, -1, facedetail_value);
//     let r = 9 + n;
//     x = r * cos(i * (360 / points));
//     y = r * sin(i * (360 / points));
//     curveVertex(x, y);
//   }
//   endShape(CLOSE);
//   pop();

//   push()
//   beginShape();
//   strokeWeight(0.06);
//   noFill();
//   for (let i = 0; i < points; i++) {
//     let n = map(noise(i), lower_val+1, higher_val-2, -1, facedetail_value);
//     let r = 8.5 + n;
//     x = r * cos(i * (360 / points));
//     y = r * sin(i * (360 / points));
//     curveVertex(x, y);
//   }
//   endShape(CLOSE);
//   pop();

//   push()
//   beginShape();
//   strokeWeight(0.02);
//   noFill();
//   for (let i = 0; i < points; i++) {
//     let n = map(noise(i), lower_val+1, higher_val-2, -1, facedetail_value);
//     let r = 8 + n;
//     x = r * cos(i * (360 / points));
//     y = r * sin(i * (360 / points));
//     curveVertex(x, y);
//   }
//   endShape(CLOSE);
//   pop();
// //inner circle
//   push()
//   beginShape();
//   strokeWeight(0.008);
//   noFill();
//   for (let i = 0; i < points; i++) {
//     let n = map(noise(i), lower_val+1, higher_val-2, -1, facedetail_value);
//     let r = 7 + n;
//     x = r * cos(i * (360 / points));
//     y = r * sin(i * (360 / points));
//     curveVertex(x, y);
//   }
//   endShape(CLOSE);
//   pop();

// }

// function FACE_BASE(facedetail_value) {
//   let lower_val = 0;
//   let higher_val = 5;
//   push();
//   angleMode(DEGREES);
//   noFill();
//   strokeWeight(0.3);
//   let x, y;
//   let points = 40;

//   // first shape
//   beginShape();
//   for (let i = 0; i < points; i++) {
//     let n = map(noise(i), lower_val, higher_val, -1, facedetail_value);
//     let r = 9 + n;
//     x = r * cos(i * (360 / points));
//     y = r * sin(i * (360 / points));
//     curveVertex(x, y);
//   }
//   endShape(CLOSE);
//   pop();
// }

// function RIGHTEYE(righteye_value){
//   let lower_val = 0;
//   let higher_val = 5;
//   push();
//   angleMode(DEGREES);
//   noFill();
//   strokeWeight(0.3);
//   let x, y;
//   let points = 8;

//   // first shape
//   beginShape();
//   fill(255,255,255);
//   strokeWeight(0.1);
//   for (let i = 0; i < points; i++) {
//     let n = map(noise(i), lower_val+0.5, higher_val, -2, righteye_value);
//     let r = 3 + n;
//     x = r * cos(i * (360 / points));
//     y = r * sin(i * (360 / points));
//     curveVertex(x+3, y-3);
//   }
//   endShape(CLOSE);

//   beginShape();
//   fill(255,255,255);
//   strokeWeight(0.08);
//   for (let i = 0; i < points; i++) {
//     let n = map(noise(i), lower_val+0.5, higher_val, -2, righteye_value);
//     let r = 2.5 + n;
//     x = r * cos(i * (360 / points));
//     y = r * sin(i * (360 / points));
//     curveVertex(x+3, y-3);
//   }
//   endShape(CLOSE);

//   pop();

// }

// function LEFTEYE(lefteye_value){
//   let lower_val = 0;
//   let higher_val = 5;
//   push();
//   angleMode(DEGREES);
//   noFill();
//   strokeWeight(0.3);
//   let x, y;
//   let points = 10;

//   // first shape
//   beginShape();
//   fill(255,255,255);
//   strokeWeight(0.1);
//   for (let i = 0; i < points; i++) {
//     let n = map(noise(i), lower_val+0.5, higher_val, -2, lefteye_value);
//     let r = 1 + n;
//     x = r * cos(i * (360 / points));
//     y = r * sin(i * (360 / points));
//     curveVertex(x-3, y-2);
//   }
//   endShape(CLOSE);

//   beginShape();
//   fill(255,255,255);
//   strokeWeight(0.08);
//   for (let i = 0; i < points; i++) {
//     let n = map(noise(i), lower_val+0.5, higher_val, -2, lefteye_value);
//     let r = 1.5 + n;
//     x = r * cos(i * (360 / points));
//     y = r * sin(i * (360 / points));
//     curveVertex(x-3, y-2);
//   }
//   endShape(CLOSE);

//   pop();

//   push();
//   beginShape();
//   noFill();
//   strokeWeight(0.03);
//   for (let i = 0; i < points; i++) {
//     let n = map(noise(i), lower_val+0.5, higher_val, -2, lefteye_value);
//     let r = 2 + n;
//     x = r * cos(i * (360 / points));
//     y = r * sin(i * (360 / points));
//     curveVertex(x-3, y-2);
//   }
//   endShape(CLOSE);

//   pop();

  
// }


// function MOUTHMOVING(mouthh_value) {
//   let lower_val = 0;
//   let higher_val = 5;
//   push();
//   angleMode(DEGREES);
//   noFill();
//   strokeWeight(0.3);
//   let x, y;
//   let points = 16;

//   // first shape
//   beginShape();
//   fill(255,255,255);
//   strokeWeight(0.2);
//   for (let i = 0; i < points; i++) {
//     let n = map(noise(i), lower_val, higher_val-1, -2, mouthh_value);
//     let r = 3 + n;
//     x = r * cos(i * (360 / points));
//     y = r * sin(i * (360 / points));
//     curveVertex(x, y+3);
//   }
//   endShape(CLOSE);

//   beginShape();
//   fill(255,255,255);
//   strokeWeight(0.1);
//   for (let i = 0; i < points; i++) {
//     let n = map(noise(i), lower_val, higher_val-1, -2, mouthh_value);
//     let r = 2.5 + n;
//     x = r * cos(i * (360 / points));
//     y = r * sin(i * (360 / points));
//     curveVertex(x, y+3);
//   }
//   endShape(CLOSE);

//   pop();
// }



// function MYFACE(mouth_value, seceye_value, firsteye_value){
//   const bg_color3 = [71, 222, 219];
//   let headSize = 20
//   let eyeSize = 5;
//   let centerX = 0;
//   let Iy = -4
//   let distactBetweenEyes = 5
//   let MouthDrop = 7
  
//   // ellipse(0,0,15,20); //base
//   // strokeWeight(0.1)
//   // ellipse(0,0,14,19); //base
//   // strokeWeight(0.05)
//   // ellipse(0,0,13.5,18.5); //base

//   noFill();
//   strokeWeight(0.2)
//   ellipse(centerX, Iy + MouthDrop, distactBetweenEyes, mouth_value);

//   ellipse(centerX-4, Iy-6 + MouthDrop, distactBetweenEyes-2, seceye_value);
//   strokeWeight(0.05)
//   ellipse(centerX-4, Iy-6 + MouthDrop, distactBetweenEyes-4, seceye_value-1);
//   strokeWeight(0.02)
//   ellipse(centerX-4, Iy-6 + MouthDrop, distactBetweenEyes-3, seceye_value-1.1);

//   strokeWeight(0.2)
//   ellipse(centerX+4, Iy-6 + MouthDrop, distactBetweenEyes-2, firsteye_value);
//   strokeWeight(0.05)
//   ellipse(centerX+4, Iy-6 + MouthDrop, distactBetweenEyes-4, firsteye_value-1);
// }

// function orangeAlienFace(tilt_value, eye_value, mouth_value) {
//   const bg_color3 = [71, 222, 219];
//   const fg_color3 = [255, 93, 35];

//   let headSize = 20
//   let eyeSize = 5;
//   let centerX = 0;
//   let Iy = -4
//   let distactBetweenEyes = 5
//   let MouthDrop = 7
  
//   // rotation in degrees
//   angleMode(DEGREES);
//   rotate(tilt_value);

//  // head
//   noStroke();
//   fill(fg_color3);
//   ellipse(centerX, 0, headSize, headSize);

//   // 2 traditonal eyes
//   if (eye_value === 1 || eye_value == 3) {
//     fill(bg_color3);
//     ellipse(centerX, Iy, eyeSize-1,eyeSize);
   
//   }
// // middle eye
//   if (eye_value >= 2) {
//     fill(bg_color3);
//     ellipse(centerX - distactBetweenEyes, Iy, eyeSize);
//     ellipse(centerX + distactBetweenEyes, Iy, eyeSize );
//   }

//   // mouth
//   //fill(bg_color3);
//   //ellipse(centerX, Iy + MouthDrop, distactBetweenEyes, mouth_value);
// }


// function simplePurpleFace() {
//   fill(234, 122, 244);
//   noStroke();
//   // head
//   ellipse(0, 0, 20);
//   // eyes
//   fill(255, 217, 114);
//   ellipse(-3, -3, 3);
//   ellipse( 3, -3, 3);
// }

// /*
//  * thinness_value ranges from 0-100 and indicates how thin the face is
//  */
// function blockyFace(thinness_value) {
//   // head
//   noStroke();
//   fill(134, 19, 136);
//   let head_width = map(thinness_value, 0, 100, 8, 20);
//   rect(-head_width/2, -9, head_width, 18);
 

//   // eyes
//   fill(234, 122, 244);
//   ellipse(-2, -4, 1);
//   ellipse( 2, -4, 1);
// }
