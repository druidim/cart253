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
        up: 87, // W
        down: 83, // S
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

let hitCar = {
    image: undefined,
}

let hitTrain = {
    image: undefined,
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

    hitCar.image = loadImage("assets/images/hit_car.png")
    hitTrain.image = loadImage("assets/images/hit_train.png");
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
    if (keyIsDown(train.keys.up || car.keys.right)) {
        train.y -= 5
    }
    //Moves train down
    else if (keyIsDown(train.keys.down || car.keys.left)) {
        train.y += 5;
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
    //moves car right
    if (keyIsDown(car.keys.right || train.keys.up)) {
        car.x += 5;
    }
    //Moves car left
    else if (keyIsDown(car.keys.left || train.keys.down)) {
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

function checkBananaTrainCarOverlap() {
    // Get distance from train to car
    const d = dist(car.x, car.y, train.x, train.y);
    // Check if it's an overlap
    const collision = (d < car.x / 2 + train.x / 2);
    if (collision) {
        console.log("exploding cars...")
        //Draws the flattened version of the banana
        car.image = hitCar.image;
        train.image = hitTrain.image;

    }
}