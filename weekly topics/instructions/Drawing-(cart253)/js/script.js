/**
 * The Greatest Record of All Time
 * (Formerly "Drawing Module")
 * Laura Slabbert
 * 
 * Displays an amazing record 
 * (Formerly "Practicing and learning drawing functions in p5")
 */

"use strict";

/**
 * Creates a square canvas
*/
function setup() {
    createCanvas(640, 640);
}


/**
 * Displays the record
*/
function draw() {
    // Grey background
    background(150, 150, 150);

    // Displays the record
    push();
    fill(255, 0, 0);
    stroke(255);
    ellipse(320, 320, 480)
    pop();

    //Displays the white center of record
    push();
    fill("white");
    noStroke();
    ellipse(320, 320, 140, 140);
    pop();

    //Dispays record hole
    push();
    fill("#000000");
    noStroke();
    ellipse(320, 320, 20, 20);
    pop();
}