document.querySelectorAll(".drum").forEach(button => {
  button.addEventListener("click", function() {
    const buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    animateButton(buttonInnerHTML);
  });
});

document.addEventListener("keydown", function(event) {
  playSound(event.key);
  animateButton(event.key);
});

// Play corresponding sound based on key
function playSound(key) {
  let audio;
  switch (key) {
    case "w":
      audio = new Audio("sounds/crash.mp3");
      break;
    case "a":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    case "s":
      audio = new Audio("sounds/snare.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "j":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "k":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "l":
      audio = new Audio("sounds/tom-4.mp3");
      break;
    
  }
  audio.play();
}

// Animate button press
function animateButton(currentKey) {
  const activeButton = document.querySelector(`.${currentKey}`);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
