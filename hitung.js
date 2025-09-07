function appendValue(value){
    document.getElementById("display").value += value ;
}

function clearDisplay(){
    document.getElementById("display").value = "";
}
 
function calculate(){
    const display =document.getElementById("display");
    try{
        display.value = eval(display.value);
        if (display.value === "54" || display.value === 54) {
            window.location.href = "https://ipatkepot.github.io/Bunga";
        }
    }catch{
        display.value ="Error";
    }

}