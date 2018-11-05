document.addEventListener('DOMContentLoaded', function() {
   anime.timeline({
       easing:'easeOutExpo',
   })
   .add({
       targets: '.nav-wrapper',
       width:['0%', '80%']
   })
   .add({
    targets: '.logo',
    width:['0px', '230px'],
    offset:'-=500',
   })
   .add({
       targets:'.logo h1, nav a',
       opacity:[0,1],
       translateY:[20,0],
       delay: function(el, i) {
        return i * 100;
      },
      offset:'-=700',
   })
   .add({
       targets:'.text-section',
       opacity:[0,1],
       translateY:[100 , 0],
       offset:'-=700'
   })

   .add({
    targets:'.image-section',
    opacity:[0,1],
    translateY:[-100 , 0],
    offset:'-=1000'
})
.add({
    targets:'#gallery-headline',
    height:['0px', '80px'],
    opacity:[0,1],
    offset:'-=800'
})

.add({
    targets:'#gallery-loader',
    height:['0px', '135px'],
    opacity:[0,1],
    offset:'-=700'
})
.add({
    targets:'.ham-line',
    translateX:[500, 0],
    opacity:[0,1],
    duration:800,
    delay: function(el,i){
        return i * 100;
    },
    offset:'-=700'
})

.add({
    targets:'.social a ',
    translateX:[500, 0],
    opacity:[0,1],
    delay: function(el,i){
        return i * 200;
    },
    offset:'-=1000'
})

.add({
    targets:'.gallery-nav ',
    translateY:[500, 0],
    opacity:[0,1],
    delay: function(el,i){
        return i * 200;
    },
    offset:'-=1000'
})
})