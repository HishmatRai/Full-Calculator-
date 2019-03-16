 function button1(){

    document.getElementById('input').value += "1";
}
 function button2(){

     document.getElementById('input').value += "2";
}
function button3(){

    document.getElementById('input').value += "3";
}
function buttonplus(){

    document.getElementById('input').value += "+";

}
function button4(){

    document.getElementById('input').value += "4";
}
function button5(){

    document.getElementById('input').value += "5";
}
function button6(){

    document.getElementById('input').value += "6";
}
function buttonminus(){

    document.getElementById('input').value += "-";
}
function button7(){

    document.getElementById('input').value += "7";
}
function button8(){

    document.getElementById('input').value += "8";
}
function button9(){

    document.getElementById('input').value += "9";
}
function buttonmulti(){

    document.getElementById('input').value += "*";
}
function button10(){

    document.getElementById('input').value += "0";
}
function buttondevid(){

    document.getElementById('input').value += "/";
}
function buttonmodulas(){

    document.getElementById('input').value += "%";
}
function buttonequel(){

    document.getElementById('input').value = eval(input.value);
    
}

function buttonround(){

    var round = document.getElementById('input').value;
    document.getElementById('input').value = Math.round(round);
}
function buttonpoint(){

    document.getElementById('input').value += ".";
}
function buttonfloor(){
 
    var floor = document.getElementById('input').value;
    document.getElementById('input').value = Math.floor(floor);
}
function buttonceil(){

    var ceil = document.getElementById('input').value;
    document.getElementById('input').value = Math.ceil(ceil);
}
function buttonclear(){
    document.getElementById('input').value = "";

}
function buttonone() {
    var back = document.getElementById('input').value;
    document.getElementById('input').value = back.slice(0, back.length - 1);
}