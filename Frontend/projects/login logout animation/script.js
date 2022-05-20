var log = document.querySelector('#log');
var reg = document.querySelector('#reg');

log.addEventListener('click',function(){
    log.style.transform = 'translateX(-100%)';
    reg.style.transform = 'translateX(-100%)';
})

reg.addEventListener('click',function(){
    log.style.transform = 'translateX(0%)';
    reg.style.transform = 'translateX(0%)';
})