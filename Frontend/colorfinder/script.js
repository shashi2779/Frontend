var btn = document.querySelector('#btn');
var red = document.querySelector('#red');
var green = document.querySelector('#green');
var blue = document.querySelector('#blue');
var screen = document.querySelector('#screen');

btn.addEventListener('click',function(){
    var redValue = red.value;
    var greenValue = green.value;
    var blueValue = blue.value;
    var rgbValue = 'rgb(${redValue),${greenValue},${blueValue})';
    screen.style.backgroundcolor = rgbValue;
});