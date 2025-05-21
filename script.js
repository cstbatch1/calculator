const display = document.getElementById("display");

function appendValue(value){
    // display.valu =  display.value + display.value;
    display.value +=value;
}

// clear input field

function clearField(){
    display.value = "";
}

// calculate value

function calculation(){
    display.value = eval(display.value);
}