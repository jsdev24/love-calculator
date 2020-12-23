
let yourName = document.getElementById("yourName");
let crushName = document.getElementById("crushName");
let calculateBtn = document.getElementById("calculate");
let percentageOutput = document.getElementById("percentage");


calculateBtn.addEventListener("click", mainFunction);

function mainFunction() {
    let yourNameInput = yourName.value;
    let crushNameInput = crushName.value;

    if(yourNameInput.trim().length && crushNameInput.trim().length) {
        let percentage = getRandomInt(50, 100);
        displayPercentage(percentage);
        calculateBtn.removeEventListener("click", mainFunction);
    }else {
        snackbar();
    }
}


function displayPercentage(percentage) {
    percentageOutput.style.display = "block";
    let i = 0;

    let interval = setInterval(function() {
        if(i < percentage) {
            percentageOutput.innerHTML = i + "<small>%</small>";
            i++;
        }else {        
            clearInterval(interval);
            calculateBtn.innerHTML = "Reset";
            calculateBtn.addEventListener("click", reset);
        }
    }, 50)    
}


function reset() {
    yourName.value = "";
    crushName.value = "";
    percentageOutput.style.display = "none";
    calculateBtn.removeEventListener("click", reset);
    calculateBtn.innerHTML = "Calculate";
    calculateBtn.addEventListener("click", mainFunction);
}

function snackbar() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    
    setTimeout(function(){ 
        x.className = x.className.replace("show", ""); 
    }, 3000);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
