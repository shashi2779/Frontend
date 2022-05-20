// var overlay = document.querySelector('#overlay');

// let timeline = gsap.timeline();

// timeline.to('#overlay',{
//     width:4000,
//     height:4000,
//     duration:1,
//     ease:'expo.inout'
// })
// .to('#overlay h1 span', {
//     top: 0,
//     duration:1,
//     ease:'expo.inout'
// })
// .to('#overlay h1 span', {
//     top: -100,
//     duration:1,
//     delay:.2,
//     ease:'expo.inout'
// })
// .to('#overlay', {
//     opacity:0,
//     duration:1,
//     onComplete: function(){
//        overlay.style.display = 'none';
//     },
//     ease:'expo.inout'
// })
// .from('#nav h3', {
//     opacity:0,
//     duration:.7,
//     x:40,
//     ease:'expo.inout'
// })
// .from('#nav #icons i', {
//     stagger:.2,
//     opacity:0,
//     duration:.3,
//     x:15,
//     ease:'expo.inout'
// })
// .from('#maindets .line', {
//     stagger:.3,
//     width:0,
//     opacity:0,
//     duration:.7,
//     ease:'expo.inout'
// })
// .from('#maindets .detsanm', {
//     stagger:.2,
//     y:15,
//     opacity:0,
//     duration:.4,
//     delay:-.5,
//     ease:'expo.inout'
// })
// .from('#scroller', {
//     opacity:0,
//     duration:1,
//     delay:-.9,
//     ease:'expo.inout'
// })

// .from('#right #links a', {
//     stagger:.3,
//     opacity:0,
//     x:30,
//     duration:1.2,
//     delay:-2,
//     ease:'expo.inOut'
// })

// function animateTheLayer(){
//     var tl2 = gsap.timeline();
//     tl2.to('#rightoverlay',{
//         duration:1.5,
//         ease:'expo.inOut',
//         left:0,
//      onComplete:function(){
//          var worksamples = document.querySelector('#worksamples');
//          worksamples.style.display = 'flex';
//      }

//     })
//     .from('#rightoverlay h3',{
//         duration:1.5,
//         ease:'expo.inOut',
//         x:40,
//         opacity:0

//     })  
//     .from('#rightoverlay h3 span',{
//         duration:1,
//         delay:-.8,
//         ease:'expo.inOut',
//         x:40,
//         opacity:0

//     })  
// }
// animateTheLayer();
// gsap.from('#center img',{
//     opacity:0,
//     duration:1.5,
//     delay:5,
//     ease:'expo.inOut'
// })