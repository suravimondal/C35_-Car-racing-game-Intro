var ball, database, position;

function setup(){
    createCanvas(500,500);

    database= firebase.database();

    ball = createSprite(250,250,20,20);
    ball.shapeColor = "red";

    // on operator creates a listener

    var ballPosition= database.ref('Ball/Position');
    ballPosition.on("value", readPosition,showError);

    

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('Ball/Position').set({
        x:ball.x+x,
        y:ball.y+y
    })

}
function readPosition(data){
    position= data.val();
    ball.x=position.x;
    ball.y=position.y;
}
function showError(){
    console.log("Show the Errors!! :(");
}

