let sliderWrapper = document.querySelector(".custom-slider-wrapper"),
  sliderUl = sliderWrapper.querySelector(".custom-slides"),
  slides = sliderUl.querySelectorAll("li"),
  currentIdx = 0,
  slideCount = slides.length,
  slideWidth = 1120,
  slideMargin = 18,
  slideToShow = 2,
  prevBtn = document.querySelector("#custom-prev"),
  nextBtn = document.querySelector("#custom-next");

function setupSlider() {
  let slidesToClone = slides;
  let totalLoops = 100;

  for (let i = 0; i < totalLoops - 1; i++) {
    slidesToClone.forEach((slide) => {
      sliderUl.appendChild(slide.cloneNode(true));
    });
  }

  slides = sliderUl.querySelectorAll("li");
  slideCount = slides.length;
  sliderUl.style.width =
    slideWidth * slideCount + slideMargin * (slideCount - 1) + "px";
}

setupSlider();

function moveSlide(idx) {
  sliderUl.style.transition = "transform 0.3s ease-in-out";
  sliderUl.style.transform = `translateX(-${
    idx * (slideWidth + slideMargin)
  }px)`;
  currentIdx = idx;
}

nextBtn.addEventListener("click", () => {
  if (currentIdx >= slideCount - slideToShow) {
    moveSlide(0);
  } else {
    moveSlide(currentIdx + 1);
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIdx <= 0) {
    moveSlide(slideCount - slideToShow);
  } else {
    moveSlide(currentIdx - 1);
  }
});

function autoSlide() {
  if (currentIdx >= slideCount - slideToShow) {
    moveSlide(0);
  } else {
    moveSlide(currentIdx + 1);
  }
}

let autoSlideInterval = setInterval(autoSlide, 3000);

prevBtn.addEventListener("click", () => {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(autoSlide, 3000);
});

nextBtn.addEventListener("click", () => {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(autoSlide, 3000);
});

// countdownjs
// function increaseNumberAnimation(elementId, endNumber, speed = 10) {
//     const element = document.getElementById(elementId);

//     if (!element) return;

//     // Check if the animation is already running
//     const animationRunning = JSON.parse(element.dataset.animationRunning ?? "false");

//     if (animationRunning) return; // Prevent re-triggering the animation if it's already running

//     // Mark animation as running
//     element.dataset.animationRunning = true;

//     incNbrRec(0, endNumber, element, speed);
// }

// function incNbrRec(currentNumber, endNumber, element, speed) {
//     if (currentNumber <= endNumber) {
//         element.innerHTML = currentNumber.toLocaleString();

//         setTimeout(function() {
//             incNbrRec(currentNumber + 1, endNumber, element, speed);
//         }, speed);
//     } else {
//         element.dataset.animationRunning = false; // Animation complete, reset flag
//     }
// }

// function triggerOnScroll(elementId, endNumber, speed = 10) {
//     const targetElement = document.getElementById(elementId);

//     if (!targetElement) return;

//     const observerOptions = {
//         root: null,  // Use the viewport
//         threshold: 0.5  // Trigger when 50% of the element is visible
//     };

//     const observerCallback = (entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 increaseNumberAnimation(elementId, endNumber, speed); // Start animation if visible
//             } else {
//                 const element = entry.target;
//                 element.dataset.animationRunning = false; // Stop animation if element is not visible
//                 // Optionally, reset the number to '0' when it's not visible (or leave it)
//                 element.innerHTML = '0';  // Reset number if desired
//             }
//         });
//     };

//     // Create the observer and observe the target element
//     const observer = new IntersectionObserver(observerCallback, observerOptions);
//     observer.observe(targetElement);
// }

// function applyNumberAnimations(elementsConfig) {
//     elementsConfig.forEach(config => {
//         triggerOnScroll(config.id, config.endNumber, config.speed); // Apply the animations for each element
//     });
// }

// document.addEventListener("DOMContentLoaded", () => {
//     const elementsConfig = [
//         { id: "nbr1", endNumber: 120, speed: 35 },  // Change these values to suit your needs
//         { id: "nbr2", endNumber: 30, speed: 80 },
//         { id: "nbr3", endNumber: 300, speed: 10 },
//         { id: "nbr4", endNumber: 300, speed: 20 }
//     ];

//     // Apply the animations to the elements
//     applyNumberAnimations(elementsConfig);
// });
