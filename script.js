
const tl = gsap.timeline();
tl
    .to(".header-part-one", {
        opacity:0,
        delay:.5,
        duration:.7
    })
    .to("main", {
        opacity:1,
        duration:.1
    })
    .to(".header-part-two .two .landing-img .effect", {
        left:"100%",
        duration:2,
        ease: "power4.out"
    })
    .to(".scroll-bar", {
        y:30,
        repeat:-1,
        yoyo:true
    })


gsap.to("nav", {
    height:"14vh",
    scrollTrigger:{
        trigger:"nav",
        scroller:"body",
        // markers:true,
        start:"top -.1%",
        scrub:2
    }
}); 



gsap.from("#about", {
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        // markers: true,
        start:"top 86%"
    }
});
gsap.to(".side-anim", {
    left:"100%",
    duration:1,
    scrollTrigger:{
        trigger:".side-anim",
        scroller:"body",
        // markers:true,
        start:"top 85%"
    },

});
gsap.from(".all-about", {
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".all-about",
        scroller:"body",
        // markers:true,
        start:"top 75%"
    },

});
gsap.to(".side-anim2", {
    left:"100%",
    duration:1,
    scrollTrigger:{
        trigger:".side-anim2",
        scroller:"body",
        // markers:true,
        start:"top 80%"
    }
});
gsap.from("#sec-one .four", {
    opacity:0,
    y:50,
    duration:1,
    scrollTrigger:{
        trigger:"#sec-one .four",
        scroller:"body",
        // markers:true,
        start:"top 82%"
    }
});

gsap.from("#services", {
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#services",
        scroller:"body",
        // markers: true,
        start:"top 79%"
    }
});

gsap.to(".side-anim3", {
    left:"100%",
    duration:1,
    scrollTrigger:{
        trigger:".side-anim3",
        scroller:"body",
        // markers:true,
        start:"top 80%"
    }
});  
gsap.from(".responsive", {
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".responsive",
        scroller:"body",
        // markers: true,
        start:"top 75%"
    }
});
gsap.to(".side-anim4", {
    left:"100%",
    duration:1,
    scrollTrigger:{
        trigger:".side-anim4",
        scroller:"body",
        // markers:true,
        start:"top 80%"
    }
});

gsap.from(".development", {
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".development",
        scroller:"body",
        // markers: true,
        start:"top 75%"
    }
});

gsap.from("#works, .work-p", {
    y:50,
    opacity:0,
    duration:1,
    stagger:.5,
    scrollTrigger:{
        trigger:"#works",
        scroller:"body",
        // markers: true,
        start:"top 75%"
    }
});

gsap.from(".line-1", {
        y:-50,
        scale:0,
        opacity:0,
        duration:1,
        stagger:.2,
        scrollTrigger:{
            trigger:".line-1",
            scroller:"body",
            // markers:true,
            start:"top 88%"
        }
});
gsap.from(".line-2", {
    y:50,
    scale:0,
    opacity:0,
    duration:1,
    stagger:.2,
    scrollTrigger:{
        trigger:".line-2",
        scroller:"body",
        // markers:true,
        start:"top 88%"
    }
});
     




