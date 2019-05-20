/*global $*/
/*global results*/
var scene=0;
$( "#choiceOne" ).click(function(){
    scene=scene+1;
if(scene===1){
    $("#story").hide();
    $("#choiceOne").text("Pretend to be unconscious");
    $("#choiceTwo").text("Fight");
    $("#caption").text("You're being dragged what do you do?");
    setTimeout(function(){$("#story").show(); }, 3000);

}else if(scene===2){
    $("#story").hide();
    $("#caption").text("GameOver");
    setTimeout(function(){$("#caption").show(); }, 3000);
}
});
