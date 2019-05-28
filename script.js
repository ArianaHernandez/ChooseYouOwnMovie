/*global $*/
var YES_STATE = 0;
var PRETEND_STATE = 1;
var FIGHT_STATE =2;
var PANIC_STATE=3;
var RESTART_STATE=100;
var STRUGGLE_STATE=4;
var SECURE_STATE=5;
var TURN_STATE=6;
var CAUGHT_STATE=7;
var STAIR_STATE=8;
var programState= YES_STATE;

$(".choiceOne").click(function(){
    if(programState===YES_STATE){
        $("#choices").append("You chose to sleep in class");
        nextLevel("Pretend To Be Unconscious","Fight","When you wake up, You realize being dragged away what do you do?");
        programState = PRETEND_STATE;
    }else if(programState===PRETEND_STATE){
        $("#choices").append("<br> You were dragged away never to be seen again");
        GameOver("Game Over");
    }else if(programState===RESTART_STATE){
        $("#choices").empty();
        $(".choiceTwo").show();
          nextLevel("Yes","No","You are bored and are going to fall asleep in class. Do you?");
        programState = YES_STATE;
    }else if(programState===PANIC_STATE){
        $("#choices").append("<br> You chose to run left, There is a masked figure, they knock you out");
        nextLevel("Struggle","Stay Silent","You wake up tied to a chair");
        programState=STRUGGLE_STATE;
    }else if(programState===STRUGGLE_STATE){
        $("#choices").append("<br> You chose to struggle. You got one arm free");
        nextLevel("Continue Struggle","Pretend to be secure","The kidnapper is here.");
    programState=SECURE_STATE;
    }else if(programState===SECURE_STATE){
        $("#choices").append("<br> You startled the kidnapper, they knock you out");
         GameOver("Game Over");
     }else if(programState===TURN_STATE){
          $("#choices").append("<br> You turned into the kidnapper's weapon. ");
         GameOver("Game Over");
     }else if(programState===CAUGHT_STATE){
         $("#choices").append("<br> You chose to struggle and got free");
         nextLevel("Upstairs","Downstairs","You've reached a set of stairs");
        programState = STAIR_STATE;
     }else if(programState===STAIR_STATE){
          $("#choices").append("<br> You chose to go upstairs and have backed yourself into a corner");
         GameOver("????");
     }
});

 $(".choiceTwo").click(function(){
     if(programState===YES_STATE){
          $("#choices").append("You chose not to sleep but fell out anyways");
       nextLevel("Pretend To Be Unconscious","Fight","When you wake up, You're being dragged away what do you do?");
        programState = PRETEND_STATE;
     }else if(programState===PRETEND_STATE){
          $("#choices").append("<br> You chose to fight the kidnapper");
        nextLevel("Go left","Go right","You're running from danger, what direction should you go?");
     programState=PANIC_STATE;
     }else if(programState===PANIC_STATE){
          $("#choices").append("<br> You chose to run right");
         nextLevel("Turn Back","Push Forward","You see a figure in the distance");
      programState=TURN_STATE;  
     }else if(programState===STRUGGLE_STATE){
          $("#choices").append("<br> You chose to stay silent. The kidnapper's face is the last thing you ever see");
         GameOver("Game Over");
     }
     else if(programState===SECURE_STATE){
          $("#choices").append("<br> You chose to wait until the coast was clear to make your escape");
         nextLevel("Go left","Go right","You're running from danger, what direction should you go?");
        programState=PANIC_STATE;
         }
    else if(programState===TURN_STATE){
         $("#choices").append("<br> You chose to push forward");
         nextLevel("Struggle","Submit","The kidnapper has you!");
         programState=CAUGHT_STATE;
     }else if(programState===CAUGHT_STATE){
          $("#choices").append("<br> You chose to sleep in class");
            nextLevel("Struggle","Stay Silent","You wake up tied to a chair");
        programState=STRUGGLE_STATE;
     }else if(programState===STAIR_STATE){
         $("#choices").append("<br> You chose to go downstairs, you make it to the outside. You're free but its never really over");
          GameOver("The best ending you can get");
    programState=RESTART_STATE;
     }
  
 });

function GameOver(x){
    $("#story").hide();
    $("#caption").text(x);
    $(".choiceOne").text("Restart");
    setTimeout(function(){$("#story").show(); }, 1000); 
     $(".choiceTwo").hide();
     programState=RESTART_STATE;
}
function nextLevel(text1,text2,text3){
     $("#story").hide();
        $(".choiceOne").text(text1);
        $(".choiceTwo").text(text2);
        $("#caption").text(text3);
        setTimeout(function(){$("#story").show(); }, 1000);
}