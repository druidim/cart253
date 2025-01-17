function setup() {
    createCanvas(700, 700);
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

let banana = {
    // Position of the bananas
    greenX: 150,
    greenY: 500,

    yellowX: 350,
    yellowY: 500,

    brownX: 550,
    brownY: 500,

    alive: true,
    fearLevel: 0,
    fearThreshold: 500,
    fearDistance: 200,
    image: undefined,

    fill: "#ffe369", // Starts out  yellow
    fills: {
        young: "#b0d481", // green
        middleAged: "#ffe369", // yellow
        old: "#735108", // brown
    }
}

let flatBanana = {
    image: undefined,

}

let train = {
    x: 75,
    y: 100,
    image: undefined,
    speed: 3,
}

//Preloads the banana images
function preload() {
    // Load the banana image
    banana.image = loadImage("assets/images/banana-yellow.png");
    //Load the flattened banana image
    flatBanana.image = loadImage("assets/images/flat-banana.png");
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

    //Draws the borders of the rails
    rails();

    //Draws the bananas
    drawBanana();

    //Draws the train
    drawTrain();

    //Moves the train
    moveTrain();

    //Checks if a banana was hit by a train
    checkBananaTrainOverlap();

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

function checkBananaTrainOverlap() {
    // Get distance from train to banana
    const d = dist(banana.greenX, banana.greenY, train.x, train.y);
    // Check if it's an overlap
    const collision = (d < banana.greenX / 6.5 + train.x / 6.5);
    if (collision) {
        //Draws the flattened version of the banana
        banana.image = flatBanana.image;
    }
}

//Draws the left set of rails.
function leftTracks() {
    background(235, 237, 235);
    // Set up the position the first line
    let leftPoint1x = 100;
    let leftPoint1y = 250;
    let leftPoint2x = 200
    let leftPoint2y = 250;

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
    // Keep checking if y is still less than the height...
    while (middlePoint2y <= height) {
        // If it is, draw the next rail
        line(middlePoint1x, middlePoint1y, middlePoint2x, middlePoint2y);
        // And increase y to move down
        middlePoint1y += trackDistance;
        middlePoint2y += trackDistance;
    }
}

//Draws the right set of rails.
function rightTracks() {

    // Set up the position theright first line
    let rightPoint1x = 500;
    let rightPoint1y = 250;
    let rightPoint2x = 600;
    let rightPoint2y = 250;
    // Keep checking if y is still less than the height...
    while (rightPoint2y <= height) {
        // If it is, draw the next rail
        line(rightPoint1x, rightPoint1y, rightPoint2x, rightPoint2y);
        // And increase y to move down
        rightPoint1y += trackDistance;
        rightPoint2y += trackDistance;
    }
}

//draws the vertical lines of the rail borders
function rails() {
    // Keep checking if x is still less than the width...
    while (railX1 && railX2 <= width) {
        // If it is, draw the next rail border
        line(railX1, railY2, railX2, railY2);
        // And increase x to move across
        railX1 += railDistance;
        railX2 += railDistance;
    }
}

function drawBanana() {

    //draws the green banana
    push();
    imageMode(CENTER);
    tint(banana.fills.young);
    image(banana.image, banana.greenX, banana.greenY);
    pop();

    //draws the yellow bananas
    push();
    imageMode(CENTER);
    tint(banana.fills.middleAged);
    image(banana.image, banana.yellowX, banana.yellowY);
    pop();

    //draws the brown bananas
    push();
    imageMode(CENTER);
    tint(banana.fills.old);
    image(banana.image, banana.brownX, banana.brownY);
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
