var counter = 0;


function addCounter(){
    counter = counter + 1;

    let counterElement = document.getElementById("counter-value");

    counterElement.innerHTML = counter;

    if(counter > 0 ){
        counterElement.style = "background-color : green;"
    }
}

function subCounter(){
    counter = counter - 1;

    let counterElement = document.getElementById("counter-value");

    counterElement.innerHTML = counter;

    if(counter < 0 ){
        counterElement.style = "background-color : red;"
    }
    
}

