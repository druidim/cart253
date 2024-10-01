/**
 * Banana avoids mouse/Banana Split
 * Laura Slabbert
 * 
 * A banana does not wish to be eaten and avoids the mouse
 */

"use strict";

const banana = {
    r: 255,
    g: 200,
    b: 0,
    x: 320,
    y: 320,
    w: 80,
    h: 30,

}
const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 75,
    r: 201,
    g: 52,
    b: 187,
    size: 200,
};


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
    banana.r -= 0.25;
    banana.r = constrain(banana.r, 204, 255);
    banana.g += 0.25;
    banana.g = constrain(banana.g, 235, 200);
    banana.b += 0.5;
    banana.b = constrain(banana.b, 204, 0);

    //draws the banana
    push();
    noFill();
    stroke(banana.r, banana.g, banana.b)
    strokeWeight(15);
    arc(banana.x, banana.y, banana.w, banana.h, 20, PI);
    pop();


}

