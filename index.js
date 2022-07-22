let buttonclicked = document.querySelectorAll(".drum");

for(let i = 0; i < buttonclicked.length; i++){
  buttonclicked[i].addEventListener("click", function(){

     let buttoncontent = this.innerHTML;

     addShadow(buttoncontent);
     makeSound(buttoncontent);

  });


}


document.addEventListener("keydown", function(event){

 let keypressed = event.key;

 addShadow(keypressed);
 makeSound(keypressed);
});


function addShadow(checkkey){

document.querySelector("." + checkkey).classList.add("pressed");

 setTimeout(function(){
document.querySelector("." + checkkey).classList.remove("pressed");

}, 100);

}


function makeSound(buttn){

switch (buttn) {
  case "w":
  let tom1 = new Audio("sounds/tom-1.mp3");
  tom1.play();

    break;
    case "a":
    let tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();

      break;
      case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();

        break;
        case "d":
        let tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();

          break;
          case "j":
          let crash = new Audio("sounds/crash.mp3");
          crash.play();

            break;
            case "k":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();

              break;
              case "l":
              let kick = new Audio("sounds/kick-bass.mp3");
              kick.play();

                break;
  default:

}




}
