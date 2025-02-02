var crsr = document.querySelector("#crsr")
document.addEventListener("mousemove",function(dets){
        crsr.style.left = dets.x+ "px"
        crsr.style.top = dets.y + "px"
    })
    


var crsrblur = document.querySelector("#crsrblur")
document.addEventListener("mousemove",function(dets){
    crsrblur.style.left = dets.x - 50 + "px"
    crsrblur.style.top = dets.y - 50 + "px" 

})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.transform = "scale(3)"
        crsr.style.backgroundColor = "transparent"
        crsr.style.border = "1px solid #fff"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.transform = "scale(1)"
        crsr.style.backgroundColor = "rgba(255, 0, 0, 0.226)"
        crsr.style.border = "0px solid rgba(255, 0, 0, 0.226)"
    })


})

gsap.to("#nav",{
    backgroundColor:"#000",
    height:"70px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,   
        start:"top -10%",
        end:"top -11%",
        scrub:1

        
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
     scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -15%",
        end:"top -80%",
        scrub:2,
        // markers:true,
     }
})

gsap.from("#about-us img , #about-us-in",{
    y:50,
    opacity:0,
    duration: 1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 56%",
        scrub:3,
    }
    

})
gsap.from(".cards",{
    scale:0.8,
    opacity:0,
    duration: 1,
    stagger:0.8,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:1,
    }
})

gsap.to("#wheel1" ,{
    x:50,
    duration: 1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#wheel1",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
    }
})
gsap.to("#wheel2" ,{
    x:-50,
    duration: 1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"p",
        scroller:"body",
        // markers:true,
        start:"top -60%",
        end:"top -55%",
    }
})
gsap.to("#page3-p" ,{
    y:-20,
    duration: 1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#page3-p",
        scroller:"body",
        // markers:true,
        start:"top 65%",
        end:"top 55%",
    }
})

gsap.from("#page4 h1" , {
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 65%",
        scrub:2,
    }
})




