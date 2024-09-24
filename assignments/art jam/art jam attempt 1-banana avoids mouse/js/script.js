/**
 * Banana avoids mouse
 * Laura Slabbert
 * 
 * A banana does not wish to be eaten and avoids the mouse
 */

"use strict";

//let x = constrain(mouseX, 0, 640);
//let y = constrain(mouseY, 0, 640);

let banana = {
    red: 252,
    green: 244,
    blue: 3,
    x: 320,
    y: 320,
    w: 80,
    h: 80,
}
/**
 * Draws the canvas
*/
function setup() {
    createCanvas(640, 640)
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    //draws the background 
    background(204, 204, 255);


    //changes the banana to green
    banana.red -= 1;
    banana.red = constrain(banana.red, 0, 204);
    banana.green -= 1;
    banana.green = constrain(banana.green, 0, 235);
    banana.blue += 1;
    banana.blue = constrain(banana.blue, 0, 143);

    //draws the banana
    push();
    noFill();
    stroke(banana.red, banana.green, banana.blue)
    strokeWeight(20);
    arc(mouseX, mouseY, 80, 30, 0, PI);
    pop();
}
