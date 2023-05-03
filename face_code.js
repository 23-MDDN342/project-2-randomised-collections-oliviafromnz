
function MYLOGFACE (facedetail_value,righteye_value, lefteye_value, mouthh_value, treerootscale){
  let lower_val = 0;
  let higher_val = 5;
  let x, y;
 
  /////////////// TREE ROOTS ///////////////

  // tree root left side
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

   // tree root left detail
   push();
   beginShape();
   strokeWeight(0.05)
   fill(255,255,255);
   scale(treerootscale-0.2);
   vertex(3, 1);
   bezierVertex(5, -5, 1, -4.5, 1, -7);
   bezierVertex(1, -9, 1, -6, 1, -9);
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
  angleMode(DEGREES);

   /////////////////// FACE BASE CIRC ///////////////////////////
   push();
   fill(255,255,255); // fill white
   strokeWeight(0.3);
   let points2 = 40;
   stroke(51);
 
   //*** Pheobes Code for circs */

   // outer shape
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


  //////////////////// FACE DETAIL ////////////////////
  push();
  strokeWeight(0.1);
  stroke(51);
  let points = 40;

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

     
   //most inner circle
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

   // third shape
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
  noFill();
  strokeWeight(0.3);
  stroke(51);
  let points3 = 8;

  // outer thin shape
    beginShape();
    fill(255,255,255);
    strokeWeight(0.02); // small detail line weight
    for (let i = 0; i < points3; i++) {
      let n = map(noise(i), lower_val+0.5, higher_val, -2, righteye_value);
      let r = 3.4 + n;
      x = r * cos(i * (360 / points3));
      y = r * sin(i * (360 / points3));
      curveVertex(x+2, y-2.5);
    }
    endShape(CLOSE);
  
  // main outline (thickest)
  beginShape();
  fill(255,255,255);
  strokeWeight(0.1);
  for (let i = 0; i < points3; i++) {
    let n = map(noise(i), lower_val+0.5, higher_val, -2, righteye_value);
    let r = 3 + n;
    x = r * cos(i * (360 / points3));
    y = r * sin(i * (360 / points3));
    curveVertex(x+2, y-2.5);
  }
  endShape(CLOSE);

  // second outline (2nd thickest)
  beginShape();
  fill(255,255,255);
  strokeWeight(0.08);
  for (let i = 0; i < points3; i++) {
    let n = map(noise(i), lower_val+0.5, higher_val, -2, righteye_value);
    let r = 2.5 + n;
    x = r * cos(i * (360 / points3));
    y = r * sin(i * (360 / points3));
    curveVertex(x+2, y-2.5);
  }
  endShape(CLOSE);

  pop();

  //////////////////// LEFT EYE ///////////////////////
  push();
  strokeWeight(0.3);
  stroke(51);

  let points4 = 10;

  // thinnest outer shape
  beginShape();
  fill(255,255,255);
  strokeWeight(0.04);
  for (let i = 0; i < points4; i++) {
    let n = map(noise(i), lower_val+0.5, higher_val, -2, lefteye_value);
    let r = 3.5 + n;
    x = r * cos(i * (360 / points4));
    y = r * sin(i * (360 / points4));
    curveVertex(x-1.5, y-1);
  }
  endShape(CLOSE);

  // main eye shape (thickest)
  beginShape();
  fill(255,255,255);
  strokeWeight(0.1);
  for (let i = 0; i < points4; i++) {
    let n = map(noise(i), lower_val, higher_val, -2, lefteye_value);
    let r = 2.5 + n;
    x = r * cos(i * (360 / points4));
    y = r * sin(i * (360 / points4));
    curveVertex(x-1.5, y-1);
  }
  endShape(CLOSE);

  // second thinnest line shape
  beginShape();
  fill(255,255,255);
  strokeWeight(0.08);
  for (let i = 0; i < points4; i++) {
    let n = map(noise(i), lower_val+0.5, higher_val, -2, lefteye_value);
    let r = 2.8 + n;
    x = r * cos(i * (360 / points4));
    y = r * sin(i * (360 / points4));
    curveVertex(x-1.5, y-1);
  }
  endShape(CLOSE);

  pop();
  push();
  beginShape();
  fill(255,255,255);
  strokeWeight(0.03);
  for (let i = 0; i < points4; i++) {
    let n = map(noise(i), lower_val+0.5, higher_val, -2, lefteye_value);
    let r = 3 + n;
    x = r * cos(i * (360 / points4));
    y = r * sin(i * (360 / points4));
    curveVertex(x-1.5, y-1);
  }
  endShape(CLOSE);

  pop();

  ///////////////// MOUTH MOVING /////////////
  push();
  fill(255,255,255);
  strokeWeight(0.3);
  stroke(51);

  let points5 = 16;

 // outer thin detail
 beginShape();
 fill(255,255,255);
 strokeWeight(0.02);
 for (let i = 0; i < points5; i++) {
   let n = map(noise(i), lower_val, higher_val-1, -2, mouthh_value);
   let r = 3.2 + n;
   x = r * cos(i * (360 / points5));
   y = r * sin(i * (360 / points5));
   curveVertex(x, y+3);
 }
 endShape(CLOSE);

  // main shape outline
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

   // thinner shape outline
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

