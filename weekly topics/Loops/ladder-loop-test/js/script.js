function setup() {
    createCanvas(700, 700);
}

//Distance between rail tracks
let railDistance = 40;

function draw() {

    //Draws the left side train track
    leftRails();

    //Draws the middle train track
    middleRails();

    //Draws the right side train track
    rightRails();

    //Draws the borders of the rails
    railBorder1();
    railBorder2();
    railBorder3();
    railBorder4();
    railBorder5();
    railBorder6();
}

//Draws the left set of rails.
function leftRails() {
    background(235, 237, 235);

    // Set up the position the first line
    let leftPoint1x = 100;
    let leftPoint1y = 250;
    let leftPoint2x = 200
    let leftPoint2y = 250;

    // Here is the magical while loop
    // Keep checking if y is still less than the height...
    while (leftPoint2y <= height) {
        // If it is, draw the next rail
        line(leftPoint1x, leftPoint1y, leftPoint2x, leftPoint2y);
        // And increase y to move down
        leftPoint1y += railDistance;
        leftPoint2y += railDistance;
    }
}

//Draws the middle set of rails.
function middleRails() {

    // Set up the position the first line
    let middlePoint1x = 300;
    let middlePoint1y = 250;
    let middlePoint2x = 400;
    let middlePoint2y = 250;
    // Here is the magical while loop
    // Keep checking if y is still less than the height...
    while (middlePoint2y <= height) {
        // If it is, draw the next rail
        line(middlePoint1x, middlePoint1y, middlePoint2x, middlePoint2y);
        // And increase y to move down
        middlePoint1y += railDistance;
        middlePoint2y += railDistance;
    }
}

//Draws the right set of rails.
function rightRails() {

    // Set up the position theright first line
    let rightPoint1x = 500;
    let rightPoint1y = 250;
    let rightPoint2x = 600;
    let rightPoint2y = 250;

    // Here is the magical while loop
    // Keep checking if y is still less than the height...
    while (rightPoint2y <= height) {
        // If it is, draw the next rail
        line(rightPoint1x, rightPoint1y, rightPoint2x, rightPoint2y);
        // And increase y to move down
        rightPoint1y += railDistance;
        rightPoint2y += railDistance;
    }
}

//draws the vertical lines of the rails
function railBorder1() {
    let borderPointx = 120;
    let borderPoint1y = 230;
    let borderPoint2y = 710;
    line(borderPointx, borderPoint1y, borderPointx, borderPoint2y);
}

function railBorder2() {
    let border2Pointx = 175;
    let border2Point1y = 230;
    let border2Point2y = 710;
    line(border2Pointx, border2Point1y, border2Pointx, border2Point2y);
}

function railBorder3() {
    let border3Pointx = 320;
    let border3Point1y = 230;
    let border3Point2y = 710;
    line(border3Pointx, border3Point1y, border3Pointx, border3Point2y);
}

function railBorder4() {
    let border4Pointx = 375;
    let border4Point1y = 230;
    let border4Point2y = 710;
    line(border4Pointx, border4Point1y, border4Pointx, border4Point2y);
}

function railBorder5() {
    let border5Pointx = 520;
    let border5Point1y = 230;
    let border5Point2y = 710;
    line(border5Pointx, border5Point1y, border5Pointx, border5Point2y);
}

function railBorder6() {
    let border6Pointx = 575;
    let border6Point1y = 230;
    let border6Point2y = 710;
    line(border6Pointx, border6Point1y, border6Pointx, border6Point2y);
}