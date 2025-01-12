function setup() {
    createCanvas(700, 700);
}

function draw() {

    //Draws the left side train track
    leftRails();

    //Draws the middle train track
    middleRails();

    //Draws the right side train track
    rightRails();
}

//Draws the left set of rails.
function leftRails() {
    background(235, 237, 235);

    // Set up the position the first line
    let leftPoint1x = 100;
    let leftPoint1y = 250;
    let leftPoint2x = 200
    let leftPoint2y = 250;
    let leftRailDistance = 50;

    // Here is the magical while loop
    // Keep checking if y is still less than the height...
    while (leftPoint2y <= height) {
        // If it is, draw the next rail
        line(leftPoint1x, leftPoint1y, leftPoint2x, leftPoint2y);
        // And increase y to move down
        leftPoint1y += leftRailDistance;
        leftPoint2y += leftRailDistance;
    }
}

//Draws the middle set of rails.
function middleRails() {

    // Set up the position the first line
    let middlePoint1x = 300;
    let middlePoint1y = 250;
    let middlePoint2x = 400;
    let middlePoint2y = 250;
    let middleRailDistance = 50;

    // Here is the magical while loop
    // Keep checking if y is still less than the height...
    while (middlePoint2y <= height) {
        // If it is, draw the next rail
        line(middlePoint1x, middlePoint1y, middlePoint2x, middlePoint2y);
        // And increase y to move down
        middlePoint1y += middleRailDistance;
        middlePoint2y += middleRailDistance;
    }
}

//Draws the right set of rails.
function rightRails() {

    // Set up the position theright first line
    let rightPoint1x = 500;
    let rightPoint1y = 250;
    let rightPoint2x = 600;
    let rightPoint2y = 250;
    let rightRailDistance = 50;

    // Here is the magical while loop
    // Keep checking if y is still less than the height...
    while (rightPoint2y <= height) {
        // If it is, draw the next rail
        line(rightPoint1x, rightPoint1y, rightPoint2x, rightPoint2y);
        // And increase y to move down
        rightPoint1y += rightRailDistance;
        rightPoint2y += rightRailDistance;
    }
}

