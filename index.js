var n =document.querySelectorAll(".drum").length;
for(i=0;i<n;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click",alerting);
  function alerting()
  {
     var buttoninnerhtml = this.innerHTML;
     makesound(buttoninnerhtml);
     buttonAnimation(buttoninnerhtml);
  };
}
document.addEventListener("keydown",function()
{
    var keypressed=event.key;
    makesound(keypressed);
    buttonAnimation(keypressed);
})
function makesound(keys)
{
switch(keys) {
    case "w":
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
    break;

    case "a":
    var kick_bass = new Audio('sounds/kick-bass.mp3');
    kick_bass.play();
    break;

    case "s":
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
    break;

    case "d":
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
    break;

    case "j":
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
    break;

    case "k":
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;

    case "l":
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;
    default:
       console.log()
}
};
function buttonAnimation(activeButton)
{
  var currentkey = document.querySelector("." + activeButton);
  currentkey.classList.add("pressed");
  setTimeout(function()
{
  currentkey.classList.remove("pressed"),100;
})
}
