const textElement = document.getElementById("text");
const cursorElement = document.getElementById("cursor");
const underscoreElement = document.getElementById("underscore");

const text = "Master the Power of Linux-Based Networking";
let index = 0;

function startUnderscoreAnimation() {
    underscoreElement.style.animation = "";
    cursorElement.style.visibility = "hidden";
    setTimeout(() => {
        underscoreElement.style.animation = "none";
        cursorElement.style.visibility = "visible";
        typeEffect();
    }, 1500); // Blinks for 1.5 seconds
}


function typeEffect() {
    if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100); //typing speed adjust
    }
    else {
        cursorElement.style.animation = "";
        setTimeout(restartAnimation, 5000); // Restart after 5 seconds
    }
}
function restartAnimation() {
    textElement.textContent = "";
    index = 0;
    startUnderscoreAnimation();
}


window.onload = startUnderscoreAnimation;
