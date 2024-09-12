/**
 * The Blank Page
 * (formerly "Function Calls")
 * Laura Slabbert
 * 
 * An exploration of the existentail angst of a novelist
 * who must sit down at their pink (red) desk and confront
 * the abyss that is a blank page of paper.
 * 
 * The program is non-interactive to convey the inability to get started on the project.
 * (Formerly "Working on the function calls examples")
 */

"use strict";

/**
 * Creates a canvas for our masterpiece.
 */
function setup() {
    // Create a canvas at a standard resolution. (Formerly "Once at the beginning of the program")
    createCanvas(640, 480);
}


/**
 * Draws the writer's desktop and a blank piece of paper.
*/
function draw() {
    // Every frame
    // The RED desktop.
    background(255, 100, 100);
    // The piece of paper.
    rect(200, 80, 240, 320)
}