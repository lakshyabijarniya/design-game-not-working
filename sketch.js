var ballon, ballonImg;
var food, foodImg;
var obstacle, obstacleImg;
var score = 0;
var life = 3;

function preload() {
    ballonImg = loadImage("ballon.png");
    foodImg = loadImage("food.png");
    obstacleImg = loadImage("obstacle.png");
}

function setup() {
    createCanvas(800, 800);
}

function draw() {
    background(0, 0, 255);
    ballon = createSprite(400, 400);
    ballon.addImage("balllon", ballonImg);
    ballon.scale = 0.3;
    if (keyDown("LEFT_ARROW")) {
        ballon.velocityX = -2;
    }

    if (keyDown("RIGHT_ARROW")) {
        ballon.velocityY = 2;
    }

    drawSprites();
    strokeWeight(4);
    stroke("blue");
    fill("green");
    textSize(20)
    text("Score : " + score, 700, 20);
    text("Life : " + life, 700, 40);


    //spawning obstacles
    if (frameCount % 60 === 0) {
        var rand = Math.round(random(0, 800));
        obstacle = createSprite(rand, -50);
        obstacle.addImage("ob", obstacleImg);
        obstacle.velocityY = 2;

        if (ballon.isTouching(obstacle)) {
            life = life - 1;
        }
    }

    //spawning food
    if (frameCount % 30 === 0) {
        var randd = Math.round(random(0, 800));
        food = createSprite(randd, -50);
        food.addImage("food", foodImg);
        food.scale = 0.1;
        food.velocityY = 3;

        if (ballon.isTouching(food)) {
            score = score + 1;
        }
    }
}

