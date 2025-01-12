function setup() {
    createCanvas(700, 700);
}

function draw() {
    background(235, 237, 235);

    // Set up the position the first line
    let point1x = 100;
    let point1y = 250;
    let point2x = 200
    let point2y = 250;
    let railDistance = 50;

    // Here is the magical while loop
    // Keep checking if y is still less than the height...
    while (point2y <= height) {
        // If it is, draw the next rail
        line(point1x, point1y, point2x, point2y);
        // And increase y to move down
        point1y += railDistance;
        point2y += railDistance;
    }
}