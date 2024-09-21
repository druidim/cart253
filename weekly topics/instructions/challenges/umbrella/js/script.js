/**
 * Umbrella Challenge
 * Laura Slabbert
 * 
 * Draws an umbrella
 */

"use strict";

/**
 * creates the canvas
*/
function setup() {
    createCanvas(640, 640)
}


/**
 * draws the umbrella
*/
function draw() {

    //draws the background
    push();
    background(225, 224, 217)
    pop();

    //draws the dome of the umbrella
    push();
    noStroke();
    fill(74, 178, 141)
    ellipse(320, 320, 500, 500);
    pop();

    //umbrella cut off rectangle
    push();
    noStroke();
    fill(225, 224, 217);
    rect(0, 320, 640, 320);
    pop();

    //circles that cut off umbrella to form arches

    //middle "arch"
    push();
    noStroke();
    fill(225, 224, 217);
    ellipse(320, 320, 166, 166);
    pop();

    //leftmost "arch"
    push();
    noStroke();
    fill(225, 224, 217);
    ellipse(155, 320, 166, 166);
    pop();

    push();
    noStroke();
    fill(225, 224, 217);
    ellipse(320, 320, 166, 166);
    pop();

    //rightmost "arch"
    push();
    noStroke();
    fill(225, 224, 217);
    ellipse(485, 320, 166, 166);
    pop();

    //umbrella stick
    push();
    strokeWeight(10);
    line(320, 240, 320, 500);
    pop();

    //umbrella handle
    push();
    noFill();
    stroke(255, 165, 0)
    strokeWeight(10);
    arc(360, 500, 80, 80, 0, PI)
    pop();

}