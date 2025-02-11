/**
 * The Finale
 * Laura Slabbert
 * 
 * This final chapter of my variation jam forces a player to crash the train and car they controlled in variations 1 and 2 into one another using the WASD keys.
 * 
 */

"use strict";


//Distance between tracks
let trackDistance = 40;

//The text that appears in the top right
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
    },
    //Determines if the train has been hit or not
    alive: true,
}

//The car
let car = {
    //Starting position
    x: 490,
    y: 320,
    //Car visual
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
    },
    //Determines if the car has been hit or not
    alive: true,
}
//Image displayed when the car is hit
let hitCar = {
    image: undefined,
}
//Image displayed when the train is hit
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
    //Loads the hit car image
    hitCar.image = loadImage("assets/images/hit_car.png")
    //Loads the hit train image
    hitTrain.image = loadImage("assets/images/hit_train.png");
    //Loads the text to be displayed
    finaleText = loadJSON("assets/data/finale_text.json");
}



/**
 * Fills the background, displays the train and the car, calls their movement functions.
*/
function draw() {
    background("#ddeeff");
    //Draws the surrounding grass
    drawGrass();
    //Draws the road
    drawRoad();
    //Draws the train tracks
    drawTracks();
    //Draws the train
    drawTrain();
    //Draws the car
    drawCar();
    //Moves the car and the train
    moveCar();
    //Checks if the train and car have overlapped
    checkTrainCarOverlap();
    //Draws the text
    drawFinaleText();
}
//Draws the grass
function drawGrass() {
    push();
    fill(193, 225, 193);//green
    rect(0, 0, 600, 600);
    pop();
}
//Draws the road
function drawRoad() {
    push();
    fill("grey");
    rect(0, 275, 600, 100);
    pop();
}
//Draws the train tracks
function drawTracks() {

    // Set up the position the first horizontal line of the tracks
    let point1x = 250;
    let point1y = 0;
    let point2x = 350;
    let point2y = 0;

    //Draws the vertical lines of the tracks
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
    //Displays the train's image at its x and y
    image(train.image, train.x, train.y);
    pop();
}
//Moves the car and the train
function moveCar() {
    if (!car.alive) {
        return;
    }
    //Moves car right and train up
    else if (keyIsDown(car.keys.right) || keyIsDown(train.keys.up)) {
        car.x += 5;
        train.y -= 5
    }
    //Moves car left and train down
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
        //Draws the hit versions of the train and car
        car.image = hitCar.image;
        train.image = hitTrain.image;
        //Sets the "alive" condition of the train and car to "false" so that they can no longer move
        car.alive = false;
        train.alive = false;
    }
}
//Draws the text at the top right of the screen
function drawFinaleText() {
    const description = finaleText.description;
    push();
    textSize(20);
    fill("black");
    textAlign(CENTER, CENTER);
    text(description, 470, 100);
    pop();
}