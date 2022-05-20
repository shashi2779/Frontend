var counterValue = 0;

var add = document.querySelector('#add');
var minus = document.querySelector('#minus');
var counterValueDiv = document.querySelector('#countervalue')

add.addEventListener('click',function(){
   counterValue++;
   counterValueDiv.textContent = counterValue;
});

minus.addEventListener('click',function(){
    if(counterValue>0){
    counterValue--;
    counterValueDiv.textContent = counterValue;
    }
 });
 