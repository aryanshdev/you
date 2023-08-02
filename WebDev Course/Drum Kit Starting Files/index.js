var buttons = document.querySelectorAll(".drum");
for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", function (){
        makeSound(buttons[index].textContent);
        buttonAnimation(buttons[index].textContent);
    })
}
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})



function makeSound(key){
    switch (key) {
        case "w":
            var drumInstrument = new Audio("sounds/crash.mp3")
            drumInstrument.play();
            break;
        case 'a':
            var drumInstrument = new Audio("sounds/kick-bass.mp3")
            drumInstrument.play();
            break;
        case 's':
            var drumInstrument = new Audio("sounds/snare.mp3")
            drumInstrument.play();
            break;
        case 'd':
            var drumInstrument = new Audio("sounds/tom-1.mp3")
            drumInstrument.play();
            break;
        case 'j':
            var drumInstrument = new Audio("sounds/tom-2.mp3")
            drumInstrument.play();
            break;
        case 'k':
            var drumInstrument = new Audio("sounds/tom-3.mp3")
            drumInstrument.play();
            break;
        case 'l':
            var drumInstrument = new Audio("sounds/tom-4.mp3")
            drumInstrument.play();
            break;

        default:
            break;
    }
}

function buttonAnimation(pressedKey){
    var activeButton = document.querySelector("."+pressedKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed");}, 100)
}