var cross = document.querySelector('#cross');
var modal = document.querySelector('#modal');
var mainbtn = document.querySelector('#mainbtn');
var pdctnm = document.querySelector('#pdctnm');
var pdctctg = document.querySelector('#pdctctg');
var pdctimg = document.querySelector('#pdctimg');
var addbtn = document.querySelector('#addbtn');
var cards = document.querySelector('#cards');


cross.addEventListener('click',function(){
    modal.style.display = 'none';
});

mainbtn.addEventListener('click',function(){
    modal.style.display = "initial";
});

addbtn.addEventListener('click',function(){
    var prname = pdctnm.value;
    var prcategory = pdctctg.value;
    var primage = pdctimg.value;

   var template = `<div class="card">
   <div class="img">
       <img src="${primage}"></img>
   </div>
   <h3>${prname}</h3>
   <h5>${prcategory}</h5>
   <button>by now</button>
</div>`;
  
   cards.innerHTML += template;
   pdctnm.value = '';
   pdctctg.value = '';
   pdctimg.value = '';
   modal.style.display = 'none';
});