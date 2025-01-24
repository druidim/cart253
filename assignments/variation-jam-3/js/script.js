/**
 * The Finale
 * Laura Slabbert
 * 
 * This final chapter of my variation jam forces a player to crash the train and car they controlled in other parts of the game into one another using the arrow keys.
 * 
 */

"use strict";

//The train
let train = {
    //Starting position
    x: 300,
    y: 60,
    //Train visual (will be preloaded)
    image: undefined,
    //The rate at which the train moves
    velocity: {
        x: 0,
        y: 5,
    },
    //The keys that control the train and their directions
    keys: {
        up: 83, // W
        down: 87, // S
    }
}

//The car
let car = {
    //Starting position
    x: 490,
    y: 300,
    //Car visual (will be preloaded)
    image: undefined,
    //The rate at which the car moves
    velocity: {
        x: 5,
        y: 0,
    },
    //The keys that control the car and their directions
    keys: {
        left: 65, // A
        right: 68, // D
    }
}

/**
 * //Creates the canavas
*/
function setup() {
    createCanvas(600, 600);

}

//Preloads the assets
function preload() {
    // Loads the car image
    car.image = loadImage("assets/images/car.png");
    //Loads the train image
    train.image = loadImage("assets/images/train.png");
}


/**
 * Fills the background, displays the train and the car, calls their movement functions.
*/
function draw() {
    background("#ddeeff");

    drawTrain();
    moveTrain();

    drawCar();
    moveCar();
}

function moveTrain() {
    //moves train up
    if (keyIsDown(train.keys.up)) {
        train.y += 5
    }
    //Moves train down
    else if (keyIsDown(train.keys.down)) {
        train.y -= 5;
    }
    //Constrains the train to canvas
    train.y = constrain(train.y, 60, 600);
}

//Draws the train
function drawTrain() {
    push();
    //Changes the location from which the image is drawn to its center
    imageMode(CENTER);
    //Displays the train's image at its x and y
    image(train.image, train.x, train.y);
    pop();
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
    //Constrains the car to the canvas
    car.x = constrain(car.x, 0, 490);
}

//Draws the car
function drawCar() {
    push();
    //Displays the car image and positions the car at its x and y
    image(car.image, car.x, car.y);
    pop();
}