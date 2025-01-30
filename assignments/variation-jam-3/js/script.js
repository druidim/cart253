/**
 * The Finale
 * Laura Slabbert
 * 
 * This final chapter of my variation jam forces a player to crash the train and car they controlled in other parts of the game into one another using the arrow keys.
 * 
 */

"use strict";


//Distance between tracks
let trackDistance = 40;

//
let finaleText = undefined;

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
    y: 320,
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
 * //Creates the canavas and sets the image mode
*/
function setup() {
    createCanvas(600, 600);
    imageMode(CENTER);
}

//Preloads the assets
function preload() {
    // Loads the car image
    car.image = loadImage("assets/images/car.png");
    //Loads the train image
    train.image = loadImage("assets/images/train.png");

    hitCar.image = loadImage("assets/images/hit_car.png")
    hitTrain.image = loadImage("assets/images/hit_train.png");

    finaleText = loadJSON("assets/data/finale_text.json");
}



/**
 * Fills the background, displays the train and the car, calls their movement functions.
*/
function draw() {
    background("#ddeeff");

    drawGrass();

    drawRoad();

    drawTracks();

    drawTrain();

    drawCar();
    moveCar();

    checkTrainCarOverlap();

    drawFinaleText();
}

function drawGrass() {
    push();
    fill(193, 225, 193);//green
    rect(0, 0, 600, 600);
    pop();
}

function drawRoad() {
    push();
    fill("grey");
    rect(0, 275, 600, 100);
    pop();
}

function drawTracks() {

    // Set up the position the first line
    let point1x = 250;
    let point1y = 0;
    let point2x = 350;
    let point2y = 0;

    push();
    strokeWeight(4);
    line(point1x + 10, point1y - 10, point1x + 10, height);
    line(point2x - 10, point2y - 10, point2x - 10, height);
    pop();

    // Keep checking if y is still less than the height...
    while (point2y <= height) {
        // If it is, draw the next rail
        line(point1x, point1y, point2x, point2y);
        // And increase y to move down
        point1y += trackDistance;
        point2y += trackDistance;
    }
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
    if (keyIsDown(car.keys.right) || keyIsDown(train.keys.up)) {
        car.x += 5;
        train.y -= 5
    }
    //Moves car left
    else if (keyIsDown(car.keys.left) || keyIsDown(train.keys.down)) {
        car.x -= 5;
        train.y += 5
    }
    //Constrains the car to the canvas
    car.x = constrain(car.x, 300, 530);
    //Constrains the train to canvas
    train.y = constrain(train.y, 60, 275);
}

//Draws the car
function drawCar() {
    push();
    //Displays the car image and positions the car at its x and y
    image(car.image, car.x, car.y);
    pop();
}

function checkTrainCarOverlap() {
    // Get distance from train to car
    const d = dist(car.x, car.y, train.x, train.y);
    // Check if it's an overlap
    const collision = (d < car.x / 10 + train.x / 10);
    if (collision) {
        //Draws the flattened version of the banana
        car.image = hitCar.image;
        train.image = hitTrain.image;
    }
}

function drawFinaleText() {
    const description = finaleText.description;
    push();
    textSize(20);
    fill("black");
    textAlign(CENTER, CENTER);
    text(description, 470, 100);
    pop();
}