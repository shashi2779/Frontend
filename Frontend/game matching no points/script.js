var bottom = document.querySelector('#bottom');
var hit = document.querySelector('#hit');
var score = document.querySelector('#score');
var timer = document.querySelector('#timer');

var scoreValue = 0;
var timerValue = 30;
var hitValue ;


bottom.addEventListener('click',function(details){
    var numberValue = Number(details.target.innerText);
    if(numberValue === hitValue){
        increaseScore();
        bottom.innerHTML ='';
        bubbleCreator();
        getHitValue();
    }
});

function getHitValue(){
    hitValue = Math.floor( Math.random() * 10 ) ;
    hit.innerText = hitValue;
}

function increaseScore(){
     scoreValue = scoreValue + 10;
     score.innerText = scoreValue;
}
function bubbleCreator(){
    for(var i = 1; i<103; i++) {
        var randomNumber = Math.floor(Math.random()*10);
         bottom.innerHTML += `<div class= "bubble">${randomNumber}</div>`;
     }
}

setInterval(function(){
    if(timerValue>0){
        timerValue = timerValue - 1 ;
        timer.innerText = timerValue;
    }
    else{
        bottom.innerHTML= '<h1 id="center" >game over</h1>';
    }
},1000);

bubbleCreator();
getHitValue();
