let sliderWrapper = document.querySelector('.custom-slider-wrapper'),
    sliderUl = sliderWrapper.querySelector('.custom-slides'),
    slides = sliderUl.querySelectorAll('li'),
    currentIdx = 0,
    slideCount = slides.length,
    slideWidth = 700, 
    slideMargin = 30, 
    slideToShow = 3,  
    prevBtn = document.querySelector('#custom-prev'),
    nextBtn = document.querySelector('#custom-next');

sliderUl.style.width = (slideWidth * slideCount) + slideMargin * (slideCount - 1) + 'px';

function moveSlide(idx) {
    sliderUl.style.left = -idx * (slideWidth + slideMargin) + 'px';
    currentIdx = idx;
}

nextBtn.addEventListener('click', () => {
    if (currentIdx == slideCount - slideToShow) {
        moveSlide(0); 
    } else {
        moveSlide(currentIdx + 1);
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIdx == 0) {
        moveSlide(slideCount - slideToShow);
    } else {
        moveSlide(currentIdx - 1);
    }
});

function autoSlide() {
    if (currentIdx == slideCount - slideToShow) {
        moveSlide(0); 
    } else {
        moveSlide(currentIdx + 1);
    }
}

let autoSlideInterval = setInterval(autoSlide, 3000);

prevBtn.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 3000); 
});

nextBtn.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 3000); 
});




// countdownjs

function increaseNumberAnimation(elementId, endNumber, speed = 10) {
    const element = document.getElementById(elementId);
    
    if (!element) return;
    
    const animationRunning = JSON.parse(element.dataset.animationRunning ?? "false");
    
    if (animationRunning) return;
    
    element.dataset.animationRunning = true;
  
    incNbrRec(0, endNumber, element, speed);
  }
  
  function incNbrRec(currentNumber, endNumber, element, speed) {
    if (currentNumber <= endNumber) {
      element.innerHTML = currentNumber.toLocaleString();
      
      setTimeout(function() {
        incNbrRec(currentNumber + 1, endNumber, element, speed);
      }, speed);
    } else {
      element.dataset.animationRunning = false;
    }
  }
  
  function triggerOnScroll(elementId, endNumber, speed = 10) {
    const targetElement = document.getElementById(elementId);
    
    if (!targetElement) return;
    
    const observerOptions = {
      root: null,
      threshold: 0.5
    };
    
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          increaseNumberAnimation(elementId, endNumber, speed);
        } else {
          const element = entry.target;
          element.dataset.animationRunning = false;
          element.innerHTML = '0';
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(targetElement);
  }
  
  function applyNumberAnimations(elementsConfig) {
    elementsConfig.forEach(config => {
      triggerOnScroll(config.id, config.endNumber, config.speed);
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const elementsConfig = [
      { id: "nbr1", endNumber: 120, speed: 35 },
      { id: "nbr2", endNumber: 30, speed: 80 },
      { id: "nbr3", endNumber: 300, speed: 10 },
      { id: "nbr4", endNumber: 300, speed: 20 }
    ];
    
    applyNumberAnimations(elementsConfig);
  });
  