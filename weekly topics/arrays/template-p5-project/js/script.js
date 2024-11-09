/**
 * Speech! Speech!
 * Laura Slabbert
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//the speech itself
const speech = ["Veni.", "Vidi.", "Vici.", "Sensi Malum."];

//Which sentence in the speech to display
let speechIndex = 0;


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(600, 100);
}


/**
 * Display the current line of speech
*/
function draw() {
    background(0);
    //get the current line of the speech
    let currentLine = speech[speechIndex];

    //Display the line
    push();
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(currentLine, width / 2, height / 2);
    pop();
}

function mousePressed() {
    //Next line
    speechIndex = speechIndex + 1;
    //Handles the end of the speech
    if (speechIndex >= speech.length) {
        //Start over
        speechIndex = 0;
    }
}