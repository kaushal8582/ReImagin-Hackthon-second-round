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
createAnimation(".saltimg img", { x: "-100%" }, { start: "10% 50%", end: "50% 90%" })
createAnimation(".saltimg1 img", { x: "-100%" }, { start: "40% 50%", end: "50% 20%" })


// temp page big circle ke under small circle animation


let arr = [
  {
    "src": "BURGER.png",
    "deg": "45",
    "h1": "Burger",
    "h4": "The Most Delicious"
  },
  {
    "src": "icecream.jpg",
    "deg": "90",
    "h1": "Dessert",
    "h4": "Most Famous"
  },
  {
    "src": "plate burger.png",
    "deg": "135",
    "h1": "Burger",
    "h4": "Delightful and Savory"
  },
  {
    "src": "burger2.png",
    "deg": "180",
    "h1": "Burger",
    "h4": "Tasty Treat"
  },
  {
    "src": "coffe.png",
    "deg": "225",
    "h1": "Coffee",
    "h4": "Perfect Brew"
  },
  {
    "src": "icecream.jpg",
    "deg": "270",
    "h1": "Ice Cream",
    "h4": "Sweet Delight"
  },
  {
    "src": "palatable-chicken-with-spices.png",
    "deg": "315",
    "h1": "Chicken",
    "h4": "Spicy and Juicy"
  },
  {
    "src": "burger 3.png",
    "deg": "360",
    "h1": "Burger",
    "h4": "Ultimate Flavor"
  }
]

const centerImg = document.querySelector(".centerimg img")
const tempBox = document.querySelector(".tempbox")
const rightBtn = document.querySelector(".rightbtn")
const leftbtn = document.querySelector(".leftbtn")
const temptexth4 = document.querySelector(".templeftTexts h4")
const temptexth1 = document.querySelector(".templeftTexts h1")

let index = 0;

function rotateRight() {
  centerImg.style.opacity = '0'
  index = (index + 1) % arr.length;
  tempBox.style.transform = `translate(-50%,-50%) rotate(${arr[index].deg}deg)`
  setTimeout(() => {
    temptexth1.innerText = arr[index].h1
    temptexth4.innerText = arr[index].h4
    centerImg.style.opacity = '1'
    centerImg.src = arr[index].src;
  }, 220);
}
function rotateLeft() {
  centerImg.style.opacity = '0'
  index = (index - 1 + arr.length) % arr.length; 
  tempBox.style.transform = `translate(-50%,-50%) rotate(${arr[index].deg}deg)`
  setTimeout(() => {
    centerImg.style.opacity = '1'
    centerImg.src = arr[index].src;
    temptexth1.innerText = arr[index].h1
    temptexth4.innerText = arr[index].h4
  }, 220);
}

rightBtn.addEventListener("click", rotateRight)
leftbtn.addEventListener("click", rotateLeft)


