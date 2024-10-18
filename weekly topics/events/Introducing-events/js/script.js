/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


function setup() {
    createCanvas(400, 400);
    background(0);
}



function draw() {

}

function mousePressed() {
    push();
    noStroke();
    fill(255, 255, 0);
    ellipse(mouseX, mouseY, 50);
    pop();
}