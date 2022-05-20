var btn = document.querySelector('#btn');
var msg = document.querySelector('#msg');
var msgwell = document.querySelector('#msgwell');


btn.addEventListener('click',function(){
   var msgvalue = msg.value;
   msgwell.textContent = msgvalue;
   msg.value = ' ';
})