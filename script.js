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
        nextLevel("Pretend To Be Unconscious","Fight","You're being dragged away what do you do?");
        programState = PRETEND_STATE;
    }else if(programState===PRETEND_STATE){
        GameOver();
    }else if(programState===RESTART_STATE){
        $(".choiceTwo").show();
          nextLevel("Yes","No","You are bored and are going to fall asleep in class. Do you?");
        programState = PRETEND_STATE;
    }else if(programState===PANIC_STATE){
        nextLevel("Struggle","Stay Silent","You wake up tied to a chair");
        programState=STRUGGLE_STATE;
    }else if(programState===STRUGGLE_STATE){
        nextLevel("Continue Struggle","Pretend to be secure","The kidnapper is here.");
    programState=SECURE_STATE;
    }else if(programState===SECURE_STATE){
         GameOver();
     }else if(programState===TURN_STATE){
         GameOver();
     }else if(programState===CAUGHT_STATE){
         nextLevel("Upstairs","Downstairs","You've reached a set of stairs");
        programState = STAIR_STATE;
     }else if(programState===STAIR_STATE){
         nextLevel("Restart","","This is the bad end.");
    programState=RESTART_STATE;
     }
});

 $(".choiceTwo").click(function(){
     if(programState===YES_STATE){
       nextLevel("Pretend To Be Unconscious","Fight","You're being dragged away what do you do?");
        programState = PRETEND_STATE;
     }else if(programState===PRETEND_STATE){
        nextLevel("Go left","Go right","You're running from danger, what direction should you go?");
     programState=PANIC_STATE;
     }else if(programState===PANIC_STATE){
         nextLevel("Turn Back","Push Forward","You see a figure in the distance");
      programState=TURN_STATE;  
     }else if(programState===STRUGGLE_STATE){
         GameOver();
     }
     else if(programState===SECURE_STATE){
         nextLevel("Go left","Go right","You're running from danger, what direction should you go?");
        programState=PANIC_STATE;
         }
    else if(programState===TURN_STATE){
         nextLevel("Struggle","Submit","The kidnapper has you!");
         programState=CAUGHT_STATE;
     }else if(programState===CAUGHT_STATE){
            nextLevel("Struggle","Stay Silent","You wake up tied to a chair");
        programState=STRUGGLE_STATE;
     }else if(programState===STAIR_STATE){
          nextLevel("Restart","","This is the good end.");
    programState=RESTART_STATE;
     }
  
 });

function GameOver(){
    $("#story").hide();
    $("#caption").text("Game Over");
    $(".choiceOne").text("Restart");
    setTimeout(function(){$("#story").show(); }, 3000); 
     $(".choiceTwo").hide();
     programState=RESTART_STATE;
}
function nextLevel(text1,text2,text3){
     $("#story").hide();
        $(".choiceOne").text(text1);
        $(".choiceTwo").text(text2);
        $("#caption").text(text3);
        setTimeout(function(){$("#story").show(); }, 3000);
}