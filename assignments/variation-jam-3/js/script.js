/**
 * The Finale
 * Laura Slabbert
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let car = {
    x: 490,
    y: 300,
    image: undefined,
    velocity: {
        x: 5,
        y: 0,
    },

    keys: {
        left: 65, // A
        right: 68, // D
    }
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(600, 600);

}

function preload() {
    // Load the car image
    car.image = loadImage("assets/images/car.png");
    //flatBananaImage = loadImage("assets/images/flat-banana.png")LAURA REMOVE THIS MAYBE
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#ddeeff");
    drawCar();
    moveCar();
}

function moveCar() {
    //moves car up
    if (keyIsDown(car.keys.right)) {
        car.x += 5;
    }
    //Moves car down
    else if (keyIsDown(car.keys.left)) {
        car.x -= 5;
    }
    car.x = constrain(car.x, 0, 490);
}

function drawCar() {
    push();
    image(car.image, car.x, car.y);
    pop();
}