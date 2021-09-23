
var currentNumber = 0
var clicks=0


function number(x){

  currentNumber=currentNumber +x;
   clicks=clicks+1
document.getElementById("result").innerHTML = "<hr> <br> Current Number: "+currentNumber+"<br> Total Numbers: "+ clicks;
}
function clearResults(){
document.getElementById("result").innerHTML = ""
currentNumber=0
clicks=0
}
