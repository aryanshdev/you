var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStarted = false;
var level = 0;

function nextSequence() {
    $("h1").text('Level '+ level++ );
    var randomNumber = Math.floor(Math.random() * 3);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);
    $("#" + randomChosenColour).addClass("tell-button");
    setTimeout(function () {
        $("#" + randomChosenColour).removeClass("tell-button");
    }, 100);
}

$('.btn').click( function (event) {
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour)
    checkAnswer(userClickedPattern.length-1);
} )


function playSound(name){
    var soundEffect = new Audio("sounds/" + name + '.mp3');
    soundEffect.play();
}

function animatePress(currentColor){
    $('#'+currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

$(document).keydown(function (){
    if(gameStarted !== true){
        nextSequence();
        gameStarted = true;
        $("h1").text("Level 0");
    }
});

function checkAnswer(currentLevel){

    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if(currentLevel === gamePattern.length-1){
            setTimeout(nextSequence, 1000);
            setTimeout(function () { userClickedPattern=[];}, 1000);
        }
    }
    else{
        $('body').addClass("game-over");
        $("h1").text("Game Over, Press Any Key to Restart");
        setTimeout(function () {$('body').removeClass("game-over");}, 200);
        startOver();
    }
}

function startOver(){
    level=0;
    gamePattern = [];
    gameStarted = false;
    userClickedPattern = [];
}