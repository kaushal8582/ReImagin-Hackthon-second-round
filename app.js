(function () {
  const locomotiveScroll = new LocomotiveScroll();
})();

const allTextP = document.querySelectorAll(".textp")
allTextP.forEach((text) => {
  const textcontent = text.textContent
  const splitedText = textcontent.split("");
  let clutter = ''
  splitedText.forEach((e) => {
    if (e == " ") {
      e = "-"
    }
    clutter += `<span class="a" >${e}</span>`
  })

  text.innerHTML = clutter
})

const createAnimation = (selector, properties, scrollTrigger) => {
  gsap.from(selector, {
    ...properties,
    scrollTrigger: {
      trigger: ".menu",
      scrub: true,
      ...scrollTrigger
    }
  });
};

// Text animations
createAnimation(".textp.first span", { opacity: 0, stagger: 0.1 }, { start: "10% 50%", end: "50% 90%" });
createAnimation(".textp.second span", { opacity: 0, stagger: 0.1 }, { start: "30% 50%", end: "50% 90%" });
createAnimation(".textp.third span", { opacity: 0, stagger: 0.1 }, { start: "60% 50%", end: "80% 90%" });
createAnimation(".textp.fourth span", { opacity: 0, stagger: 0.1 }, { start: "80% 70%", end: "90% 60%" });

// Image animations
createAnimation(".firstImg", { rotate: 90, stagger: 0.1 }, { start: "10% 50%", end: "50% 90%" });
createAnimation(".secondImg", { rotate: 90, stagger: 0.1 }, { start: "30% 50%", end: "50% 40%" });
createAnimation(".thirdImg", { rotate: 90, stagger: 0.1 }, { start: "60% 50%", end: "80% 70%" });
createAnimation(".fourthImg", { rotate: 90, stagger: 0.1 }, { start: "80% 70%", end: "90% 50%" });

// smoke or salt img animation
createAnimation(".saltimg img",{x:"-100%"},{start:"10% 50%", end:"50% 90%"})
createAnimation(".saltimg1 img",{x:"-100%"},{start:"40% 50%", end:"50% 20%" })


// temp page big circle ke under small circle animation

let arr = [
  {
    src:"BURGER.png",
    deg:"45"
  },
  {
    src:"plate burger.png",
    deg:"90"
  },
  {
    src:"palatable-chicken-with-spices.png",
    deg:"135"
  },
  {
    src:"burger2.png",
    deg:"180"
  },
  {
    src:"BURGER.png",
    deg:"205"
  },
  {
    src:"plate burger.png",
    deg:"250"
  },
  {
    src:"palatable-chicken-with-spices.png",
    deg:"295"
  },
  {
    src:"sandwich.png",
    deg:"340"
  },

]

const centerImg = document.querySelector(".centerimg img")
const tempBox = document.querySelector(".tempbox")
const rightBtn = document.querySelector(".rightbtn")
const leftbtn = document.querySelector(".leftbtn")

let index =0;

function rotateRight(){
  centerImg.style.opacity = '0'
  index++;
  tempBox.style.transform = `translate(-50%,-50%) rotate(${arr[index].deg}deg)`
  setTimeout(() => {
    centerImg.style.opacity = '1'
    centerImg.src = arr[index].src;
  },220);
}
function rotateLeft(){
  centerImg.style.opacity = '0'
  index--;
  tempBox.style.transform = `translate(-50%,-50%) rotate(${arr[index].deg}deg)`
  setTimeout(() => {
    centerImg.style.opacity = '1'
    centerImg.src = arr[index].src;
  },220);
}

rightBtn.addEventListener("click",rotateRight)
leftbtn.addEventListener("click",rotateLeft)



var tl = gsap.timeline({scrollTrigger:{
  trigger:".video-section",
  scroller:"body",
  // markers:true,
  start:"100% 130%",
  end:"100% 80%",
  scrub:2,
  duration:2,
  // pin:true,
}});
tl.to(".video video",{
  width:"90vw",
  height:"90vh",
  borderRadius: "20px"
})