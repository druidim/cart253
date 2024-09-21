/**
 * Smiley Face
 * laura Slabbert
 * 
 * This program draws a smiley face
 */

"use strict";

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(640, 640);
}


/**
 * Draws the smiley face
*/
function draw() {
    //draws the background
    push();
    background(231, 190, 243);
    pop();
    //draws the face (skin...?)
    push();
    noStroke();
    fill(255, 238, 139)
    ellipse(320, 320, 320, 320);
    pop();

    //draws the left eye
    push();
    noStroke();
    fill(0)
    ellipse(255, 270, 40, 60);
    pop();

    //draws the right eye
    push();
    noStroke();
    fill(0)
    ellipse(385, 270, 40, 60);
    pop();

    //draws the smile
    push();
    strokeWeight(10);
    noFill();
    arc(320, 300, 200, 250, 0, PI);
    pop();
}
