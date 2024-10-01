/**
 * Banana Split
 * Laura Slabbert
 *
 * This program allows the user to chase a banana around the screen, 
 * affecting its ripeness.
 */

const banana = {
    r: 255,
    g: 200,
    b: 0,
    x: 320,
    y: 320,
    w: 80,
    h: 30,

}

const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 75,
    fill: "#000000"
};

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);

    //makes the cursor invisible so that the graphic we create "is" the cursor
    noCursor();

}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
    background("#aaaaaa");

    // Move user circle
    moveUser();

    //Move the banana
    moveBanana();


    // Draw the user and banana
    drawUser();
    drawBanana();
}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
}


function moveBanana() {
    //check overlap 
    //(in the banana version, they don't visibly overlap, but because of the weirdness 
    //of the arc shape, this is what makes the most sense to me).
    const d = dist(user.x, user.y, banana.x, banana.y); //thanks pythag
    const overlap = (d < user.x + banana.x);
    if (overlap) {
        //check distance (magnitude)
        const dx = user.x - banana.x;
        const dy = user.y - banana.y;
        if (abs(dx) > abs(dy)) {
            //check relative position
            if (dx < 0) {
                banana.x += 1;
            }
            else if (dx > 0) {
                banana.x -= 1;
            }
        }
        else if (abs(dy) > abs(dx)) {
            if (dy < 0) {
                banana.y += 3;
            }
            else if (dy > 0) {
                banana.y -= 1;
            }
        }
    }
}


/**
 * Displays the user circle
 */
function drawUser() {
    push();
    noStroke();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
}

/**
 * Displays the banana arc
 */
function drawBanana() {
    //stops the banana from going off-screen
    banana.x = constrain(banana.x, 50, 385);
    banana.y = constrain(banana.y, 10, 375);

    //draws the banana
    push();
    noFill();
    stroke(banana.r, banana.g, banana.b)
    strokeWeight(15);
    arc(banana.x, banana.y, banana.w, banana.h, 20, PI);
    pop();

}