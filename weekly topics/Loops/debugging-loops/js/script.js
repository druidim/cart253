/**
 * Close-up of a fly's legs
 * Pippin Barr
 * 
 * Draws a delightfully jiggly close-up of a fly's legs.
 * (Actually a bunch of circles drawn across the canvas
 * that use random numbers)
 * 
 * We should see three leg-like things extended from the
 * left to the right, curving downward, and jiggling
 */

"use strict";

/**
 * Create the canvas
*/
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws the fly leg
*/
function draw() {
    background(0);

    // How many legs to draw, we want three because
    // it's the legs on one side of the fly
    const numLegs = 3;
    //laura bug check, const num legs 0->3

    // Loop through the number of legs
    for (let i = 0; i < numLegs; i++) {
        //Laura bug check, commas changed to colons... 
        //are for-loops the right kind of loop?

        // Draw a leg each time, use i to calculate the
        // y position so it goes 100 pixels lower each time
        drawLeg(-50, 50 + i * 100, 50, 400);
        //Laura bug check: would this line of code actually draw what it needs to?
        //Would it draw all 3 that it needs to?
    }

}

/**
 * Draw a leg based
 * - startX is the starting position on x
 * - startY is the starting position on y
 * - startDiameter is the starting diameter (it will shrink down)
 * - length is how many pixels long the leg should be on x
 */
function drawLeg(startX, startY, startDiameter, length) {
    // Set our starting values
    let x = startX;
    let y = startY;
    let diameter = 50;
    //Laura bug check: leg length is not defined? 
    //Pippin video answer: length is defined om line 40

    // Loop until the x-position reaches beyond
    // the right side of the canvas (so that we draw the
    // entire leg across)
    while (x <= startX + length) {
        //Laura bug check: wile ->while
        //Pippin video anser (after "while" issue):
        // (x >= startX + length) at first, with the values input elsewhere,
        //was basically saying "-50 (x) was greater than or equal to 350 (500-250),
        // which is false" so we have to change it to (x *<*= startX + length)(less than!)

        // Draw a single circle
        // The circles all added together across the loop
        // will represent our leg, they will jiggle around
        // because of the random numbers. 
        // We could draw a stable
        // leg each time by using randomSeed() before the while
        // loop starts.
        push();
        stroke("white");
        strokeWeight(0.33);
        noFill();
        ellipse(x, y, diameter);
        pop();

        // Increase x to proceed across the canvas
        // We introduce some randomness for jiggle
        x += random(0.75, 1);
        // We increase y through multiplication to make it
        // curve, we use random here for more jiggling
        y *= random(1.001, 1.005);
        // Slowly increase the diameter for a slightly
        // more organic shape (the leg is wider on the
        // right side and thinner on the left)
        diameter *= 0.995;
    }
}