var crsr=document.querySelector("#cursor")
var blur=document,querryselector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
     crsr.style.left = dets.x+"px"
     crsr.style.top = dets.y+"px"
     blur.style.left = dets.x-150+"px"
     blur.style.top = dets.y-150+"px"
})
gsap.to("#nav",{
     backgroundColor : "black",
     duration:1,
     delay:1,
     height:"55px",
     scrollTrigger : {
          trigger: "#nav",
          scroller:"body",
          //markers : true, 
          start:" top -10%",
          end:"top -11%", 
          scrub: 1
     }
})
gsap.to("#main",{
     backgroundColor: "black",
     
     scrollTrigger:{
          trigger: "#main",
          scroller:"body",
          //markers: true
          start: "top -50%",
          end:"top -100%",
          scrub: 1
     }
})