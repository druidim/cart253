/**
 * Creating variables
 * Laura Slabbert
 * 
 * experimenting with creating variables
 */

"use strict";


let cheeseRed = 255;
let cheeseGreen = 255;
let cheeseBlue = 0;

let holeShade = 0;
let holeSize = 120;
let holeX = 140;
let holeY = 175;
/**
 *Creates the canvas
*/
function setup() {
    createCanvas(480, 480);
}


/**
 * Draws a hole in a piece of cheese
*/
function draw() {
    //the cheese
    background(cheeseRed, cheeseGreen, cheeseBlue);

    //the hole
    push();
    noStroke();
    fill(holeShade);
    ellipse(140, 175, holeSize);
    pop();
}