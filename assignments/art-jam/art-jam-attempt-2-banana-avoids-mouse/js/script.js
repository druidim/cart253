/**
 * Banana, split!!!
 * Laura Slabbert
 *
 * This program allows the user to chase a banana around the screen, 
 * and its fear will affect its ripeness.The user's concience is manipulated by "KILL" and "SPARE" messages that fade in and out of view.
 */




let banana = {
    // Position of the banana
    x: 200,
    y: 200,
    alive: true,
    fearLevel: 0,
    fearThreshold: 500,
    fearDistance: 200,
    image: undefined,


    fill: "#ffe369", // Starts out  yellow
    // Possible "fills" for the banana that show its fear level
    fills: {
        bored: "#ffe369", // yellow
        scared: "#b0d481", // green
        dead: "#735108",
    }
}



function preload() {
    // Load the banana-yellow image
    banana.image = loadImage("assets/images/banana-yellow.png");


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


    // Moves user circle
    moveUser();

    //Moves the banana
    moveBanana();

    //Checks what colour the banana should be
    checkInput();

    // Draws the user and banana
    drawCircle();
    drawText();
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
    if (!banana.alive) {
        return;
    }
    //check overlap
    //(in the banana version, they don't visibly overlap, but because of the weirdness 
    //of the arc shape, this is what makes the most sense to me).
    const d = dist(user.x, user.y, banana.x, banana.y); //thanks pythag
    const overlap = (d < banana.fearDistance);
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
                banana.y += 1;
            }
            else if (dy > 0) {
                banana.y -= 1;
            }
        }
    }
    //stops the banana from going off-screen
    banana.x = constrain(banana.x, banana.image.width / 2, width - banana.image.width / 2);
    banana.y = constrain(banana.y, banana.image.height / 2, height - banana.image.height / 2);
}

//changes the banana's colour based on whether or not it is afraid
function checkInput() {
    if (!banana.alive) {
        return;
    }
    //makes the banana "scared" (turn green) when it touches the walls/ "is cornered"
    if (banana.x === banana.image.width / 2 || banana.x === width - banana.image.width / 2 || banana.y === banana.image.height / 2 || banana.y === height - banana.image.height / 2) {
        banana.fill = banana.fills.scared;
        banana.fearLevel += 1;
        //if the banana is scared for too long, it dies of fright
        if (banana.fearLevel > banana.fearThreshold) {
            banana.alive = false;
            banana.fill = banana.fills.dead;
        }
    }
    else {
        banana.fearLevel = 0;
        //otherwise the banana is bored
        banana.fill = banana.fills.bored;
    }
}

function drawCircle() {
    let c = map(mouseY, 0, 255, 0, 255);

    // Style the circle.
    fill(c);

    // Draw the circle.
    rect(0, 0, 400, 400);
}

//draws the KILL and SPARE texts
function drawText() {

    //draws "kill the banana" at the top of the screen
    push();
    textSize(32);
    fill(255);
    noStroke();
    strokeWeight(4);
    text('KILL THE BANANA', 60, 50);
    pop();

    //draws "kill the banana" at the top of the screen
    push();
    textSize(32);
    fill(255);
    noStroke();
    strokeWeight(4);
    text('KILL THE BANANA', 60, 350);
    pop();

    //draws "spare the banana" in the centre of the screen
    push();
    textSize(32);
    fill(0);
    noStroke();
    strokeWeight(4);
    text('SPARE THE BANANA', 50, 200);
    pop();
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


function drawBanana() {
    push();
    imageMode(CENTER);
    tint(banana.fill)
    image(banana.image, banana.x, banana.y);
    pop();


}






