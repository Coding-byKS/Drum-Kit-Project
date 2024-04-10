
for(let i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    
        buttonAnimation(this.innerHTML)
        audioGenerator(this.innerHTML)  
    }
    )
}

document.addEventListener("keydown", function(event){
    audioGenerator(event.key)
})

function audioGenerator(key){
    switch(key){
    case "w":
        let tom1 = new Audio("./sounds/tom-1.mp3")
            tom1.play() 
        break;
    case "a":
        let tom2 = new Audio("./sounds/tom-2.mp3")
        tom2.play()
        break;
    case "s":
        let tom3 = new Audio("./sounds/tom-3.mp3")
        tom3.play()
        break;
    case "d":
        let tom4 = new Audio("./sounds/tom-4.mp3")
        tom4.play()
        break;
    case "j":
        let kickbass = new Audio("./sounds/kick-bass.mp3")
        kickbass.play()
        break;
    case "k":
        let crash = new Audio("./sounds/crash.mp3")
        crash.play()
        break;
    case "l":
        let snare = new Audio("./sounds/snare.mp3")
        snare.play()
        break;
    default:
        alert(`${key} was pressed, please press the keys of the drum icons to produce sound`);
        
    }
    }

function buttonAnimation(key){

    document.querySelector("."+key).classList.add("pressed")
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed")},200)
    
}




