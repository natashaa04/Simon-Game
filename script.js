
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;



document.addEventListener('keypress',()=>{
  if (!started) {
    document.getElementById("level-title").innerHTML= ("Level " + level);
    nextSequence();
    started = true;
  }
});





const clicked=(id)=>{
  let userChosenColour=id;
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);


}


const checkAnswer=(currentLevel)=> {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout( ()=> {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
       document.getElementById('bodyy').classList.add('game-over');
        document.getElementById("level-title").innerHTML="Game Over, Press Any Key to Restart";

      setTimeout(function () {
       document.getElementById("bodyy").classList.remove("game-over");
      }, 2000);

      startOver();
    }
}


const nextSequence=()=> {
  userClickedPattern = [];
  level++;
 document.getElementById("level-title").innerHTML=("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  animatePress(randomChosenColour);
  playSound(randomChosenColour);
}

const animatePress=(currentColor)=>{
  document.getElementById(currentColor).classList.add("pressed");
  setTimeout( ()=>{
   document.getElementById(currentColor).classList.remove("pressed");
  }, 100);
}

const playSound=(name)=> {
  var audio = new Audio(name + ".mp3");
  audio.play();
}

const startOver=()=> {
  level = 0;
  gamePattern = [];
  started = false;
}