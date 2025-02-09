/**
 * Banana Trolley Problem
 * 
 * Laura Slabbert
 * 
 * Decide which banana should live or die by choosing a track for the train to follow by pressing 1, 2, or 3.
 * 
 */

//Draws the canvas, sets up the banana parameters, and sets the image mode to "center".
function setup() {
    createCanvas(700, 700);

    greenBanana.image = bananaImage;
    yellowBanana.image = bananaImage;
    brownBanana.image = bananaImage;

    imageMode(CENTER);
}

let orders = undefined;

//Distance between tracks
let trackDistance = 40;

//X and Y points of the rail lines
let railX1 = 120;
let railX2 = 175;
let railY1 = 230;
let railY2 = 710;

//Distance between rail borders
let railDistance = 200;

let greenBanana = {
    x: 150,
    y: 500,
    fill: "#b0d481",
    image: undefined,
    alive: true
};

let yellowBanana = {
    x: 350,
    y: 500,
    fill: "#ffe369",
    image: undefined,
    alive: true
};

let brownBanana = {
    x: 550,
    y: 500,
    fill: "#735108",
    image: undefined,
    alive: true
};

let flatBananaImage = undefined;

let train = {
    x: 75,
    y: 100,
    image: undefined,
    speed: 3,
}

//Preloads the banana images
function preload() {
    // Load the banana image
    bananaImage = loadImage("assets/images/banana-yellow.png");
    //Load the flattened banana image
    flatBananaImage = loadImage("assets/images/flat-banana.png");
    //Load the train image
    train.image = loadImage("assets/images/train.png");
    //Load the orders
    orders = loadJSON("assets/data/train_orders.json");
}

function draw() {

    //Draws the left side train track
    leftTracks();

    //Draws the middle train track
    middleTracks();

    //Draws the right side train track
    rightTracks();

    //Draws the bananas
    drawBanana(greenBanana)//draws the green banana
    drawBanana(yellowBanana)//draws the yellow banana
    drawBanana(brownBanana)//draws the brown banana

    //Draws the train
    drawTrain();

    //Moves the train
    moveTrain();

    //Checks if a banana was hit by a train
    checkBananaTrainOverlap(greenBanana);
    checkBananaTrainOverlap(yellowBanana);
    checkBananaTrainOverlap(brownBanana);

    //Draws the orders given to the user
    drawOrders();

    //Draws the numbers of each track
    trackNumbers();

}

function keyPressed() {
    if (key === '1') {
        train.x = 150;
        train.y = 250;
    } else if (key === '2') {
        train.x = 350;
        train.y = 250
    } else if (key === '3') {
        train.x = 550;
        train.y = 250;
    }
}

function moveTrain() {
    if (train.x >= 150) {
        train.y += train.speed;

    }
}

function checkBananaTrainOverlap(banana) {
    // Check if the hitboxes (rectangles) overlap
    if (banana.x + banana.image.width / 2 > train.x - train.image.width / 2 &&
        banana.x - banana.image.width / 2 < train.x + train.image.width / 2 &&
        banana.y + banana.image.height / 2 > train.y - train.image.height / 2 &&
        banana.y - banana.image.height / 2 < train.y + train.image.height / 2) {
        // The rects overlap, so here we are
        banana.image = flatBananaImage;
    }
}


//Draws the left set of tracks.
function leftTracks() {
    background(235, 237, 235);
    // Set up the position the first line
    let leftPoint1x = 100;
    let leftPoint1y = 250;
    let leftPoint2x = 200
    let leftPoint2y = 250;

    push();
    strokeWeight(4);
    line(leftPoint1x + 10, leftPoint1y - 10, leftPoint1x + 10, height);
    line(leftPoint2x - 10, leftPoint2y - 10, leftPoint2x - 10, height);
    pop();

    // Keep checking if y is still less than the height...
    while (leftPoint2y <= height) {
        // If it is, draw the next track
        line(leftPoint1x, leftPoint1y, leftPoint2x, leftPoint2y);
        // And increase y to move down
        leftPoint1y += trackDistance;
        leftPoint2y += trackDistance;
    }
}

//Draws the middle set of tracks.
function middleTracks() {

    // Set up the position the first line
    let middlePoint1x = 300;
    let middlePoint1y = 250;
    let middlePoint2x = 400;
    let middlePoint2y = 250;

    push();
    strokeWeight(4);
    line(middlePoint1x + 10, middlePoint1y - 10, middlePoint1x + 10, height);
    line(middlePoint2x - 10, middlePoint2y - 10, middlePoint2x - 10, height);
    pop();

    // Keep checking if y is still less than the height...
    while (middlePoint2y <= height) {
        // If it is, draw the next rail
        line(middlePoint1x, middlePoint1y, middlePoint2x, middlePoint2y);
        // And increase y to move down
        middlePoint1y += trackDistance;
        middlePoint2y += trackDistance;
    }
}

//Draws the right set of tracks.
function rightTracks() {

    // Set up the position theright first line
    let rightPoint1x = 500;
    let rightPoint1y = 250;
    let rightPoint2x = 600;
    let rightPoint2y = 250;

    push();
    strokeWeight(4);
    line(rightPoint1x + 10, rightPoint1y - 10, rightPoint1x + 10, height);
    line(rightPoint2x - 10, rightPoint2y - 10, rightPoint2x - 10, height);
    pop();

    // Keep checking if y is still less than the height...
    while (rightPoint2y <= height) {
        // If it is, draw the next rail
        line(rightPoint1x, rightPoint1y, rightPoint2x, rightPoint2y);
        // And increase y to move down
        rightPoint1y += trackDistance;
        rightPoint2y += trackDistance;
    }
}


function drawBanana(banana) {

    //draws the green banana
    push();
    imageMode(CENTER);
    tint(banana.fill);
    image(banana.image, banana.x, banana.y);
    pop();
}

function drawTrain() {
    push();
    imageMode(CENTER);
    image(train.image, train.x, train.y);
    pop();
}

function drawOrders() {
    const description = orders.description;

    push();
    textSize(20);
    fill("black");
    textAlign(CENTER, CENTER);
    text(description, width / 2, height / 6);
    pop();

}

function trackNumbers() {
    push();
    textSize(50);
    fill("black");
    textAlign(CENTER, CENTER);
    text("1", 50, 500);
    pop();

    push();
    textSize(50);
    fill("black");
    textAlign(CENTER, CENTER);
    text("2", 250, 500);
    pop();

    push();
    textSize(50);
    fill("black");
    textAlign(CENTER, CENTER);
    text("3", 450, 500);
    pop();
}
