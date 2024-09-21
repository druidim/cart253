/**
 * Desert Scene
 * Laura Slabbert
 * 
 * This program draws a picture of a pyramid on some dunes.
 */

"use strict";

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(640, 640);
}


/**
 * Draws the pyramid and the sand dunes
*/
function draw() {
    //draws the blue sky
    background(137, 207, 240);

    //draws the lower sand dune
    push();
    noStroke();
    fill(255, 234, 0);
    ellipse(360, 800, 1000, 900);

    //draws the higher sand dune
    noStroke();
    fill(255, 234, 0);
    ellipse(0, 700, 1000, 900);
    pop();

    //draws the shaded side of the pyramid
    push();
    noStroke();
    fill(139, 128, 0);
    triangle(330, 420, 320, 280, 410, 390)
    pop();

    //draws the lit up side of the pyramid
    push();
    noStroke();
    fill(228, 208, 10);
    triangle(250, 400, 320, 280, 330, 420)
    pop();
}