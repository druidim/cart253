/**
 * Banana Squasher
 * Laura Slabbert
 * 
 * Run over bananas with your car. Or don't.
 */

"use strict";

// The bananas
let bananas = [];

// Time between bananas. This will get bigger.
const minimumBananaDelay = 0.5 * 1000;
const maximumBananaDelay = 2 * 1000;
let bananaDelay = maximumBananaDelay;

//The visual for the bananas
let bananaImage = undefined;
//The visual for the squished bananas
let flatBananaImage = undefined;

//Attributes of the car
let car = {
    //The car's starting position
    x: 500,
    y: 205,
    //The car's visual (will be called in the preload)
    image: undefined,
    //The speed at which the car moves
    velocity: {
        x: 0,
        y: 5,
    },
    //The keys that move the car up and down
    keys: {
        up: 83, // W
        down: 87, // S
    }
}


/**
 * Creates the canvas, sets the image mode, and sets the banana's timer
*/
function setup() {
    createCanvas(600, 600);
    imageMode(CENTER);
    setTimeout(addBanana, bananaDelay);
}
//Preloads the visuals
function preload() {
    // Load the banana image
    bananaImage = loadImage("assets/images/banana-yellow.png");
    //Load the squished banana image
    flatBananaImage = loadImage("assets/images/flat-banana.png")
    //Load the car image
    car.image = loadImage("assets/images/car.png")
}

/**
 * Adds a banana to the array, updates the timer to get faster
 */
function addBanana() {
    // Create and add a banana
    const banana = createBanana();
    bananas.push(banana);
    // Reduce the delay
    bananaDelay -= random(0, 100);
    // Constrain it (so they don't come TOO fast)
    bananaDelay = constrain(bananaDelay, minimumBananaDelay, maximumBananaDelay);
    // Set the new timeout
    setTimeout(addBanana, bananaDelay);
}

/**
 * Creates and returns a randomized banana that will start on the left of the
 * canvas and move right
 */
function createBanana() {
    const banana = {
        x: -100,
        y: random(200, 550),
        velocity: {
            x: 3,
            y: 0
        },
        fill: "orange",
    };
    return banana;
}

/**
 * Calls the functions to draw and move the bananas and the car, as well as calling the squishing function (overlap)
*/
function draw() {
    background("#ddeeff");
    //Draw the road
    drawRoad();
    // Move and draw the bananas
    for (let banana of bananas) {
        moveBanana(banana);
        drawBanana(banana);
    }
    //Draw the car
    drawCar();
    //Move the car
    moveCar();
    //Checks if the car hits a banana
    checkBananaCarOverlap();
}

/**
 * Moves a banana according to its velocity
 */
function moveBanana(banana) {
    banana.x += banana.velocity.x;
    banana.y += banana.velocity.y;
}

function moveCar() {
    //moves car up
    if (keyIsDown(car.keys.up)) {
        car.y += 5;
    }
    //Moves car down
    else if (keyIsDown(car.keys.down)) {
        car.y -= 5;
    }
    //Keeps the car from going offscreen
    car.y = constrain(car.y, 200, 550);
}

function checkBananaCarOverlap() {
    // Get distance from car to banana
    const d = dist(bananas.x, bananas.y, car.x, car.y);
    // Check if it's an overlap
    const collision = (d < bananas.y / 2 + car.y / 2);
    if (collision) {
        //If the car and banana overlap, draws the flattened version of the banana
        bananaImage = flatBananaImage;
    }
}
//Draws the road
function drawRoad() {
    push();
    noStroke();
    fill(100, 100, 100);//grey
    rect(0, 190, 600, 410);
    pop();
}

/**
 * Draws a banana
 */
function drawBanana(banana) {
    push();
    noStroke();
    fill(banana.fill);
    image(bananaImage, banana.x, banana.y)
    pop();
}
//Draws the car
function drawCar() {
    push();
    image(car.image, car.x, car.y);
    pop();
}
