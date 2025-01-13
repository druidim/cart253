function setup() {
    createCanvas(700, 700);
}

//Distance between tracks
let trackDistance = 40;

//X and Y points of the rail lines
let railX1 = 120;
let railX2 = 175;
let railY1 = 230;
let railY2 = 710;

//Distance between rail borders
let railDistance = 200;

//Preloads the banana images
function preload() {
    // Load the banana-yellow image
    banana.image = loadImage("assets/images/banana-yellow.png");
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
    push();
    imageMode(CENTER);
    tint(banana.fill)
    image(banana.image, banana.x, banana.y);
    pop();


}