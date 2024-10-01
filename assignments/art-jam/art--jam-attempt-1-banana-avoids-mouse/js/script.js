/**
 * Banana avoids mouse/Banana Split
 * Laura Slabbert
 * 
 * A banana does not wish to be eaten and avoids the mouse
 */

"use strict";

const banana = {
    red: 255,
    green: 200,
    blue: 0,
    x: 320,
    y: 320,
    w: 80,
    h: 30,

}
/**
 * Draws the canvas
*/
function setup() {
    createCanvas(640, 640)
}


/**
 * draws the elements of the program
*/
function draw() {
    //draws the background 
    background(128, 143, 209);
    //changes the banana from yellow to green
    banana.red -= 0.25;
    banana.red = constrain(banana.red, 204, 255);
    banana.green += 0.25;
    banana.green = constrain(banana.green, 235, 200);
    banana.blue += 0.5;
    banana.blue = constrain(banana.blue, 204, 0);

    //draws the banana
    push();
    noFill();
    stroke(banana.red, banana.green, banana.blue)
    strokeWeight(15);
    arc(banana.x, banana.y, banana.w, banana.h, 20, PI);
    pop();
}
