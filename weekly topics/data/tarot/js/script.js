/**
 * Tarot
 * Pippin Barr
 * 
 * Some experiments with data representing a Tarot deck
 */

"use strict";

//Our tarot data
let tarot = undefined

//Our fortune
let fortune = "Click to show a fortune.";

/**
 * Load tarot data.
*/
function preload() {
    tarot = loadJSON("assets/data/tarot_interpretations.json")
}

/**
 * Create a canvas
 */
function setup() {
    createCanvas(800, 400);
}

/**
 * Display tarot.
*/
function draw() {
    background(0);




    //display the information
    push()
    textSize(16);
    fill("yellow");
    textAlign(CENTER, CENTER);
    text(fortune, width / 2, height / 2);
    pop()
}

function mousePressed() {
    //Choose a random card
    const card = random(tarot.tarot_interpretations);
    //Choose a random fortune
    fortune = random(card.fortune_telling);

}





//getting the data from the json:
//const fool = tarot.tarot_interpretations[0].meanings.shadow[0];
//this displays the line "Being gullible and naive"
/**
* another way to do this:
* const card = tarot.tarot_interpretations[0];
* const meaning= card.meanings;
* const shadow = meaning.shadow;
* const fool = shadows [0];
*/