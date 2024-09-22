/**
 * Mr. Furious
 * Laura Slabbert
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
    // Position and size
    x: 200,
    y: 200,
    size: 100,
    // Colour
    fill: {
        r: 255,
        g: 225,
        b: 225
    }
};

//creates the sky
const sky = {
    fill: {
        r: 160,
        g: 180,
        b: 200
    }

}


/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {

    //make the sky get darker
    sky.fill.r -= 2;
    sky.fill.r = constrain(sky.fill.r, 0, 255);
    sky.fill.g -= 2;
    sky.fill.g = constrain(sky.fill.g, 0, 255);
    sky.fill.b -= 2;
    sky.fill.b = constrain(sky.fill.b, 0, 255);

    //the colour of the sky
    background(sky.fill.r, sky.fill.g, sky.fill.b);

    //Mr. Furious turns red
    mrFurious.fill.g -= 2;
    mrFurious.fill.g = constrain(mrFurious.fill.g, 0, 255);
    mrFurious.fill.b -= 2;
    mrFurious.fill.r = constrain(mrFurious.fill.r, 0, 255);

    //shaking
    const x = mrFurious.x + random(-5, 5);
    const y = mrFurious.y + random(-5, 5);


    // Draw Mr. Furious as a coloured circle
    push();
    noStroke();
    fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
    ellipse(x, y, mrFurious.size);
    pop();
}