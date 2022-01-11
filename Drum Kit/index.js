
/* This will add an event of "click" to each button and run the function makeSound
based on the innerHTML of the button */

for (var i = 0; i < document.querySelectorAll(".drum").length; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    makeSound(this.innerHTML);

    buttonAnimation(this.innerHTML);
  });

}

/* This will add an event of keydown in all the document and run the function
makeSound based on the key of the event */

  document.addEventListener("keydown", function(event){

    makeSound(event.key);

    buttonAnimation(event.key);
  })

/* Function that receives a parameter and play a sound based on the parameter
received */

  function makeSound(key){

    switch (key) {

      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

      case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

      case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      case "l":
        var kickBass = new Audio("sounds/kick-bass.mp3");
        kickBass.play();
        break;

      default: console.log(innerHtml);

    }

  }

/* Function that add/remove the class pressed when it detects the key that
activated the event*/

  function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
      activeButton.classList.remove("pressed");
    }, 100)
  }
