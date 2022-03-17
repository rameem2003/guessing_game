var start = document.getElementById("start");

var won = document.getElementById("won");
var lost = document.getElementById("lost");

var result = document.getElementById("result");
var reset = document.getElementById("reset");


var achive = document.querySelector(".achive");

var num_of_won = 0;
var num_of_lost = 0;

start.addEventListener("click", () =>{
    for(var i = 1; i<=5; i++){
        var inputNumber = parseInt(prompt("Enter random number form (1 to 5): "));

        var randomNumber = Math.floor(Math.random() * 5) + 1;

        if(inputNumber == randomNumber){
            console.log("You won");
            num_of_won++;
        }
        else{
            console.log("You lost " + randomNumber);
            num_of_lost++;
        }
    }


    result.style.display = "block";
    start.style.display = "none";
    reset.style.display = "inline-block";

    if(num_of_won > num_of_lost){
        won.innerHTML = "You have won " + num_of_won + " times";
    }
    else{
        lost.innerHTML = "You have lost " + num_of_lost + " times";
        achive.classList.replace("fa-trophy", "fa-circle-exclamation");
    }  
});



reset.addEventListener("click", ()=>{
    document.location.reload();
});
