var secondswDiv = document.querySelector('#secondsw');
var minuteswDiv = document.querySelector('#minutesw');
var hourswDiv = document.querySelector('#hoursw');
var daywDiv   = document.querySelector('#dayw')


function runner(){
    
var currentDate = new Date();

var currentHours = currentDate.getHours();
var currentMinutes = currentDate.getMinutes();
var currentSeconds = currentDate.getSeconds();

secondswDiv.textContent = currentSeconds;
minuteswDiv.textContent = currentMinutes;
hourswDiv.textContent = currentHours;
setDay(currentDate.getDay())
}

setInterval(function(){
   runner();

},1000)

function setDay(day){
   switch(day){
      case 0:
         daysetter('sun');
         break;
      case 1:
         daysetter('mon');
         break;
      case 2:
         daysetter('tue');
         break;
      case 3:
         daysetter('wed');
         break;
      case 4:
         daysetter('thu');
         break;
      case 5:
         daysetter('fri');
         break;
      case 6:
         daysetter('sat');
          break;
                                                            
               
   }
}

function daysetter(day){
 daywDiv.textContent = day;
}