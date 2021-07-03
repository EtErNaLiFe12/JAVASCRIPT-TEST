const slideEls = document.querySelectorAll('.slide-container .slide');
const slideCon = document.querySelectorAll('.slide-container');
const prev = document.querySelector('.prev-btn');
const next = document.querySelector('.next-btn');

let slideNum = 1;

function sliderBack() {
  
  for(let i = 0; i < slideEls.length; i++) {
    slideEls[i].style.display = "none";
  }
  
  slideNum--;
  
  if(slideNum < 1) {
    slideNum = 3;
  }
  
  slideEls[slideNum - 1].style.display = "block";
}

function slider() {
 
  for(let i = 0; i < slideEls.length; i++) {
    slideEls[i].style.display = "none";
  }
  
  slideNum++;
  
  if(slideNum > slideEls.length) {
    slideNum = 1;
  }

  slideEls[slideNum - 1].style.display = "block";
  slideCon.style.transition = "left .5s";
}

// setInterval(slider, 2000);

prev.addEventListener('click', sliderBack);
next.addEventListener('click', slider);